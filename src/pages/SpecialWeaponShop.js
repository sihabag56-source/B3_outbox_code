// src/pages/SpecialWeaponShop.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../firebase'; // 파이어베이스 DB 임포트
import { doc, updateDoc, arrayUnion, increment } from 'firebase/firestore'; // 파이어베이스 도구
import { WEAPON_DB } from '../data/weaponDB';
import { buyWeapon, subscribeUser } from '../store/userSlice';
import './SpecialWeaponShop.css';

const SpecialWeaponShop = ({ onBack, userNickname }) => {
  const dispatch = useDispatch();
  
  // Redux에서 내 정보 가져오기
  const { isSubscribed, tokens, ownedWeapons } = useSelector(state => state.user);

  // --- [신규] 구독 처리 로직 (서버 저장 포함) ---
  const handleSubscribe = async () => {
    if (!userNickname) return;

    try {
      const userRef = doc(db, "users", userNickname);
      // 1. 파이어베이스 서버 업데이트
      await updateDoc(userRef, {
        isSubscribed: true,
        tokens: increment(1000) // 기존 토큰에 1000개 추가
      });

      // 2. 리덕스 상태 업데이트
      dispatch(subscribeUser());
      alert("프리미엄 구독이 시작되었습니다! 1000토큰이 지급되었습니다. 🇰🇷");
    } catch (e) {
      console.error("구독 처리 실패:", e);
      alert("서버 연결에 실패했습니다. 다시 시도해주세요.");
    }
  };

  // --- [수정] 무기 구매 로직 (서버 저장 포함) ---
  const handleBuy = async (weapon) => {
    if (tokens < weapon.price) {
      alert("토큰이 부족합니다!");
      return;
    }

    if (!userNickname) {
      alert("유저 정보를 찾을 수 없습니다.");
      return;
    }

    try {
      const userRef = doc(db, "users", userNickname);
      // 1. 파이어베이스 서버 업데이트 (무기 추가 및 토큰 차감)
      await updateDoc(userRef, {
        ownedWeapons: arrayUnion(weapon.id),
        tokens: increment(-weapon.price)
      });

      // 2. 리덕스 상태 업데이트
      dispatch(buyWeapon(weapon));
      alert(`[${weapon.name}]을(를) 성공적으로 획득했습니다!`);
    } catch (e) {
      console.error("무기 구매 실패:", e);
      alert("구매 정보를 서버에 저장하지 못했습니다.");
    }
  };

  // 1. 구독자가 아닌 경우 화면
  if (!isSubscribed) {
    return (
      <div className="shop-container not-subscribed">
        <div className="lock-overlay">
          <h2>🔒 특급 기밀 구역</h2>
          <p>이곳은 프리미엄 구독자만 접근할 수 있는 특수무기 상점입니다.</p>
          <button className="sub-btn" onClick={handleSubscribe}>
            지금 구독하고 입장하기 (1000토큰 지급)
          </button>
          <button className="back-link" onClick={onBack}>본부로 돌아가기</button>
        </div>
      </div>
    );
  }

  // 2. 구독자 전용 화면
  return (
    <div className="shop-container">
      <header className="shop-header">
        <button className="back-btn" onClick={onBack}>← 본부로</button>
        <h2>⚔️ 프리미엄 특수무기 상점</h2>
        <div className="token-display">
          <span>보유 토큰:</span>
          <span className="token-count">🪙 {tokens}</span>
        </div>
      </header>

      <div className="weapon-grid">
        {WEAPON_DB.map(weapon => {
          const isOwned = ownedWeapons.includes(weapon.id); // 이미 보유 중인지 확인

          return (
            <div key={weapon.id} className={`weapon-card ${isOwned ? 'owned-card' : ''}`}>
              <div className="weapon-img-placeholder">
                {weapon.image ? <img src={weapon.image} alt={weapon.name} /> : "📦"}
              </div>
              <h3>{weapon.name}</h3>
              <p className="owner-tag">전용: {weapon.ownerId}</p>
              <p className="desc">{weapon.description}</p>
              
              <button 
                className={`buy-btn ${isOwned ? 'owned' : ''}`}
                onClick={() => handleBuy(weapon)}
                disabled={isOwned}
              >
                {isOwned ? "보유 중" : `🪙 ${weapon.price} 토큰`}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialWeaponShop;