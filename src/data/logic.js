import { CHARACTER_DB } from './characterDB';

export const getFinalResult = (month, scores) => {
  const pool = CHARACTER_DB[month];
  if (!pool || pool.length === 0) return "unknown"; // 에러 방지

  // 1. 해당 달에 배정된 '대표 의인(Hero)'과 '대표 악인(Villain)'을 찾습니다.
  // (CHARACTER_DB 배열에서 가장 먼저 작성된 hero와 villain을 자동으로 가져옵니다)
  const mainHero = pool.find(p => p.type === "hero");
  const mainVillain = pool.find(p => p.type === "villain");

  // 2. 유저의 점수를 비교하여 무조건 둘 중 한 명만 반환합니다.
  // 악인(villain) 선택지를 영웅(hero) 선택지보다 많이 골랐다면 악인 엔딩!
  if (scores.villain > scores.hero) {
    return mainVillain ? mainVillain.id : "unknown";
  } 
  // 그 외의 경우(영웅 선택지를 더 많이 골랐거나 동점일 때)는 무조건 영웅 엔딩!
  else {
    return mainHero ? mainHero.id : "unknown";
  }
};