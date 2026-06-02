import L from 'leaflet';

// 1. 마커 커스텀 아이콘 설정
export const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize:L.point(25, 41),
  iconAnchor:L.point(12, 41),
  popupAnchor:L.point(1, -34)
});

// 2. 전체 사적지 고유 데이터베이스
export const HISTORICAL_SITES = [
  { id: 1, name: "덕수궁(고종 국장)", position: [37.567, 126.975], location: "서울시 중구", desc: "고종 황제의 승하와 3.1 운동의 도화선이 된 곳입니다.", image: "/assets/images/sites/site_01.jpg" },
  { id: 2, name: "도쿄 YMCA", position: [35.695, 139.753], location: "일본 도쿄", desc: "2.8 독립선언이 발표된 장소입니다.", image: "/assets/images/sites/site_02.jpg" },
  { id: 3, name: "탑골 공원", position: [37.571, 126.988], location: "서울시 종로구", desc: "3.1 만세운동이 시작된 곳입니다.", image: "/assets/images/sites/site_03.jpg" },
  { id: 4, name: "임시정부 청사", position: [31.222, 121.472], location: "중국 상하이", desc: "대한민국 임시정부가 수립된 역사의 현장입니다.", image: "/assets/images/sites/site_04.jpg" },
  { id: 5, name: "종로경찰서", position: [37.571, 126.985], location: "서울시 종로구", desc: "김상옥 의사가 폭탄을 투척한 곳입니다.", image: "/assets/images/sites/site_05.jpg" },
  { id: 6, name: "봉오동", position: [42.615, 129.582], location: "중국 연변", desc: "홍범도 장군이 일본군을 대파한 봉오동 전투지입니다.", image: "/assets/images/sites/site_06.jpg" },
  { id: 7, name: "헤이그 특사 숙소", position: [52.080, 4.305], location: "네덜란드 헤이그", desc: "이준 열사가 순국하신 가든 호텔입니다.", image: "/assets/images/sites/site_07.jpg" },
  { id: 8, name: "신흥무관학교", position: [41.950, 126.130], location: "중국 만주", desc: "이회영 선생이 건립한 독립군 양성소입니다.", image: "/assets/images/sites/site_08.jpg" },
  { id: 9, name: "임시정부 청사(충칭)", position: [29.559, 106.574], location: "중국 충칭", desc: "광복군이 창설되고 활동한 임시정부의 마지막 근거지입니다.", image: "/assets/images/sites/site_09.jpg" },
  { id: 10, name: "하얼빈역", position: [45.779, 126.629], location: "중국 하얼빈", desc: "안중근 의사가 이토 히로부미를 처단한 곳입니다.", image: "/assets/images/sites/site_10.jpg" },
  { id: 11, name: "광주학생독립운동기념관", position: [35.155, 126.883], location: "광주광역시", desc: "학생들이 일제의 차별에 맞서 일어난 곳입니다.", image: "/assets/images/sites/site_11.jpg" },
  { id: 12, name: "동양척식주식회사", position: [37.560, 126.980], location: "서울시 중구", desc: "나석주 의사가 수탈의 상징에 폭탄을 던진 곳입니다.", image: "/assets/images/sites/site_12.jpg" }
];

// 3. 월별 시나리오 클리어 -> 사적지 ID 맵
const MONTH_TO_SITE_MAP = {
  1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12
};

// 4. 월 정보를 집어넣으면 해금될 사적지 ID를 숫자로 반환하는 함수
export function getSiteIdByMonth(month) {
  return Number(MONTH_TO_SITE_MAP[month] || month);
}

// 5. 유저 해금 목록 배열을 넣으면 타입 왜곡 없이 마커 대상을 정확히 필터링해주는 마스터 함수
export function filterVisibleSites(unlockedLocations) {
  if (!unlockedLocations || !Array.isArray(unlockedLocations)) {
    console.log("🔍 [관제탑 판독] unlockedLocations 배열이 유효하지 않거나 비어있음");
    return [];
  }
  
  // 문자열이든 숫자든 무조건 매칭되도록 보정
  return HISTORICAL_SITES.filter(site => 
    unlockedLocations.some(unlockedId => String(unlockedId).trim() === String(site.id).trim())
  );
}