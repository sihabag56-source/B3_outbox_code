import React, { useState } from 'react';
import DiaryPage from './DiaryPage';

// 월별 해금 사적지 텍스트 데이터베이스 내장
const SITES_STATIC_DB = {
  1: { name: "덕수궁(고종 국장)", location: "서울시 중구", desc: "고종 황제의 승하와 3.1 운동의 도화선이 된 역사적 궁궐입니다." },
  2: { name: "도쿄 YMCA", location: "일본 도쿄", desc: "조선 청년 독립단이 목숨을 걸고 2.8 독립선언을 선포한 장소입니다." },
  3: { name: "탑골 공원", location: "서울시 종로구", desc: "독립선언서가 낭독되며 온 강토에 3.1 만세 시위의 아우성을 지른 시발점입니다." },
  4: { name: "임시정부 청사", location: "중국 상하이", desc: "망명 지사들이 집결하여 대한민국 임시정부를 수립한 민족의 뿌리입니다." },
  5: { name: "종로경찰서", location: "서울시 종로구", desc: "의열단 김상옥 의사가 일제 탄압의 심장부에 징벌의 폭탄을 던진 장소입니다." },
  6: { name: "봉오동", location: "중국 연변", desc: "홍범도 장군이 이끄는 독립군 연합부대가 일본 정규군을 격파한 계곡입니다." },
  7: { name: "헤이그 특사 숙소", location: "네덜란드 헤이그", desc: "이준 열사가 특사 임무 중 제국주의의 장벽 앞에 한을 품고 분사 순국한 가든 호텔입니다." },
  8: { name: "신흥무관학교", position: [41.950, 126.130], location: "중국 만주", desc: "우당 이회영 가문이 전 재산을 바쳐 건립한 최정예 무장 독립군 요람입니다." },
  9: { name: "임시정부 청사(충칭)", location: "중국 충칭", desc: "한국광복군을 창설하고 국권 회복의 마지막 칼날을 갈던 최후의 사령부입니다." },
  10: { name: "하얼빈역", location: "중국 하얼빈", desc: "안중근 의사가 동양 평화의 적 이토 히로부미를 권총으로 심판한 저격 현장입니다." },
  11: { name: "광주학생독립운동기념관", location: "광주광역시", desc: "학생들이 일제의 식민 차별 교육에 항거하여 거국적 시위를 기획한 발상지입니다." },
  12: { name: "동양척식주식회사", location: "서울시 중구", desc: "나석주 의사가 토지와 자본을 갈취하던 식민 수탈의 핵심 기지에 폭탄을 투척한 곳입니다." }
};

