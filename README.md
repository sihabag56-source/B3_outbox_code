🇰🇷 100년 전 그날의 주인이 되다 | 역사 달력

팀 프로젝트 | React + Redux + Firebase + 생성형 AI (Gemini, Veo) + Vercel + O2O 확장

---

### 📌 프로젝트 개요

'역사 달력'은 8~14세 디지털 네이티브 세대를 위한 AI 기반 체감형 역사 시뮬레이션입니다.
딱딱한 텍스트 위주의 교육에서 벗어나, 사용자는 1919년 3.1 운동 등 특정 사건의 주인공이 되어 선택형 내러티브 시나리오에 참여합니다. 사용자의 선택은 멀티 엔딩을 결정지으며, 획득한 데이터는 인물 카드(PVP/PVE), 타임슬립 뉴스레터(실시간 호외 기사), AI 다큐멘터리, 1인칭 독립일기 등 다양한 멀티미디어 콘텐츠로 변환됩니다. 나아가 온·오프라인 박물관 연계(O2O) 시스템으로 역사적 체험을 현실 세계로 확장합니다.

---

### 🛠️ 기술 스택

| 구분 | 기술 | 역할 |
| --- | --- | --- |
| **Frontend** | React / JavaScript (ES6+) / CSS3 | 인터랙티브 선택형 게임 UI, 플로팅 내비게이션, 컴포넌트 설계 |
| **State Management** | Redux | 닉네임, 토큰, 무기 장착 상태, 인벤토리 등 전역 상태 실시간 동기화 |
| **Backend/DB** | Firebase Firestore | 자유게시판(커뮤니티) 데이터 실시간 동기화 및 영구 보존, 유저 데이터 저장 |
| **Authentication** | Firebase Auth | 독립군 유저 계정 인증 및 세션 접속 상태 유지 |
| **Data Format** | JSON | 인물 도감(characterDB), 무기/아이템 정보(weaponDB) 구조화 관리 |
| **AI (Generative)** | Gemini 3 Flash / Veo / Lyria 3 | AI 위인 챗봇, 역사적 일러스트, 1인칭 독립일기, 커스텀 다큐멘터리 영상/음성 생성 |
| **Deployment** | Vercel | 프로젝트 배포, CI/CD 자동화 (GitHub 연동), HTTPS 보안 환경 구축 |
| **Optimization** | npm run build | 빌드 최적화를 통한 리소스 압축 및 초기 로딩 속도 향상 |

---

### 📁 프로젝트 구조

```text
history-calendar/
├── src/
│   ├── assets/                 # 이미지, 배경, 폰트 리소스
│   ├── components/
│   │   ├── Scenario/           # 선택형 게임 엔진 및 UI (비주얼 노벨)
│   │   ├── MiniGame/           # 융합형 미니게임 컴포넌트
│   │   ├── Card/               # 인물 카드 (도감, 4컷 만화)
│   │   ├── Map/                # 시공간 인터랙티브 맵
│   │   └── Board/              # 실시간 자유게시판
│   ├── store/
│   │   └── index.js            # Redux 전역 상태 스토어 설정
│   ├── utils/
│   │   ├── firebaseConfig.js   # Firebase 연결 및 Auth/Firestore 설정
│   │   └── aiService.js        # Gemini/Veo API 통신 모듈
│   ├── data/
│   │   ├── characterDB.json    # 인물 능력치 및 대사 데이터
│   │   └── weaponDB.json       # 상점 아이템 및 무기 데이터
│   ├── App.jsx                 # 전체 라우팅 구조
│   └── index.css               # 전역 스타일링 (모던 카드 스타일)
│
├── public/                     # 정적 에셋 (favicon 등)
├── package.json
└── vercel.json                 # Vercel 배포 설정 파일

```

---

### ✨ 주요 기능

#### 🧩 선택형 역사 시나리오 (Game Engine)

* 1919년 3.1 운동 등 근현대사 사건 기반의 비주얼 노벨 스타일 진행.
* 유저의 선택지가 `characterDB`와 연동되어 실시간으로 사건 전개 및 멀티 엔딩 반영.
* 분기점 선택에 따라 맞춤형 임명장 발급 및 능력치 부여.

#### 🗞️ AI 타임슬립 뉴스레터 & 다큐멘터리

* 유저의 선택 결과에 맞춰 100년 전 '독립신문 호외' 기사를 실시간 레이아웃으로 생성 및 발행.
* 게임 엔딩 시, 생성형 AI(Veo 등)를 활용해 플레이어 여정을 요약한 30초 커스텀 영상 자동 생성.

#### 💬 AI 위인 페르소나 챗봇

* 역사적 어록을 딥러닝한 유관순 열사 등 위인 AI와 실시간 Q&A.
* 단순한 정보 전달을 넘어 당시 시대상과 철학을 담은 롤플레잉 대화 경험.

#### 🗺️ 시공간 인터랙티브 맵

* 1919년 경성부 지도와 현대 지도를 오버랩하여 대조.
* 나만의 독립운동 루트와 숨겨진 독립운동 사적지 해금 기능을 통해 공간적 몰입감 제공.

#### ⚔️ 히어로즈 매치 (수집 & 보상 시스템)

* 획득한 위인 카드를 활용하는 PVP/PVE 전략 배틀 기능 구현.
* Redux를 활용해 구독/플레이를 통해 얻은 토큰으로 무기를 장착하고 인벤토리를 실시간 동기화.

#### 🏛️ O2O 박물관 연계 확장성

* 게임 퍼즐 100% 달성 유저에게 박물관 기념품샵 내 '한정판 조립 키트' 구매 권한 부여.
* 박물관 팜플렛/입장권 QR 연동을 통해 신규 유저 유입 및 온·오프라인 통합 리워드 구축.

---

### 🗄️ 데이터베이스 및 상태 구조 (Firebase & JSON)

* **Firebase Firestore (자유게시판/유저 상태)**
* `users`: 유저별 독립군 닉네임, 보유 토큰, 누적 스코어 보존.
* `board`: 유저들이 실시간으로 작성하는 방명록 및 커뮤니티 데이터 (실시간 동기화).


* **JSON Data (정적 메타데이터)**
* `characterDB`: 영웅/빌런 카드 능력치, 4컷 만화 내용, 역사적 어록.
* `weaponDB`: 장착 가능한 아이템 정보 및 능력치 보너스.



---

### 📊 시스템 아키텍처

```text
[Client - React / Redux]
        │  ▲ (상태 실시간 동기화)
        ▼  │
[Firebase - Backend Services]
  ├── Authentication (독립군 계정 로그인)
  └── Firestore (유저 진행도, 실시간 방명록 데이터 저장)
        
        │  (비동기 API 요청)
        ▼
[Generative AI Services]
  ├── Gemini 3 Flash (AI 위인 챗봇 문맥 생성, 1인칭 독립일기 작성, 뉴스레터 텍스트 분석)
  └── Veo / Lyria 3 (커스텀 다큐멘터리 영상/오디오 에셋 렌더링)
```

---

### 🖥 기능 구현 PPT
<img width="1920" height="1080" alt="슬라이드1" src="https://github.com/user-attachments/assets/182d346c-09eb-4955-aadc-0c02bea21ae2" />
<img width="1920" height="1080" alt="슬라이드2" src="https://github.com/user-attachments/assets/0ae0f1f0-158b-40d7-810e-277b580cc518" />
<img width="1920" height="1080" alt="슬라이드3" src="https://github.com/user-attachments/assets/57e000b7-4e1f-4858-be5b-1f01c1ae6faa" />
<img width="1920" height="1080" alt="슬라이드4" src="https://github.com/user-attachments/assets/d159d4ea-062d-47ad-8805-5c97dbccf5be" />
<img width="1920" height="1080" alt="슬라이드5" src="https://github.com/user-attachments/assets/bcf876a0-a4d5-44e4-850c-4445cdd95214" />
<img width="1920" height="1080" alt="슬라이드6" src="https://github.com/user-attachments/assets/7b5fc88c-7f73-404a-bb85-2a36fb28ad61" />
<img width="1920" height="1080" alt="슬라이드7" src="https://github.com/user-attachments/assets/4eb5ce14-6603-49b4-9859-2f53301d5bb7" />
<img width="1920" height="1080" alt="슬라이드8" src="https://github.com/user-attachments/assets/c0a18479-cddb-4b2e-8363-34c9103cd3bc" />
<img width="1920" height="1080" alt="슬라이드9" src="https://github.com/user-attachments/assets/d758b6ca-18fd-4ff9-9404-24cca42be301" />
<img width="1920" height="1080" alt="슬라이드10" src="https://github.com/user-attachments/assets/f34127f0-814e-4bd2-9bc0-11cf01edfd40" />
<img width="1920" height="1080" alt="슬라이드11" src="https://github.com/user-attachments/assets/4ad314c6-3b20-4757-82ec-5079cba0311b" />
<img width="1920" height="1080" alt="슬라이드12" src="https://github.com/user-attachments/assets/072cffa5-80e6-49a9-98d5-4d9f7b85e885" />
<img width="1920" height="1080" alt="슬라이드13" src="https://github.com/user-attachments/assets/f58af50e-4c61-48e5-ba38-6fd3e9a0ca28" />
<img width="1920" height="1080" alt="슬라이드14" src="https://github.com/user-attachments/assets/63a7d965-c9f8-4abc-b6ff-099e53c2d30f" />
<img width="1920" height="1080" alt="슬라이드15" src="https://github.com/user-attachments/assets/011d7a31-68b7-4e98-ad8b-36413edafc12" />
<img width="1920" height="1080" alt="슬라이드16" src="https://github.com/user-attachments/assets/c2bb1ca6-4275-424d-947c-a4a782a07c93" />
<img width="1920" height="1080" alt="슬라이드17" src="https://github.com/user-attachments/assets/626aba3d-fff1-4713-8cb0-d33e0a307483" />
<img width="1920" height="1080" alt="슬라이드18" src="https://github.com/user-attachments/assets/9ef51db7-bb6c-477b-aed7-21a435cd3e35" />
<img width="1920" height="1080" alt="슬라이드19" src="https://github.com/user-attachments/assets/6a803f37-ddc1-43b8-a4f0-81e0286cb241" />
<img width="1920" height="1080" alt="슬라이드20" src="https://github.com/user-attachments/assets/adbb65d2-3161-4d0c-a4f9-aef33ba936ef" />
<img width="1920" height="1080" alt="슬라이드21" src="https://github.com/user-attachments/assets/8e816c11-3023-4e55-a03a-cbf2a13c507d" />
<img width="1920" height="1080" alt="슬라이드22" src="https://github.com/user-attachments/assets/d5068cb8-eba2-4989-86b4-0f59f4539b1c" />
