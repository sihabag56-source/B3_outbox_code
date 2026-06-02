import React, { useState } from 'react';

function GameLayout({ scenario, onFinish }) {
  // 1. 트리 구조에 맞게 ID 기반으로 상태 관리
  const [currentStepId, setCurrentStepId] = useState(1);
  const [scores, setScores] = useState({ hero: 0, villain: 0, neutral: 0 });
  const [history, setHistory] = useState([]);

  // 2. 현재 단계 데이터 찾기
  const currentStep = scenario?.steps?.find(s => s.id === currentStepId);

  const handleChoice = (choice) => {
    // 🟢 React의 비동기적 상태 지연으로 마지막 달 정보가 누락되는 버그를 원천 봉쇄하는 연산 파이프라인
    const nextScores = {
      ...scores,
      [choice.type]: (scores[choice.type] || 0) + choice.weight
    };
    const nextHistory = [...history, choice.text];

    // 상태 업데이트 요청 (로컬 스크린 렌더링 동기화)
    setScores(nextScores);
    setHistory(nextHistory);

    // 3. 평행우주 점프 (nextId가 end면 종료 프로토콜 실행, 아니면 다음 노드로 전진)
    if (choice.nextId === "end") {
      // 🟢 [연동 매개체] 부모 App.js의 handleFinishGame으로 최종 상태를 파싱합니다.
      onFinish(nextScores, nextHistory);
    } else {
      setCurrentStepId(choice.nextId);
    }
  };

  if (!currentStep) return <div style={{ color: 'white', textAlign: 'center', padding: '50px', fontFamily: 'serif' }}>시나리오 교전 기록을 판독 중입니다...</div>;

  return (
    <div className="game-layout" style={{ backgroundImage: `url("${process.env.PUBLIC_URL + currentStep.defaultImg}")` }}>
      <div className="game-overlay">
        <div className="interaction-area">
          <div className="story-box"><p>{currentStep.context}</p></div>
          <div className="choice-group">
            {currentStep.choices.map((c, i) => (
              <button key={i} className="choice-btn" onClick={() => handleChoice(c)}>
                {c.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameLayout;