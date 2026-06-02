import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../firebase';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { subscribeUser } from '../store/userSlice';
import './Subscription.css';

function Subscription({ onBack }) {
  const dispatch = useDispatch();
  const { isSubscribed, nickname } = useSelector(state => state.user);

  const handleSubscribe = async () => {
    if (isSubscribed) {
      alert("이미 프리미엄 독립군이십니다! 상점으로 이동해 보세요.");
      return;
    }

    try {
      // 1. 파이어베이스 서버 업데이트
      const userRef = doc(db, "users", nickname);
      await updateDoc(userRef, {
        isSubscribed: true,
        tokens: increment(1000) // 구독 보너스 토큰
      });

      // 2. 리덕스 상태 업데이트
      dispatch(subscribeUser());
      alert("🎉 프리미엄 구독 완료! 1,000토큰이 지급되었습니다.");
    } catch (e) {
      console.error("구독 처리 중 오류:", e);
      alert("통신 오류가 발생했습니다.");
    }
  };

  return (
    <div className="subscription-container">
      <div className="sub-card animate-pop">
        <div className="badge">PREMIUM</div>
        <h2>독립군 프리미엄 멤버십</h2>
        <p className="sub-price">매월 새로운 역사 콘텐츠와 혜택</p>
        
        <ul className="benefit-list">
          <li>✅ <strong>특수무기 상점</strong> 즉시 개방</li>
          <li>✅ 가입 즉시 <strong>1,000 토큰</strong> 지급</li>
          <li>✅ 시나리오 모드 <strong>Hero 점수 보너스</strong></li>
          <li>✅ 전투 승리 시 <strong>추가 보상</strong> 획득</li>
        </ul>

        <button 
          className={`sub-action-btn ${isSubscribed ? 'active' : ''}`} 
          onClick={handleSubscribe}
        >
          {isSubscribed ? "이미 구독 중입니다" : "프리미엄 가입하기"}
        </button>
        
        <button className="close-btn" onClick={onBack}>나중에 하기</button>
      </div>
    </div>
  );
}

export default Subscription;