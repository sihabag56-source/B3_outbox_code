import React from 'react';
import './MainLayout.css';

// props에 게시판 이동 함수(onGoToBoard)를 추가했습니다.
function MainLayout({ 
  onStart, 
  onGoToMonument, 
  onGoToCollection, 
  onGoToTimelineMap, 
  onGoToMiniGame,
  onGoToSubscription,
  onGoToSpecialShop,
  onGoToBoard // [추가] 자유게시판 이동 핸들러
}) {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="main-layout animate-fade">
      <header className="hero-section">
        {/* [추가] 빨간 글씨 타이틀 바로 위의 자유게시판 버튼 */}
        <div className="board-link-wrapper" style={{ marginBottom: '15px' }}>
          <button 
            className="go-board-btn" 
            onClick={onGoToBoard}
            style={{
              background: '#fff',
              border: '1px solid #ddd',
              padding: '8px 20px',
              borderRadius: '20px',
              color: '#333',
              fontSize: '0.9rem',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            📋 자유게시판 바로가기
          </button>
        </div>

        {/* 타이틀: 빨간색 적용 */}
        <h1 className="main-title" style={{ color: '#8b0000', fontSize: '3.5rem', marginBottom: '10px' }}>
          역사 달력
        </h1>
        <p className="main-subtitle">역사의 달력을 클릭해 그날의 주인공이 되어보세요.</p>
        
        <div className="hero-buttons" style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          
          
          <button className="premium-sub-btn" onClick={onGoToSubscription} style={{
            backgroundColor: '#d4af37',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            🎖️ 프리미엄 구독 안내
          </button>
        </div>
      </header>

     <div className="calendar-grid">
        {months.map(m => (
          <div 
            key={m} 
            className="month-item active" 
            onClick={() => onStart(m)}
          >
            <span className="month-num">{m}월</span>
            <p>진입 가능</p>
          </div>
        ))}
      </div>

      {/* --- 하단 왼쪽 내비게이션 (기록 및 지도) --- */}
      <div className="bottom-left-nav">
        <button className="collection-nav-btn" onClick={onGoToCollection}>
          <span className="icon">📜</span>
          인물도감 보기
        </button>
        
        <button className="map-nav-btn" onClick={onGoToTimelineMap}>
          <span className="icon">🗺️</span>
          역사 지도 보기
        </button>
      </div>

      {/* --- 하단 오른쪽 내비게이션 (과학 연구소 및 특수무기 상점) --- */}
      <div className="bottom-right-nav" style={{ display: 'flex', gap: '10px' }}>
        <button className="shop-nav-btn" onClick={onGoToSpecialShop} style={{
          backgroundColor: '#4a3f35',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <span className="icon">⚔️</span>
          특수무기 상점
        </button>

        <button className="research-nav-btn" onClick={onGoToMiniGame}>
          <span className="icon">🔭</span>
          과학 연구소 (발명품)
        </button>
      </div>
    </div>
  );
}

export default MainLayout;