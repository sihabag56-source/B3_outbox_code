import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db, auth } from './firebase'; 
import { doc, getDoc, setDoc, arrayUnion } from 'firebase/firestore'; 
import { onAuthStateChanged, signOut } from 'firebase/auth'; 
import { setUserData } from './store/userSlice'; 

import SiteQRCode from './components/SiteQRCode';
import Subscription from './components/Subscription';
import SpecialWeaponShop from './pages/SpecialWeaponShop';
import MainLayout from './pages/MainLayout';
import GameLayout from './pages/GameLayout';
import ResultLayout from './pages/ResultLayout';
import Monument from './pages/Monument';
import ChatPage from './pages/ChatPage'; 
import CollectionPage from './pages/CollectionPage'; 
import BattlePage from './pages/BattlePage'; 
import TimelineMap from './pages/TimelineMap';
import LoginPage from './pages/LoginPage'; 
import DeckPage from './pages/DeckPage'; 
import MiniGameHub from './pages/MiniGameHub'; 
import BoardPage from './pages/BoardPage';
import { SCENARIOS } from './data/scenarios'; 
import { getFinalResult } from './data/logic';
import { CHARACTER_DB } from './data/characterDB'; 
import { getSiteIdByMonth } from './data/historicalSites';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  
  const [currentPage, setCurrentPage] = useState('main'); 
  const [gameResult, setGameResult] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(3);
  const [chatTarget, setChatTarget] = useState(null);
  const [user, setUser] = useState(null); 
  const [userNickname, setUserNickname] = useState(""); 

  // 🟢 [더블 안전장치] 리덕스/서버 지연을 우회하여 실시간으로 장소를 누적하는 로컬 상태 추가
  const [localUnlockedSites, setLocalUnlockedSites] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const nickname = currentUser.displayName || (userData?.nickname);
        if (nickname) {
          setUserNickname(nickname);
          const userRef = doc(db, "users", nickname);
          const snap = await getDoc(userRef);
          if (snap.exists()) {
            const dbData = snap.data();
            dispatch(setUserData(dbData));
            // 🟢 새로고침 시 기존 서버에 저장되어 있던 장소 목록을 로컬 상태에 복원
            if (dbData.unlockedLocations) {
              setLocalUnlockedSites(dbData.unlockedLocations);
            }
          }
        }
      } else {
        setUser(null);
        setUserNickname("");
        setLocalUnlockedSites([]);
        setCurrentPage('main');
      }
    });
    return () => unsubscribe();
  }, [dispatch, userData?.nickname]);

  const handleLoginSuccess = (authUser, loginUserData) => {
    setUser(authUser);
    setUserNickname(loginUserData.nickname);
    dispatch(setUserData(loginUserData));
    // 🟢 로그인 성공 시 유저가 가지고 있던 장소 리스트 즉시 동기화
    if (loginUserData.unlockedLocations) {
      setLocalUnlockedSites(loginUserData.unlockedLocations);
    }
    setCurrentPage('main');
  };

  const handleStartGame = (month) => {
    setSelectedMonth(month);
    setCurrentPage('game');
  };

  const handleFinishGame = async (scores, history) => {
    const resultId = getFinalResult(selectedMonth, scores);
    
    const currentMonthCharacters = CHARACTER_DB[selectedMonth] || [];
    const matchedPersona = currentMonthCharacters.find(c => c.id === resultId) || {
      id: resultId || "unknown", name: "숨겨진 독립군", type: "neutral",
      stats: { attack: 50, defense: 50, wisdom: 50, lead: 50 },
      desc: "역사의 기록이 아직 기지에 도착하지 않았습니다.",
      img: "/assets/images/cards/neutral.png", comicImgs: [], video: ""
    };

    setGameResult({ matchedPersona, history, month: selectedMonth });

    if (!userNickname) {
      console.warn("⚠️ 닉네임 정보가 없어 DB 저장을 건너뜁니다.");
      setCurrentPage('ending');
      return;
    }

    const userRef = doc(db, "users", userNickname);
    const targetSiteId = getSiteIdByMonth(selectedMonth);

    // 🟢 [안전장치 핵심] 서버에 가기 전, 현재 세션 메모리에 해금 번호를 즉시 강제 주입 (중복 방지 처리)
    setLocalUnlockedSites(prev => {
      const updated = [...prev, Number(targetSiteId)];
      return Array.from(new Set(updated)); // 중복 제거
    });

    console.log(`==== 💾 [메모리 즉시 해금 가동] ====`);
    console.log(`현재 가동된 사적지 ID: ${targetSiteId}번 목록 추가 완료`);

    try {
      await setDoc(userRef, {
        ownedCharacters: arrayUnion(matchedPersona.id),
        unlockedLocations: arrayUnion(Number(targetSiteId)) 
      }, { merge: true });
      
      const updatedSnap = await getDoc(userRef);
      if (updatedSnap.exists()) {
        dispatch(setUserData(updatedSnap.data()));
        // 서버 저장 성공 후 최종 서버 값으로 더블 체크 동기화
        if (updatedSnap.data().unlockedLocations) {
          setLocalUnlockedSites(updatedSnap.data().unlockedLocations);
        }
      }
    } catch (e) {
      console.error("❌ 서버 저장 실패 에러 로그:", e);
    }
    setCurrentPage('ending');
  };

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까? 기록을 유지하려면 같은 성함으로 다시 접속해주세요.")) {
      signOut(auth).then(() => {
        setUser(null);
        setUserNickname("");
        setLocalUnlockedSites([]);
        setCurrentPage('main');
      }).catch((error) => {
        console.error("로그아웃 실패:", error);
      });
    }
  };

  if (!user || !userNickname) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="App">
      <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000, display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '14px', fontWeight: 'bold', background: 'rgba(255,255,255,0.8)', padding: '5px 10px', borderRadius: '20px', color: '#333' }}>
          🇰🇷 {userNickname} 독립군
        </span>
        <button onClick={handleLogout} style={{ padding: '5px 12px', cursor: 'pointer', background: '#4a3f35', color: 'white', border: 'none', borderRadius: '5px', fontSize: '12px' }}>로그아웃</button>
      </div>

      <div className="content-area">
        {currentPage === 'main' && (
          <>
            <MainLayout onStart={handleStartGame} onGoToMonument={() => setCurrentPage('monument')} onGoToCollection={() => setCurrentPage('collection')} onGoToTimelineMap={() => setCurrentPage('timelineMap')} onGoToMiniGame={() => setCurrentPage('minigame')} onGoToSubscription={() => setCurrentPage('subscription')} onGoToSpecialShop={() => setCurrentPage('specialShop')} onGoToBoard={() => setCurrentPage('board')} />
            <footer style={{ padding: '40px 0', borderTop: '1px solid #ddd', backgroundColor: '#fff', marginTop: '20px' }}><SiteQRCode /></footer>
          </>
        )}
        {currentPage === 'board' && <BoardPage onBack={() => setCurrentPage('main')} />}
        {currentPage === 'subscription' && <div className="sub-page-wrapper"><button onClick={() => setCurrentPage('main')} style={{ margin: '20px' }}>← 뒤로가기</button><Subscription /></div>}
        {currentPage === 'specialShop' && <SpecialWeaponShop userNickname={userNickname} onBack={() => setCurrentPage('main')} />}
        {currentPage === 'game' && <GameLayout key={selectedMonth} scenario={SCENARIOS[selectedMonth]} onFinish={handleFinishGame} />}
        
        {currentPage === 'ending' && (
          <ResultLayout 
            result={gameResult} 
            onRestart={() => setCurrentPage('main')} 
            onGoToMonument={() => setCurrentPage('monument')} 
            onGoToChat={() => {setChatTarget(gameResult?.matchedPersona); setCurrentPage('chat');}} 
            onGoToCollection={() => setCurrentPage('collection')} 
            onGoToTimelineMap={() => setCurrentPage('timelineMap')}
          />
        )}
        
        {currentPage === 'monument' && <Monument onBack={() => setCurrentPage('main')} />}
        {currentPage === 'collection' && <CollectionPage cards={Object.values(CHARACTER_DB).flat()} onBack={() => setCurrentPage('main')} onChat={(c) => {setChatTarget(c); setCurrentPage('chat');}} onBattle={() => setCurrentPage('battle')} onGoToDeck={() => setCurrentPage('deck')} />}
        {userData && currentPage === 'deck' && <DeckPage cards={Object.values(CHARACTER_DB).flat()} userId={userNickname} onBack={() => setCurrentPage('collection')} />}
        {currentPage === 'battle' && <BattlePage cards={Object.values(CHARACTER_DB).flat()} onBack={() => setCurrentPage('collection')} />}
        {currentPage === 'minigame' && <MiniGameHub onBack={() => setCurrentPage('main')} />}
        
        {currentPage === 'timelineMap' && (
          <TimelineMap 
            onBack={() => setCurrentPage('main')} 
            // 🟢 [수정 핵심] 리덕스 상태가 아닌, 실시간 동기화 보장형 로컬 메모리 상태 배열을 직접 주입합니다.
            unlockedSites={localUnlockedSites} 
          />
        )}
        {currentPage === 'chat' && <ChatPage target={chatTarget} onBack={() => setCurrentPage(chatTarget?.name === gameResult?.matchedPersona?.name ? 'ending' : 'collection')} />}
      </div>
    </div>
  );
}

export default App;