function ResultLayout({ result, onRestart, onGoToMonument, onGoToChat, onGoToCollection, onGoToTimelineMap }) {
  const [viewMode, setViewMode] = useState('certificate'); 
  const { matchedPersona, history, scores, month } = result;

  // 1. 성향 판별 로직
  const isVillain = matchedPersona.type === "villain";
  const isHero = matchedPersona.type === "hero";

  // 2. 성향별 임명장/심판장 설정
  const getCertData = () => {
    if (isVillain) return { 
      title: "반민족행위 심판장", border: "#333", bg: "#f4f4f4", 
      org: "민족정기 심판위원회",
      text: "귀하는 역사적 격변기 속에서 민족의 의지를 저버리고 사익을 취하였기에, 우리 민족의 이름으로 준엄한 심판과 경고를 명하노라." 
    };
    if (isHero) return { 
      title: "독립운동 공로 임명장", border: "#8b0000", bg: "#fff", 
      org: "대한민국 임시정부 기록국",
      text: "귀하는 조국의 독립을 위해 헌신적인 용기를 증명하였기에, 그 공로를 기려 대한민국 임시정부 명예 요원으로 임명합니다." 
    };
    return { 
      title: "시민 의무 표창장", border: "#2980b9", bg: "#fff", 
      org: "대한민국 임시정부 기록국",
      text: "귀하는 평범한 일상 속에서도 민족의 부름에 묵묵히 응답하며 역사의 한 조각을 채웠기에, 그 의로운 마음을 표창합니다." 
    };
  };

  const cert = getCertData();
  const tendency = {
    title: isVillain ? "시대의 배신자" : isHero ? "불굴의 투사" : "깨어있는 시민",
    badge: isVillain ? "🌑" : isHero ? "🔥" : "🇰🇷"
  };

  // --- 뷰 렌더링 ---

  if (viewMode === 'certificate') {
    return (
      <div className="card-reveal-layer">
        <div className="certificate-style-card animate-pop" style={{ backgroundColor: cert.bg }}>
          <div className="cert-header" style={{ borderBottom: `2px solid ${cert.border}` }}>
            <div className="badge-icon">{tendency.badge}</div>
            <h2 className="cert-main-title" style={{ color: cert.border }}>{cert.title}</h2>
          </div>
          <div className="cert-content">
            <p className="cert-id">제 2026-0301-01호</p>
            <h3 className="user-tendency" style={{ color: cert.border }}>분석 결과: {tendency.title}</h3>
            <div className="cert-body-text">{cert.text}</div>
          </div>
          <div className="cert-footer-box">
             <p>2026년 3월 1일</p>
             <p className="org-name">{cert.org}</p>
          </div>
          <button className="next-step-btn" onClick={() => setViewMode('diary')}>나의 행적 복기하기 →</button>
        </div>
      </div>
    );
  }

  if (viewMode === 'diary') return <DiaryPage history={history} onNext={() => setViewMode('match')} />;

  if (viewMode === 'match') {
    return (
      <div className="match-reveal-layer animate-fade">
        <div className="match-content">
          <h2 className="match-question">당신과 같은 길을 걸었던 인물은...</h2>
          <div className="match-visual animate-pop">
             <img src={process.env.PUBLIC_URL + matchedPersona.img} alt={matchedPersona.name} className="matched-hero-img" />
             <h1 className="matched-hero-name">{matchedPersona.name}</h1>
             <p className="matched-hero-tag">{isVillain ? "역사가 기록한 경고" : "우리 마음속의 등불"}</p>
          </div>
          <button className="next-step-btn" onClick={() => setViewMode('article')}>그분의 기록 자세히 보기 →</button>
        </div>
      </div>
    );
  }

  if (viewMode === 'article') {
    return (
      <div className={`result-layout ${isVillain ? 'villain-theme' : 'hero-theme'}`}>
        <div className="newspaper-container animate-fade">
          <header className="newspaper-header">
            <h1>{isVillain ? "號外 (호외)" : "獨立新聞 (독립신문)"}</h1>
          </header>
          <h2 className="article-headline">
            {isVillain ? `[고발] 매국의 길: ${matchedPersona.name}` : `[취재] 독립의 희망: ${matchedPersona.name}`}
          </h2>
          <div className="article-main-text">
            <pre className="article-content-text">{matchedPersona.articleBody}</pre>
          </div>
          <div className="newspaper-footer">
             <button className="historical-button" onClick={() => setViewMode('video')}>🎬 1인칭 다큐멘터리 시청</button>
          </div>
        </div>
      </div>
    );
  }

  if (viewMode === 'video') {
    return (
      <div className="video-reveal-layer animate-fade">
        <div className="video-content-box">
          <div className="video-wrapper">
            <video className="main-video" controls autoPlay>
              <source src={process.env.PUBLIC_URL + matchedPersona.video} type="video/mp4" />
            </video>
          </div>
          <div className="button-group">
            <button className="historical-button" onClick={() => setViewMode('detail')}>📜 인물 상세 기록 확인</button>
          </div>
        </div>
      </div>
    );
  }

  if (viewMode === 'detail') {
    return (
      <div className="detail-reveal-layer animate-fade">
        <div className="detail-content-box">
          <header className="detail-header">
            <h2>{matchedPersona.name} 인물 상세 기록</h2>
          </header>
          <div className="detail-text-box">
            <pre className="article-content-text">{matchedPersona.articleBody}</pre>
          </div>
          <div className="button-group">
            {/* 🟢 [수정] 대화창으로 바로 빠지기 전, 장소 해금 인증서를 확인하는 단계로 라우팅 링크 우회 */}
            <button className="historical-button" onClick={() => setViewMode('unlock')}>
              🗺️ 해금된 아지트 확인하기 →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 🟢 [추가] 이번 작전으로 확보된 독립운동 사적지 해금 쇼케이스 카드 뷰
  if (viewMode === 'unlock') {
    const siteInfo = SITES_STATIC_DB[month] || { name: "비밀 접선지", location: "미식별 지역", desc: "기지에 좌표가 정상적으로 입고되었습니다." };

    return (
      <div className="detail-reveal-layer animate-fade">
        <div className="detail-content-box" style={{ borderColor: '#8b4513', textAlign: 'center' }}>
          <header className="detail-header">
            <span style={{ background: '#8b0000', color: '#fff', padding: '4px 10px', fontSize: '12px', fontWeight: 'bold', borderRadius: '3px' }}>
              SECRET AREA UNLOCKED
            </span>
            <h2 style={{ marginTop: '15px', color: '#8b4513' }}>독립운동 작전 사적지 해금</h2>
          </header>
          
          <div className="unlock-site-card" style={{ background: '#fdfbf7', padding: '30px', border: '1px dashed #8b4513', margin: '20px 0', borderRadius: '4px' }}>
            <h1 style={{ fontSize: '26px', color: '#333', margin: '0 0 10px 0', fontFamily: 'serif' }}>📍 {siteInfo.name}</h1>
            <p style={{ fontSize: '14px', color: '#666', fontWeight: 'bold', margin: '0 0 15px 0' }}>위치: {siteInfo.location}</p>
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#444', textAlign: 'justify', margin: 0, padding: '0 10px' }}>
              {siteInfo.desc}
            </p>
          </div>

          <p style={{ fontSize: '14px', color: '#555', marginBottom: '25px' }}>
            위 장소가 <strong>독립운동 사적지 지도</strong>에 공식 기록되었습니다.
          </p>

          <div className="button-group">
            <button className="historical-button" onClick={onGoToTimelineMap} style={{ background: '#8b0000' }}>
              🗺️ 독립운동 지도에서 확인
            </button>
            <button className="historical-button" onClick={() => onGoToChat(matchedPersona)}>
              💬 {matchedPersona.name}님과 대화
            </button>
            <button className="historical-button" onClick={onRestart}>
              메인으로
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultLayout;