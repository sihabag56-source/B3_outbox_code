import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // [추가] useDispatch 추가
import { COLLECTION_IMAGES } from '../data/collectionData';
import { INVENTION_DATA } from '../data/inventionData'; 
import { WEAPON_DB } from '../data/weaponDB'; // [추가] 특수무기 DB 임포트
import { equipWeapon } from '../store/userSlice'; // [추가] 장착 액션 임포트
import { db } from '../firebase'; // [추가] 파이어베이스 임포트
import { doc, updateDoc } from 'firebase/firestore'; // [추가] 파이어베이스 도구 임포트
import './CollectionPage.css';

function CollectionPage({ cards, onBack, onChat, onBattle, onGoToDeck }) {
  const dispatch = useDispatch(); // [추가]
  
  // [상태] 현재 어떤 도감 탭을 보여줄지 ('person' 또는 'invention')
  const [activeTab, setActiveTab] = useState('person');
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [selectedComic, setSelectedComic] = useState(null); 

  // [Redux] 유저 데이터 가져오기
  const { 
    ownedCharacters = [], 
    ownedInventions = [], 
    currentDeck = [],
    ownedWeapons = [], // [추가] 보유 무기 목록
    equippedWeapons = {}, // [추가] 장착 정보 { 인물ID: 무기ID }
    nickname // [추가] 파이어베이스 업데이트를 위한 닉네임
  } = useSelector(state => state.user);

  // [추가] 특수무기 장착/해제 핸들러
  const handleEquipToggle = async (e, charId, weaponId) => {
    e.stopPropagation(); // 카드 뒤집기 이벤트 방지
    if (!nickname) return;

    const currentEquipped = equippedWeapons[charId];
    const newWeaponId = currentEquipped === weaponId ? null : weaponId;

    try {
      const userRef = doc(db, "users", nickname);
      // 파이어베이스 서버 업데이트
      await updateDoc(userRef, {
        [`equippedWeapons.${charId}`]: newWeaponId
      });

      // 리덕스 상태 업데이트
      dispatch(equipWeapon({ charId, weaponId: newWeaponId }));
      
      if (newWeaponId) alert("특수무기를 장착했습니다!");
      else alert("무기를 해제했습니다.");
    } catch (err) {
      console.error("장착 실패:", err);
      alert("서버 저장에 실패했습니다.");
    }
  };

  // 카드 클릭 시 뒤집기 (획득한 카드만 뒤집기 가능)
  const handleCardClick = (index, isOwned) => {
    if (!isOwned || selectedComic) return; 
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  // 4컷 만화 모달 열기
  const openComicModal = (e, imgSet, cardName) => {
    e.stopPropagation(); 
    if (imgSet.comics && imgSet.comics.length > 0) {
      setSelectedComic({ comics: imgSet.comics, name: cardName });
    }
  };

  return (
    <div className="collection-container">
      <header className="col-header">
        <button className="back-btn" onClick={onBack}>← 메인으로</button>
        <div className="col-title-group">
          <div className="col-tabs">
            <button 
              className={`tab-btn ${activeTab === 'person' ? 'active' : ''}`}
              onClick={() => { setActiveTab('person'); setFlippedIndex(null); }}
            >
              인물 도감 ({ownedCharacters.length}/{cards.length})
            </button>
            <button 
              className={`tab-btn ${activeTab === 'invention' ? 'active' : ''}`}
              onClick={() => { setActiveTab('invention'); setFlippedIndex(null); }}
            >
              발명품 카드 ({ownedInventions.length}/{Object.keys(INVENTION_DATA).length})
            </button>
          </div>
        </div>
      </header>

      {/* --- [분기] 1. 인물 도감 영역 --- */}
      {activeTab === 'person' && (
        <div className="card-grid">
          {cards.map((card, i) => {
            const isOwned = ownedCharacters.includes(card.id);
            const isInDeck = currentDeck.includes(card.id);
            const imgSet = COLLECTION_IMAGES[card.id] || {};
            
            // [추가] 이 인물의 전용 무기 정보 확인
            const specialWeapon = WEAPON_DB.find(w => w.ownerId === card.id);
            const isWeaponOwned = ownedWeapons.includes(specialWeapon?.id);
            const isEquipped = equippedWeapons[card.id] === specialWeapon?.id;

            return (
              <div 
                key={card.id || i} 
                className={`card-scene ${flippedIndex === i ? 'is-flipped' : ''} ${!isOwned ? 'is-locked' : ''} ${isInDeck ? 'in-deck' : ''}`}
                onClick={() => handleCardClick(i, isOwned)}
              >
                <div className={`game-card ${card.type}`}>
                  {/* 카드 앞면 */}
                  <div className="card-face card-front">
                    {!isOwned && <div className="lock-tag">🔒 미획득</div>}
                    {isOwned && isInDeck && <div className="deck-badge">DECK</div>}
                    {/* [추가] 장착 중일 때 앞면 배지 표시 */}
                    {isOwned && isEquipped && <div className="equip-badge-front">⚔️ EQUIP</div>}
                    
                    <div className="card-rank">{(card.type || 'HERO').toUpperCase()}</div>
                    <div className="card-image-box">
                      {imgSet.main ? (
                        <img 
                          src={process.env.PUBLIC_URL + imgSet.main} 
                          alt={card.name} 
                          className="char-img" 
                          style={{ filter: isOwned ? 'none' : 'grayscale(100%) brightness(0.6)' }}
                        />
                      ) : (
                        <span className="default-icon">👤</span>
                      )}
                    </div>
                    <h3 className="card-name">{isOwned ? card.name : "???"}</h3>
                    
                    <div className="card-stats" style={{ opacity: isOwned ? 1 : 0.2 }}>
                      {card.stats && Object.entries(card.stats).map(([key, val]) => (
                        <div className="stat-row" key={key}>
                          <span className="stat-label">
                            {key === 'attack' ? '공격' : key === 'defense' ? '방어' : key === 'wisdom' ? '지력' : '통솔'}
                          </span>
                          <div className="bar-bg">
                            <div className="bar" style={{ width: isOwned ? `${val}%` : '0%' }}></div>
                          </div>
                          <span className="stat-value">{isOwned ? val : '--'}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 카드 뒷면 */}
                  <div className="card-face card-back">
                    {isOwned && (
                      <div className="card-back-content">
                        <h3 className="back-name">{card.name}의 기록</h3>
                        <div className="comic-grid" onClick={(e) => openComicModal(e, imgSet, card.name)}>
                          {imgSet.comics?.map((src, idx) => (
                            <div key={idx} className="comic-panel">
                              <img src={process.env.PUBLIC_URL + src} alt="comic" />
                            </div>
                          ))}
                        </div>
                        <p className="card-desc-short">{card.desc}</p>

                        {/* [추가] 특수무기 장착 버튼 영역 */}
                        {specialWeapon && (
                          <div className="special-weapon-control">
                            {isWeaponOwned ? (
                              <button 
                                className={`equip-toggle-btn ${isEquipped ? 'active' : ''}`}
                                onClick={(e) => handleEquipToggle(e, card.id, specialWeapon.id)}
                              >
                                {isEquipped ? `🛡️ ${specialWeapon.name} 해제` : `⚔️ ${specialWeapon.name} 장착`}
                              </button>
                            ) : (
                              <div className="weapon-locked-hint">🔒 전용 무기 미보유 (상점 방문)</div>
                            )}
                          </div>
                        )}

                        <div className="action-btn-group">
                          <button className="chat-btn" onClick={(e) => { e.stopPropagation(); onChat(card); }}>💭 대화하기</button>
                         
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* --- [분기] 2. 발명품 도감 영역 --- */}
      {activeTab === 'invention' && (
        <div className="card-grid invention-grid">
          {Object.entries(INVENTION_DATA).map(([name, data]) => {
            const isOwned = ownedInventions.includes(name);

            return (
              <div 
                key={data.id} 
                className={`invention-card animate-pop ${!isOwned ? 'is-locked' : 'is-owned'}`}
              >
                <div className="item-tag">{isOwned ? "연구 완료" : "미획득"}</div>
                <div className="item-image-box">
                  <img 
                    src={process.env.PUBLIC_URL + data.img} 
                    alt={data.name} 
                    style={{ filter: isOwned ? 'none' : 'grayscale(100%) brightness(0.3)' }}
                  />
                  {!isOwned && <div className="lock-icon-overlay">🔒</div>}
                </div>
                <h3 className="item-name">{isOwned ? data.name : "???"}</h3>
                <p className="item-effect">필살기 위력: {isOwned ? data.power : "???"}</p>
                <div className="item-desc">
                  {isOwned ? data.desc : "과학 연구소에서 미니게임을 깨고 발명품을 획득하세요!"}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* --- 4컷 만화 모달 --- */}
      {selectedComic && (
        <div className="comic-modal-overlay" onClick={() => setSelectedComic(null)}>
          <div className="comic-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedComic(null)}>×</button>
            <h2 className="modal-title">{selectedComic.name}의 이야기</h2>
            <div className="modal-comic-grid">
              {selectedComic.comics.map((src, idx) => (
                <div key={idx} className="modal-panel">
                  <img src={process.env.PUBLIC_URL + src} alt={`panel-${idx}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- 하단 고정 버튼 바 --- */}
      <footer className="collection-footer-bar">
        <button className="footer-action-btn deck-build-btn" onClick={onGoToDeck}>
          🛠️ 부대 편성 (Deck Build)
        </button>
        <button 
          className="footer-action-btn battle-arena-btn" 
          onClick={() => onBattle()} 
          disabled={currentDeck.length === 0}
        >
          ⚔️ 배틀 Arena 입장
        </button>
      </footer>
    </div>
  );
}

export default CollectionPage;