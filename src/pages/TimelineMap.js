import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './TimelineMap.css';
// 🟢 독립 파일 관제탑에서 커스텀 아이콘 및 마스터 필터 함수 임포트
import { DefaultIcon, HISTORICAL_SITES, filterVisibleSites } from '../data/historicalSites';

// 마커 자동 화각 정렬 컴포넌트
function MapViewUpdater({ visibleSites }) {
  const map = useMap();
  useEffect(() => {
    if (visibleSites && visibleSites.length > 0) {
      const bounds = L.latLngBounds(visibleSites.map(site => site.position));
      map.fitBounds(bounds, { padding:0, maxZoom: 10 });
    }
  }, [visibleSites, map]);
  return null;
}

function TimelineMap({ onBack, unlockedSites = [] }) {
  const [selectedSite, setSelectedSite] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);

  // 🟢 관제탑 마스터 필터링 함수를 실행하여 예외 필터링 완벽 통제
  const visibleSites = filterVisibleSites(unlockedSites);

  console.log("🛠️ [지도 모듈 진입 로그] 유저 해금 원본 리스트:", unlockedSites);
  console.log("🛠️ [지도 모듈 진입 로그] 판독 완료 매칭 마커 개수:", visibleSites.length);

  const handleFlyToSite = (site) => {
    setSelectedSite(site);
    if (mapInstance) {
      mapInstance.flyTo(site.position, 11, { animate: true, duration: 1.2 });
    }
  };

  return (
    <div className="map-container animate-fade" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <header className="map-header">
        <button className="back-btn" onClick={onBack}>← 메인으로</button>
        <div className="header-text">
          <h2>독립운동 사적지 지도</h2>
          <p>발견한 사적지: {visibleSites.length} / {HISTORICAL_SITES.length} 곳</p>
        </div>
      </header>

      <div className="map-layout-body" style={{ display: 'flex', flex: 1, position: 'relative' }}>
        
        {/* 좌측 발견 아지트 목록 사이드바 도크 */}
        <div className="site-sidebar" style={{ width: '260px', background: '#f8f5f0', borderRight: '2px solid #8b4513', overflowY: 'auto', padding: '15px' }}>
          <h3 style={{ fontSize: '15px', color: '#5d2906', borderBottom: '1px solid #ddd', paddingBottom: '10px', margin: 0 }}>🧭 발견한 아지트 목록</h3>
          {visibleSites.length === 0 ? (
            <p style={{ fontSize: '13px', color: '#999', marginTop: '20px' }}>아직 발견된 기록이 없습니다.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
              {visibleSites.map(site => (
                <li 
                  key={site.id} 
                  onClick={() => handleFlyToSite(site)}
                  style={{ padding: '10px', marginBottom: '8px', background: selectedSite?.id === site.id ? '#8b0000' : '#fff', color: selectedSite?.id === site.id ? '#fff' : '#333', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', transition: 'all 0.2s' }}
                >
                  📍 {site.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 대륙 맵 시각화 레이어 */}
        <div className="map-body" style={{ flex: 1, height: '100%' }}>
          <MapContainer 
            key={unlockedSites.join(',')} 
            center={[36.5, 127.8]} 
            zoom={7} 
            style={{ height: "100%", width: "100%" }}
            ref={setMapInstance}
          >
            <TileLayer 
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            />

            {visibleSites.map((site) => (
              <Marker 
                key={site.id} 
                position={site.position}
                icon={DefaultIcon}
                eventHandlers={{ click: () => setSelectedSite(site) }}
              >
                <Popup><strong>{site.name}</strong></Popup>
              </Marker>
            ))}

            <MapViewUpdater visibleSites={visibleSites} />
          </MapContainer>

          {visibleSites.length === 0 && (
            <div className="empty-map-msg" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255,255,255,0.95)', padding: '25px', borderRadius: '6px', textAlign: 'center', zIndex: 1000, boxShadow: '0 4px 15px rgba(0,0,0,0.15)', border: '1px solid #ddd' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#333', fontSize: '14px', lineHeight: '1.6' }}>아직 발견한 사적지가 없습니다.<br/>시나리오를 클리어하여 지도를 채워보세요!</p>
            </div>
          )}

          {selectedSite && (
            <div className="info-panel-overlay" style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 1000, width: '360px' }}>
              <div className="info-panel" style={{ background: '#fff', padding: '20px', borderRadius: '6px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', border: '2px solid #8b4513' }}>
                <button className="close-panel" onClick={() => setSelectedSite(null)} style={{ float: 'right', background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#999' }}>×</button>
                <div className="info-content">
                  <span style={{ background: '#8b0000', color: '#fff', padding: '2px 6px', borderRadius: '3px', fontSize: '11px', fontWeight: 'bold' }}>역사적 현장</span>
                  <h3 style={{ margin: '8px 0 4px 0', fontSize: '17px', color: '#5d2906' }}>{selectedSite.name}</h3>
                  <p style={{ fontSize: '12px', color: '#777', margin: '0 0 8px 0' }}>📍 {selectedSite.location}</p>
                  <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '8px 0' }} />
                  <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#444', margin: 0 }}>{selectedSite.desc}</p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default TimelineMap;