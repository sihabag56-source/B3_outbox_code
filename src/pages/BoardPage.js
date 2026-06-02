import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../firebase'; 
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  deleteDoc, 
  doc, 
  serverTimestamp 
} from 'firebase/firestore';
import './BoardPage.css';

function BoardPage({ onBack }) {
  const { nickname } = useSelector(state => state.user);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [iswriting, setIsWriting] = useState(false);

  // 1. 게시글 실시간 불러오기
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postData);
    });
    return () => unsubscribe();
  }, []);

  // 2. 게시글 저장
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        author: nickname || "익명의 독립군",
        createdAt: serverTimestamp()
      });
      setTitle('');
      setContent('');
      setIsWriting(false);
    } catch (err) {
      console.error("저장 실패:", err);
    }
  };

  // 3. 삭제 처리
  const handleDelete = async (id) => {
    if (window.confirm("이 기록을 삭제하시겠습니까?")) {
      await deleteDoc(doc(db, "posts", id));
    }
  };

  return (
    <div className="board-page animate-fade">
      <header className="board-header">
        <button className="back-btn" onClick={onBack}>← 본부로</button>
        <h2 className="board-title">자유 게시판</h2>
        <button className="write-toggle-btn" onClick={() => setIsWriting(!iswriting)}>
          {iswriting ? "취소" : "📝 글쓰기"}
        </button>
      </header>

      {iswriting && (
        <form className="write-form animate-pop" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="제목" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea 
            placeholder="동지들에게 남길 말을 적어주세요." 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">기록하기</button>
        </form>
      )}

      <div className="post-list">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-meta">
                <span className="post-author">👤 {post.author}</span>
                <span className="post-date">
                  {post.createdAt?.toDate().toLocaleDateString()}
                </span>
              </div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">{post.content}</p>
              {post.author === nickname && (
                <button className="delete-btn" onClick={() => handleDelete(post.id)}>삭제</button>
              )}
            </div>
          ))
        ) : (
          <div className="empty-msg">아직 남겨진 기록이 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default BoardPage;