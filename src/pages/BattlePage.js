import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // [수정] useDispatch 추가
import { COLLECTION_IMAGES } from '../data/collectionData';
import { INVENTION_DATA } from '../data/inventionData'; 
import { WEAPON_DB } from '../data/weaponDB'; // [추가] 특수무기 데이터
import { db } from '../firebase'; // [추가] 토큰 저장을 위한 db
import { doc, updateDoc, increment } from 'firebase/firestore'; // [추가] 서버 업데이트용
import { addTokens } from '../store/userSlice'; // [추가] 리덕스 토큰 업데이트용
import './BattlePage.css';

function BattlePage({ cards, onBack }) {
  const dispatch = useDispatch(); // [추가]
  const { 
    currentDeck = [], 
    ownedInventions = [], 
    equippedWeapons = {}, // [추가] 장착된 무기 정보 { 인물ID: 무기ID }
    nickname 
  } = useSelector(state => state.user);
  
  // [상태] 기본 배틀 정보
  const [playerLP, setPlayerLP] = useState(4000);
  const [enemyLP, setEnemyLP] = useState(4000);
  const [round, setRound] = useState(0);
  const [battleLog, setBattleLog] = useState("부대를 정비하고 필살기를 준비하세요!");
  const [isGameOver, setIsGameOver] = useState(false);

  // [상태] 발명품 필살기 시스템
  const [equippedInvention, setEquippedInvention] = useState(null); 
  const [isSpecialUsed, setIsSpecialUsed] = useState(false); 

  const playerDeck = currentDeck.map(id => cards.find(c => c.id === id)).filter(Boolean);
  const enemyDeck = [
    { name: "일본군 보병", atk: 1200, def: 800, img: "/assets/images/enemies/soldier.png" },
    { name: "헌병대 장교", atk: 1800, def: 1200, img: "/assets/images/enemies/police.png" },
    { name: "최종 총독부군", atk: 3500, def: 2500, img: "/assets/images/enemies/boss.png" }
  ];

  // [로직] 일반 공격 (특수무기 효과 포함)
  const handleAttack = () => {
    if (isGameOver || playerDeck.length === 0) return;
    
    const pCard = playerDeck[round % playerDeck.length];
    const eCard = enemyDeck[round % enemyDeck.length];
    
    // --- [특수무기 보너스 계산 시작] ---
    const weaponId = equippedWeapons[pCard.id];
    const weaponInfo = WEAPON_DB.find(w => w.id === weaponId);
    
    let pAtk = pCard.stats.attack * 25;
    let eDef = eCard.def;
    let weaponBonusLog = "";

    if (weaponInfo) {
      if (weaponId === "w_yu_01") {
        pAtk *= 1.15; // 유관순: 공격력 15% 상승
        weaponBonusLog = `[${weaponInfo.name}] 발동! `;
      } else if (weaponId === "w_son_01") {
        eDef *= 0.8; // 손병희: 적 방어력 20% 감소
        weaponBonusLog = `[${weaponInfo.name}]로 적의 방패를 약화시켰습니다! `;
      } else if (weaponId === "w_han_01") {
        pAtk += 500; // 한용운: 고정 데미지 추가
        weaponBonusLog = `[${weaponInfo.name}]의 의지로 힘이 솟습니다! `;
      } else if (weaponId === "w_kim_01") {
        eDef = 0; // 김마리아: 적 방어력 무시
        weaponBonusLog = `[${weaponInfo.name}] 발동! 적의 허점을 찔렀습니다! `;
      } else if (weaponId === "w_lee_01") {
        // 이완용: 20% 확률로 아군 데미지 및 공격 실패
        if (Math.random() < 0.2) {
          setPlayerLP(prev => Math.max(0, prev - 400));
          setBattleLog(`⚠️ [${weaponInfo.name}] 발동! 배신자의 기운에 아군이 400의 피해를 입었습니다!`);
          setRound(prev => prev + 1);
          return;
        }
        pAtk *= 1.3; // 성공 시 공격력 30% 급증
        weaponBonusLog = `[${weaponInfo.name}] 발동! 비열하지만 강력한 일격을 날립니다! `;
      }
    }
    // --- [특수무기 보너스 계산 끝] ---

    const damage = Math.max(0, Math.floor(pAtk - eDef));

    if (damage > 0) {
      setEnemyLP(prev => Math.max(0, prev - damage));
      setBattleLog(`${weaponBonusLog}${pCard.name}의 돌격! ${eCard.name}에게 ${damage} 데미지!`);
    } else {
      setPlayerLP(prev => Math.max(0, prev - 500));
      setBattleLog(`공격이 막혔습니다! 500의 반동 피해를 입었습니다.`);
    }
    setRound(prev => prev + 1);
  };

  // [로직] 발명품 필살기 공격 (전투 중 1회)
  const useSpecialSkill = () => {
    if (!equippedInvention || isSpecialUsed || isGameOver) return;
    
    const invData = INVENTION_DATA[equippedInvention];
    setEnemyLP(prev => Math.max(0, prev - invData.power));
    setBattleLog(`🔥필살기 [${invData.name}] 발동! 적에게 ${invData.power}의 고정 데미지!!`);
    setIsSpecialUsed(true);
  };

  // [로직] 승리/패배 판정 및 김마리아 추가 보상
  useEffect(() => {
    if (enemyLP <= 0) { 
      // 김마리아 무기(w_kim_01) 장착 여부 확인
      const isKimMariaEquipped = playerDeck.some(card => equippedWeapons[card.id] === "w_kim_01");
      
      if (isKimMariaEquipped && !isGameOver) {
        // 서버 및 리덕스에 토큰 50개 추가
        const userRef = doc(db, "users", nickname);
        updateDoc(userRef, { tokens: increment(50) })
          .then(() => dispatch(addTokens(50)))
          .catch(err => console.error("토큰 지급 실패:", err));
          
        setBattleLog("대한 독립 만세! 김마리아 지사의 조력으로 추가 토큰(🪙50)을 확보했습니다!");
      } else {
        setBattleLog("대한 독립 만세! 승리하셨습니다!"); 
      }
      setIsGameOver(true); 
    }
    else if (playerLP <= 0) { 
      setBattleLog("전력이 부족합니다... 재정비가 필요합니다."); 
      setIsGameOver(true); 
    }
  }, [enemyLP, playerLP, equippedWeapons, playerDeck, nickname, dispatch, isGameOver]);

  return (
    <div className="battle-arena-container">
      {/* 상단: 적군 상태 */}
      <div className="arena-side enemy-field">
        <div className="status-box">
          <p className="unit-name">{enemyDeck[round % enemyDeck.length].name}</p>
          <div className="lp-bar-bg"><div className="lp-bar-fill enemy" style={{width: `${(enemyLP/4000)*100}%`}}></div></div>
          <p className="lp-text">ENEMY LP: {enemyLP}</p>
        </div>
      </div>

      {/* 중앙: 로그 및 발명품 장착 선택창 */}
      <div className="battle-center-ui">
        {!equippedInvention && !isGameOver ? (
          <div className="invention-selector">
            <p className="select-msg">전투에 사용할 발명품을 장착하세요</p>
            <div className="inv-button-grid">
              {ownedInventions.length > 0 ? (
                ownedInventions.map(name => (
                  <button key={name} className="inv-select-btn" onClick={() => setEquippedInvention(name)}>
                    {name}
                  </button>
                ))
              ) : <p className="no-inv-msg">보유 중인 발명품이 없습니다.</p>}
            </div>
          </div>
        ) : (
          <div className="log-window"><p className="log-text">{battleLog}</p></div>
        )}
      </div>

      {/* 하단: 내 부대 및 발명품 버튼 */}
      <div className="arena-side player-field">
        <div className="battle-card player-card animate-up" key={round}>
          {/* [추가] 현재 인물이 특수무기를 장착 중이면 표시 */}
          {equippedWeapons[playerDeck[round % playerDeck.length]?.id] && (
            <div className="special-weapon-badge">⚔️ 특수무기 효과 적용 중</div>
          )}
          
          <img src={process.env.PUBLIC_URL + (COLLECTION_IMAGES[playerDeck[round % playerDeck.length]?.id]?.main || "")} alt="hero" />
          <div className="card-stats">
            ATK {Math.floor(playerDeck[round % playerDeck.length]?.stats.attack * 25)}
            {equippedWeapons[playerDeck[round % playerDeck.length]?.id] === "w_yu_01" && <span className="up-arrow"> (+15%)</span>}
            {equippedWeapons[playerDeck[round % playerDeck.length]?.id] === "w_lee_01" && <span className="up-arrow"> (+30%)</span>}
          </div>
        </div>
        <div className="status-box">
          <p className="unit-name">{playerDeck[round % playerDeck.length]?.name}</p>
          <div className="lp-bar-bg"><div className="lp-bar-fill player" style={{width: `${(playerLP/4000)*100}%`}}></div></div>
          <p className="lp-text">{nickname} LP: {playerLP}</p>
        </div>
      </div>

      {/* 하단 버튼 컨트롤 */}
      <div className="battle-controls">
        {isGameOver ? (
          <button className="battle-btn finish" onClick={onBack}>기지로 돌아가기</button>
        ) : (
          <>
            <button className="battle-btn attack" onClick={handleAttack}>일반 공격</button>
            <button 
              className={`battle-btn special-skill ${(!equippedInvention || isSpecialUsed) ? 'disabled' : ''}`} 
              onClick={useSpecialSkill}
              disabled={!equippedInvention || isSpecialUsed}
            >
              {isSpecialUsed ? "발명품 재충전 중" : equippedInvention ? `${equippedInvention} 발동!` : "미장착"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default BattlePage;