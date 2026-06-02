export const SCENARIOS = {
  // ==========================================
  // 1월: 고종 독살설과 국장
  // ==========================================
  1: {
    month: 1,
    title: "1919년 1월, 가려진 덕수궁의 밤",
    steps: [
      {
        id: 1,
        context: "덕수궁 함녕전, 고종 황제가 승하하셨다는 소식이 들려옵니다. 일제가 황제를 독살했다는 흉흉한 소문이 도는 가운데, 당신은 어떻게 행동하시겠습니까?",
        defaultImg: "/assets/images/scenarios/jan/step1_base.png",
        choices: [
          { text: "[1-1] 황제의 억울한 죽음을 밝히기 위해 격문을 작성해 뿌린다.", type: "hero", weight: 1, nextId: 2 },
          { text: "[1-2] 독살설을 퍼뜨리는 불순분자들을 찾아 총독부에 밀고한다.", type: "villain", weight: 1, nextId: 3 }
        ]
      },
      {
        id: 2,
        context: "당신의 격문이 퍼지자 사람들이 동요합니다. 한 유생이 '인산일(국장) 시위를 모의합시다'라며 다가옵니다.",
        defaultImg: "/assets/images/scenarios/jan/step2_base.png",
        choices: [
          { text: "[2-1] 국장일을 기해 거사할 대동단결 통문을 작성하는 데 앞장선다.", type: "hero", weight: 1, nextId: 4 },
          { text: "[2-2] 일이 너무 커졌다. 통문 작성을 거절하고 상복만 준비한다.", type: "neutral", weight: 1, nextId: 5 }
        ]
      },
      {
        id: 3,
        context: "당신의 밀고로 경찰이 움직이기 시작했습니다. 헌병대장이 당신에게 시위 주동자들의 은신처를 더 캐오라고 지시합니다.",
        defaultImg: "/assets/images/scenarios/jan/step2_villain.png",
        choices: [
          { text: "[2-3] 양심의 가책을 느끼고 헌병대장의 지시를 몰래 무시한다.", type: "neutral", weight: 1, nextId: 6 },
          { text: "[2-4] 대가를 요구하며 유생들이 모인 비밀 아지트 위치를 넘긴다.", type: "villain", weight: 1, nextId: 7 }
        ]
      },
      {
        id: 4,
        context: "통문을 인쇄하던 중 일본 순사가 아지트 문을 거칠게 두드립니다. 동료들이 서둘러 인쇄기를 숨기고 있습니다.",
        defaultImg: "/assets/images/scenarios/jan/step3_hero.png",
        choices: [
          { text: "[3-1] 몸으로 문을 가로막아 동료들이 피신할 시간을 번다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-2] 창문 밖으로 뛰어내려 혼자서 포위망을 빠져나간다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 5,
        context: "국장 당일, 총칼을 든 헌병들이 백성들을 위협합니다. 당신의 손에는 우연히 주운 태극기가 쥐어져 있습니다.",
        defaultImg: "/assets/images/scenarios/jan/step3_neutral.png",
        choices: [
          { text: "[3-3] 태극기를 높이 들고 '원수를 갚자!'며 시위대 맨 앞줄로 나선다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-4] 헌병의 눈치를 보며 태극기를 버리고 조용히 엎드려 곡을 한다.", type: "villain", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 6,
        context: "밀고를 거부하고 도망친 당신. 하지만 헌병들의 추격망이 좁혀옵니다. 거리에 숨을 곳이 마땅치 않습니다.",
        defaultImg: "/assets/images/scenarios/jan/step3_neutral2.png",
        choices: [
          { text: "[3-5] 밤을 새워 산속으로 끝까지 도망친다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-6] 배고픔과 추위에 지쳐 결국 경찰에 자수한다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 7,
        context: "당신의 밀고로 아지트가 급습당하고 유생들이 끌려갔습니다. 검사가 당신에게 황실 연락망까지 털어놓으라 압박합니다.",
        defaultImg: "/assets/images/scenarios/jan/step3_villain.png",
        choices: [
          { text: "[3-7] 더 이상의 배신은 못 한다며 끝내 입을 다문다.", type: "neutral", weight: 1, nextId: "end" },
          { text: "[3-8] 연락망 정보를 넘기는 대가로 총독부 관직을 요구한다.", type: "villain", weight: 1, nextId: "end" }
        ]
      }
    ],
    endings: {
      hero_high: { name: "이봉창", desc: "황제의 죽음을 분노로 승화시킨 선각자입니다.", img: "/assets/images/cards/hero_bongchang.jpg" },
      neutral: { name: "망국의 백성", desc: "황제를 잃은 슬픔 속에서 조용히 눈물 흘린 소시민입니다.", img: "/assets/images/cards/neutral.png" },
      villain_high: { name: "윤덕영", desc: "나라의 어버이를 잃은 슬픔마저 출세 수단으로 삼은 배신자입니다.", img: "/assets/images/cards/villain_deokyeong.jpg" }
    }
  },

  // ==========================================
  // 2월: 2.8 독립선언
  // ==========================================
  2: {
    month: 2,
    title: "1919년 2월, 도쿄의 폭설 속에서",
    steps: [
      {
        id: 1,
        context: "일본 도쿄 YMCA 회관. 2.8 독립선언이 선포되는 순간, 무장한 일제 경찰들이 문을 부수고 들이닥칩니다. 사방에서 비명이 터져 나옵니다.",
        defaultImg: "/assets/images/scenarios/feb/step1.png",
        choices: [
          { text: "[1-1] 단상 위에 놓인 '독립선언서 원본'을 재빨리 품에 챙긴다.", type: "hero", weight: 1, nextId: 2 },
          { text: "[1-2] 체포되면 끝이다. 군중들 틈에 섞여 뒷문으로 빠져나간다.", type: "villain", weight: 1, nextId: 3 }
        ]
      },
      {
        id: 2,
        context: "선언서를 챙겼지만, 경찰이 당신의 멱살을 틀어쥡니다. 이대로 체포되면 이 귀중한 선언서도 빼앗기고 거사는 실패로 돌아갑니다.",
        defaultImg: "/assets/images/scenarios/feb/step2_hero.png",
        choices: [
          { text: "[2-1] 경찰을 밀치고, 옆에 있던 동지에게 선언서를 넘기며 도망치라 소리친다.", type: "hero", weight: 1, nextId: 4 },
          { text: "[2-2] 선언서를 들키면 죽을 수도 있다. 몰래 난로 속에 던져 태워버린다.", type: "neutral", weight: 1, nextId: 5 }
        ]
      },
      {
        id: 3,
        context: "가까스로 회관을 빠져나와 뒷골목에 숨었습니다. 그때, 유학생들을 감시하던 조선인 밀정이 다가와 '주동자들을 말하면 살려주겠다'며 은화를 내밉니다.",
        defaultImg: "/assets/images/scenarios/feb/step2_villain.png",
        choices: [
          { text: "[2-3] 은화를 쳐내고, 밀정의 정강이를 걷어찬 뒤 도망친다.", type: "neutral", weight: 1, nextId: 6 },
          { text: "[2-4] 떨리는 손으로 은화를 받고, 주동자들이 모이기로 한 하숙집 주소를 알려준다.", type: "villain", weight: 1, nextId: 7 }
        ]
      },
      {
        id: 4,
        context: "당신의 희생 덕분에 선언서를 건네받은 동지는 무사히 항구로 빠져나갔습니다. 며칠 뒤 심한 고문을 받고 풀려난 당신에게 새로운 임무가 주어집니다.",
        defaultImg: "/assets/images/scenarios/feb/step3_hero.png",
        choices: [
          { text: "[3-1] 상처투성이의 몸을 이끌고 자금을 조달하기 위해 미행을 뚫고 나선다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-2] 이번엔 운이 좋았을 뿐이다. 이제 당분간 하숙집에 숨어 지낸다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 5,
        context: "선언서를 잃어버린 죄책감을 안고 도쿄역 앞에 섰습니다. 한인 유학생들을 상대로 대대적인 불심검문이 벌어지고 있습니다.",
        defaultImg: "/assets/images/scenarios/feb/step3_neutral.png",
        choices: [
          { text: "[3-3] 태극기를 몰래 품고, 대담하게 위장해 검문소를 통과한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-4] 겁에 질려 유학을 포기하고 도쿄 외곽의 막노동판으로 숨어든다.", type: "villain", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 6,
        context: "밀정을 걷어차고 도망친 당신. 하지만 갈 곳이 없습니다. 거리에는 헌병들이 깔려있고 배가 고파옵니다.",
        defaultImg: "/assets/images/scenarios/feb/step3_neutral2.png",
        choices: [
          { text: "[3-5] 배고픔을 견디며 밤새 산길을 걸어 인근 항구로 잠입한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-6] 결국 경찰서에 자진 출두하여 훔친 빵을 돌려주며 자수한다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 7,
        context: "당신의 밀고로 수많은 동지가 잡혀갔습니다. 총독부 관리는 흡족해하며 당신에게 '유학생들의 만세 시위를 비판하는 기고문'을 쓰라고 지시합니다.",
        defaultImg: "/assets/images/scenarios/feb/step3_villain.png",
        choices: [
          { text: "[3-7] 뒤늦게 밀려오는 죄책감에 펜을 던지고 도망친다.", type: "neutral", weight: 1, nextId: "end" },
          { text: "[3-8] 거액의 상금을 받고, 동지들을 '폭도'로 매도하는 글을 신문에 기고한다.", type: "villain", weight: 1, nextId: "end" }
        ]
      }
    ],
    endings: {
      hero_high: { name: "김마리아", desc: "도쿄의 눈보라를 뚫고 조국 독립의 함성을 쏘아 올렸습니다.", img: "/assets/images/cards/hero_kim.jpg" },
      neutral: { name: "고뇌하는 유학생", desc: "시대의 비극 앞에서 망설였던 평범한 청년입니다.", img: "/assets/images/cards/neutral_student.jpg" },
      villain_high: { name: "선우순", desc: "지식을 매국의 도구로 쓴 비열한 밀정입니다.", img: "/assets/images/cards/villain_sun.jpg" }
    }
  },

  // ==========================================
  // 3월: 3.1 운동
  // ==========================================
  3: {
    month: 3,
    title: "1919년 3월, 봄의 함성",
    steps: [
      {
        id: 1,
        context: "3월 1일 탑골공원. 청년이 독립선언서를 낭독하자 만세 소리가 울려 퍼집니다. 멀리서 순사들이 달려옵니다.",
        defaultImg: "/assets/images/scenarios/mar/step1_base.png",
        choices: [
          { text: "[1-1] 나도 태극기를 꺼내 들고 군중의 맨 앞으로 뛰어든다!", type: "hero", weight: 1, nextId: 2 },
          { text: "[1-2] 경찰서로 달려가 시위 주동자들의 위치를 알린다.", type: "villain", weight: 1, nextId: 3 }
        ]
      },
      {
        id: 2,
        context: "시위 대열 속에서 한 노인이 비밀 연락책에게 전해달라며 독립선언서 뭉치를 쥐여줍니다.",
        defaultImg: "/assets/images/scenarios/mar/step2_hero.png",
        choices: [
          { text: "[2-1] 선언서를 품고 좁은 골목을 달려 연락망을 뚫는다.", type: "hero", weight: 1, nextId: 4 },
          { text: "[2-2] 두려움에 휩싸여 종이를 버리고 인파 속으로 숨는다.", type: "neutral", weight: 1, nextId: 5 }
        ]
      },
      {
        id: 3,
        context: "순사들이 당신의 제보로 시위대를 포위했습니다. 순사가 '앞장서서 놈들을 잡아라'고 명령합니다.",
        defaultImg: "/assets/images/scenarios/mar/step2_villain.png",
        choices: [
          { text: "[2-3] 차마 동포를 팰 수 없어 뒷걸음질 치다 도망간다.", type: "neutral", weight: 1, nextId: 6 },
          { text: "[2-4] 몽둥이를 들고 시위 학생들의 머리를 후려치며 앞장선다.", type: "villain", weight: 1, nextId: 7 }
        ]
      },
      {
        id: 4,
        context: "아우내 장터. 유관순 열사가 열변을 토하고 일제 군경이 사격을 시작합니다. 동료들이 피를 흘리며 쓰러집니다.",
        defaultImg: "/assets/images/scenarios/mar/step3_hero.png",
        choices: [
          { text: "[3-1] 쓰러진 동료의 태극기를 쥐고 총구를 향해 전진한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-2] 부상당한 사람들을 업고 황급히 장터 밖으로 피신한다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 5,
        context: "골목 끝에서 순사와 마주쳤습니다. 몸수색을 당하기 직전입니다.",
        defaultImg: "/assets/images/scenarios/mar/step3_neutral.png",
        choices: [
          { text: "[3-3] 순사를 밀치고 다른 동료들이 도망갈 시간을 번다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-4] 살려달라며 골목 저편에 주동자들이 숨어있다고 가리킨다.", type: "villain", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 6,
        context: "시위대를 때리지 못해 도망친 당신. 골목길에 피를 흘리는 학생이 보입니다.",
        defaultImg: "/assets/images/scenarios/mar/step3_neutral2.png",
        choices: [
          { text: "[3-5] 학생을 업고 목숨을 걸고 병원으로 달린다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-6] 엮이기 싫어 모른 척 지나간다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 7,
        context: "서대문 형무소 형사과. 당신의 활약으로 시위대가 일망타진되었습니다. 일본 검사가 '순사보 자리를 주겠다'고 제안합니다.",
        defaultImg: "/assets/images/scenarios/mar/step3_villain.png",
        choices: [
          { text: "[3-7] 스스로가 끔찍해져 제안을 거절하고 고향으로 낙향한다.", type: "neutral", weight: 1, nextId: "end" },
          { text: "[3-8] 천황 폐하께 충성을 맹세하며 제복을 입고 순사보가 된다.", type: "villain", weight: 1, nextId: "end" }
        ]
      }
    ],
    endings: {
      hero_high: { name: "유관순", desc: "아우내의 별, 죽음도 꺾지 못한 불굴의 용기론자입니다.", img: "/assets/images/cards/hero_yu.jpg" },
      neutral: { name: "기록되지 않은 시민", desc: "망설임 끝에 결국 태극기를 쥐었던 보통의 시민입니다.", img: "/assets/images/cards/neutral_citizen.jpg" },
      villain_high: { name: "이완용", desc: "동포의 피를 마시는 악귀, 친일 고문 경찰입니다.", img: "/assets/images/cards/villain_lee.jpg" }
    }
  },

  // ==========================================
  // 4월: 임시정부 수립
  // ==========================================
  4: {
    month: 4,
    title: "1919년 4월, 상하이의 작은 등불",
    steps: [
      {
        id: 1,
        context: "프랑스 조계지 상하이. 독립지사들이 모여 민주공화제 헌장 제정을 두고 밤샘 토론 중입니다. 파벌 간의 갈등이 격해집니다.",
        defaultImg: "/assets/images/scenarios/apr/step1_base.png",
        choices: [
          { text: "[1-1] 파벌을 중재하고 국호 '대한민국'을 관철시키는 데 앞장선다.", type: "hero", weight: 1, nextId: 2 },
          { text: "[1-2] 일본 영사관에 임시정부 요인들의 회동 위치를 제보한다.", type: "villain", weight: 1, nextId: 3 }
        ]
      },
      {
        id: 2,
        context: "임시정부 서무국장 자리를 맡았으나, 정부 자금이 바닥나 하루 한 끼도 먹기 힘듭니다. 한 화교 상인이 거액을 제시하며 불법 밀무역 통행증 발급을 요구합니다.",
        defaultImg: "/assets/images/scenarios/apr/step2_hero.png",
        choices: [
          { text: "[2-1] 불법 거래는 정부를 망친다! 단칼에 거절하고 동포들에게 의연금을 걷는다.", type: "hero", weight: 1, nextId: 4 },
          { text: "[2-2] 당장 굶어 죽게 생겼으니 눈감고 통행증을 끊어준다.", type: "neutral", weight: 1, nextId: 5 }
        ]
      },
      {
        id: 3,
        context: "당신의 밀고로 독립지사들이 쫓기게 되었습니다. 영사관 직원이 당신에게 연통제(국내 비밀 연락망) 명단마저 훔쳐 오라고 지시합니다.",
        defaultImg: "/assets/images/scenarios/apr/step2_villain.png",
        choices: [
          { text: "[2-3] 이것만은 할 수 없다며 영사관 직원과의 연락을 끊는다.", type: "neutral", weight: 1, nextId: 6 },
          { text: "[2-4] 기밀 서류를 훔쳐 바치고 거액의 정착금을 챙긴다.", type: "villain", weight: 1, nextId: 7 }
        ]
      },
      {
        id: 4,
        context: "군자금 수송을 위해 영국 상선에 타려 합니다. 선착장에서 일제 형사들이 샅샅이 검문 중입니다.",
        defaultImg: "/assets/images/scenarios/apr/step3_hero.png",
        choices: [
          { text: "[3-1] 치외법권인 선박 안으로 자금 상자를 목숨 걸고 던져 넣는다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-2] 상자를 포기하고 일반 승객인 척 위장해 빈손으로 배에 탄다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 5,
        context: "임시정부 신년회. 안창호 주석이 '낙심치 말고 나아갑시다'라며 잔을 듭니다.",
        defaultImg: "/assets/images/scenarios/apr/step3_neutral.png",
        choices: [
          { text: "[3-3] 목숨이 다하는 날까지 임시정부를 보좌하겠다고 맹세한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-4] 참석자 사진을 몰래 찍어 밀정에게 팔아넘긴다.", type: "villain", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 6,
        context: "밀고를 거절하고 상하이 거리를 걷던 중, 병에 걸려 쓰러진 독립운동가를 발견합니다.",
        defaultImg: "/assets/images/scenarios/apr/step3_neutral2.png",
        choices: [
          { text: "[3-5] 남은 돈을 털어 약을 사주고 정성껏 간호한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-6] 내 코가 석 자다, 엮이기 싫어 외면한다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 7,
        context: "완전한 배신자가 된 당신. 일본 영사가 당신에게 조선으로 돌아가 고위 관직을 맡으라고 권합니다.",
        defaultImg: "/assets/images/scenarios/apr/step3_villain.png",
        choices: [
          { text: "[3-7] 거절하고 상하이 뒷골목에서 아편에 취해 살아간다.", type: "neutral", weight: 1, nextId: "end" },
          { text: "[3-8] 영광스럽게 제안을 수락하고 총독부의 개가 된다.", type: "villain", weight: 1, nextId: "end" }
        ]
      }
    ],
    endings: {
      hero_high: { name: "안창호", desc: "임시정부의 통합을 이끈 위대한 지도자입니다.", img: "/assets/images/cards/hero_ahn.jpg" },
      neutral: { name: "망명지사", desc: "타국 땅에서 굶주리며 임시정부를 지켜본 소시민입니다.", img: "/assets/images/cards/neutral_exile.jpg" },
      villain_high: { name: "선우갑", desc: "임시정부 요인들을 감시하고 일제에 밀고한 악질 밀정입니다.", img: "/assets/images/cards/villain_woo.jpg" }
    }
  },

  // ==========================================
  // 5월: 의열단 (종로경찰서)
  // ==========================================
  5: {
    month: 5,
    title: "1923년 5월, 종로의 무장 독립 전선",
    steps: [
      {
        id: 1,
        context: "의열단원인 당신은 가슴에 폭탄을 품고 종로경찰서에 접근 중입니다. 순사가 당신을 수상하게 바라봅니다.",
        defaultImg: "/assets/images/scenarios/may/step1_base.png",
        choices: [
          { text: "[1-1] '조국의 원수들아!' 거침없이 폭탄을 투척한다.", type: "hero", weight: 1, nextId: 2 },
          { text: "[1-2] 겁을 먹고 폭파 계획을 종로 경찰서에 자수한다.", type: "villain", weight: 1, nextId: 3 }
        ]
      },
      {
        id: 2,
        context: "종로 일대에 비상경계령이 내렸습니다. 피독골 민가 벽장에 숨은 당신 밖으로 문을 부수는 소리가 들립니다.",
        defaultImg: "/assets/images/scenarios/may/step2_hero.png",
        choices: [
          { text: "[2-1] 양손에 권총을 쥐고 벽장을 박차고 나가 적들을 기습한다.", type: "hero", weight: 1, nextId: 4 },
          { text: "[2-2] 이불 속에 몸을 완벽히 숨기고 지나가길 기도한다.", type: "neutral", weight: 1, nextId: 5 }
        ]
      },
      {
        id: 3,
        context: "자수한 당신에게 고등계 형사가 의열단장 김원봉의 상하이 아지트 위치를 불라고 고문합니다.",
        defaultImg: "/assets/images/scenarios/may/step2_villain.png",
        choices: [
          { text: "[2-3] 정신을 차리고 단장의 위치만은 끝까지 숨긴다.", type: "neutral", weight: 1, nextId: 6 },
          { text: "[2-4] 고통을 이기지 못하고 의열단 비밀 아지트와 암호망을 전부 털어놓는다.", type: "villain", weight: 1, nextId: 7 }
        ]
      },
      {
        id: 4,
        context: "일본 군경 수백 명이 겹겹이 에워쌌습니다. 당신에겐 권총 2자루뿐입니다. 적들이 항복하라 소리칩니다.",
        defaultImg: "/assets/images/scenarios/may/step3_hero.png",
        choices: [
          { text: "[3-1] 마지막 한 발로 자결할 때까지 적들을 향해 격발한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-2] 총탄이 떨어지자 두 손을 들고 밖으로 걸어 나간다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 5,
        context: "총탄에 맞아 피가 쏟아집니다. 눈앞에 아군 연락책의 양복점이 보입니다.",
        defaultImg: "/assets/images/scenarios/may/step3_neutral.png",
        choices: [
          { text: "[3-3] 양복점에 흔적을 남기지 않기 위해 다른 골목으로 도주한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-4] 살기 위해 양복점 문을 열고 들어가 동지를 볼모로 잡고 자수한다.", type: "villain", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 6,
        context: "단장의 위치를 숨겼으나 모진 고문에 몸이 망가졌습니다. 풀려난 후 당신은 어떻게 하겠습니까?",
        defaultImg: "/assets/images/scenarios/may/step3_neutral2.png",
        choices: [
          { text: "[3-5] 불편한 몸을 이끌고 다시 항일 전단지를 몰래 뿌린다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-6] 다시 잡혀갈까 두려움에 떨며 방안에 칩거한다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 7,
        context: "당신의 밀고로 의열단 조직이 큰 타격을 입었습니다. 일제는 당신을 특무 경찰로 특별 채용합니다.",
        defaultImg: "/assets/images/scenarios/may/step3_villain.png",
        choices: [
          { text: "[3-7] 스스로 손가락을 자르고 경찰직을 포기한다.", type: "neutral", weight: 1, nextId: "end" },
          { text: "[3-8] 특무 경찰복을 입고 독립운동가 사냥에 앞장선다.", type: "villain", weight: 1, nextId: "end" }
        ]
      }
    ],
    endings: {
      hero_high: { name: "김원봉", desc: "의열의 불꽃을 지휘하는 거인, 약산 김원봉입니다.", img: "/assets/images/cards/hero_wonbong.jpg" },
      neutral: { name: "의열단 조력자", desc: "어둠 속에서 영웅을 숨겨준 평범한 시민입니다.", img: "/assets/images/cards/neutral_helper.jpg" },
      villain_high: { name: "김태석", desc: "독립운동가를 사냥하던 경기도 고등계 친일 경찰입니다.", img: "/assets/images/cards/villain_taeseok.jpg" }
    }
  },

  // ==========================================
  // 6월: 봉오동 전투
  // ==========================================
  6: {
    month: 6,
    title: "1920년 6월, 봉오동의 포효",
    steps: [
      {
        id: 1,
        context: "북간도 봉오동 골짜기. 일본군 추격대가 사격 통제선 안으로 들어옵니다.",
        defaultImg: "/assets/images/scenarios/jun/step1_base.png",
        choices: [
          { text: "[1-1] 신호탄과 함께 적들을 향해 격렬한 일제 사격을 개시한다!", type: "hero", weight: 1, nextId: 2 },
          { text: "[1-2] 진지를 탈영하여 일본군 진영에 매복 위치를 알린다.", type: "villain", weight: 1, nextId: 3 }
        ]
      },
      {
        id: 2,
        context: "패퇴하던 일본군이 봉오동 민가를 방패 삼아 반격해옵니다. 민가 안엔 조선인 피난민들이 있습니다.",
        defaultImg: "/assets/images/scenarios/jun/step2_hero.png",
        choices: [
          { text: "[2-1] 위험을 무릅쓰고 계곡을 내려가 주민들을 대피시킨다.", type: "hero", weight: 1, nextId: 4 },
          { text: "[2-2] 어쩔 수 없다. 민가째로 적들을 향해 박격포를 조준한다.", type: "neutral", weight: 1, nextId: 5 }
        ]
      },
      {
        id: 3,
        context: "당신의 밀고로 독립군의 기습 작전이 실패할 위기입니다. 일본군 장교가 당신에게 길잡이를 명합니다.",
        defaultImg: "/assets/images/scenarios/jun/step2_villain.png",
        choices: [
          { text: "[2-3] 길을 모른다고 거짓말하며 시간을 끈다.", type: "neutral", weight: 1, nextId: 6 },
          { text: "[2-4] 앞장서서 독립군 사령부가 있는 백운평으로 적을 안내한다.", type: "villain", weight: 1, nextId: 7 }
        ]
      },
      {
        id: 4,
        context: "전투가 끝나고 도망치는 적들이 최신식 러시아제 소총과 탄약 상자를 버리고 갔습니다.",
        defaultImg: "/assets/images/scenarios/jun/step3_hero.png",
        choices: [
          { text: "[3-1] 무기를 노획하여 끝까지 추격해 섬멸한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-2] 무기만 챙겨 신속히 본진으로 복귀한다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 5,
        context: "장대비가 쏟아지며 안개가 짙어집니다. 숲길에서 거친 발자국 소리가 들려옵니다.",
        defaultImg: "/assets/images/scenarios/jun/step3_neutral.png",
        choices: [
          { text: "[3-3] 대담하게 적의 후방을 기습해 우회 전술을 펼친다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-4] 일본군 암호를 외치며 살려달라고 투항한다.", type: "villain", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 6,
        context: "길을 모른다고 핑계 대다 일본군에게 구타당해 숲에 버려졌습니다.",
        defaultImg: "/assets/images/scenarios/jun/step3_neutral2.png",
        choices: [
          { text: "[3-5] 상처를 싸매고 다시 독립군 진지를 찾아 떠난다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-6] 전쟁이 무서워 산속 화전민으로 조용히 숨어 산다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 7,
        context: "독립군은 궤멸 위기에 처했고 당신은 일본군에게 포상금을 받았습니다.",
        defaultImg: "/assets/images/scenarios/jun/step3_villain.png",
        choices: [
          { text: "[3-7] 양심의 가책을 이기지 못하고 스스로 목숨을 끊는다.", type: "neutral", weight: 1, nextId: "end" },
          { text: "[3-8] 포상금으로 술을 마시며 독립군의 최후를 비웃는다.", type: "villain", weight: 1, nextId: "end" }
        ]
      }
    ],
    endings: {
      hero_high: { name: "홍범도", desc: "봉오동 전투를 대승으로 이끈 백두산 호랑이 장군입니다.", img: "/assets/images/cards/hero_hong.jpg" },
      neutral: { name: "무명 독립군", desc: "두려움을 이겨내고 만주에서 총을 잡았던 평범한 군인입니다.", img: "/assets/images/cards/neutral_soldier.jpg" },
      villain_high: { name: "엄인섭", desc: "안중근의 의형제였으나 홍범도 장군을 배신한 밀정입니다.", img: "/assets/images/cards/villain_inseop.jpg" }
    }
  },

  // ==========================================
  // 7월: 헤이그 특사
  // ==========================================
  7: {
    month: 7,
    title: "1907년 7월, 헤이그의 외로운 호소",
    steps: [
      {
        id: 1,
        context: "네덜란드 헤이그. 회의장 입장을 거부당한 후 만국평화회의보 신문사 앞에 섰습니다.",
        defaultImg: "/assets/images/scenarios/jul/step1_base.png",
        choices: [
          { text: "[1-1] 기자들 앞에서 을사늑약의 무효성을 피를 토하듯 연설한다.", type: "hero", weight: 1, nextId: 2 },
          { text: "[1-2] 통감부에 특사들의 여권 정보를 몰래 넘겨 작전을 무산시킨다.", type: "villain", weight: 1, nextId: 3 }
        ]
      },
      {
        id: 2,
        context: "인터뷰 중 일본 외교관과 형사들이 다가와 당신을 체포하려 위협합니다.",
        defaultImg: "/assets/images/scenarios/jul/step2_hero.png",
        choices: [
          { text: "[2-1] 플래시 앞에서 억압당하는 모습을 연출하며 만행을 규탄한다.", type: "hero", weight: 1, nextId: 4 },
          { text: "[2-2] 소란을 피해 신속히 호텔 내부로 피신한다.", type: "neutral", weight: 1, nextId: 5 }
        ]
      },
      {
        id: 3,
        context: "통감부가 당신의 밀고를 칭찬하며 고종 황제의 밀서 원본을 훔쳐 오라고 지시합니다.",
        defaultImg: "/assets/images/scenarios/jul/step2_villain.png",
        choices: [
          { text: "[2-3] 황제의 친서를 훔칠 순 없다며 도망친다.", type: "neutral", weight: 1, nextId: 6 },
          { text: "[2-4] 밤에 특사의 방에 침입해 밀서를 훔쳐 일본 영사관에 넘긴다.", type: "villain", weight: 1, nextId: 7 }
        ]
      },
      {
        id: 4,
        context: "호텔 방안, 이준 특사가 울분을 참지 못하고 순국하셨습니다. 남은 당신은 어떻게 하겠습니까?",
        defaultImg: "/assets/images/scenarios/jul/step3_hero.png",
        choices: [
          { text: "[3-1] 시신 앞에서 혈서를 쓰고 평생을 항일 외교에 바치겠다고 다짐한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-2] 슬픔을 묻고 유럽에 남아 조용히 학문에 매진한다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 5,
        context: "궐석재판에서 사형 선고가 내려지고 고향의 가족들이 인질로 잡혔다는 소식이 날아옵니다.",
        defaultImg: "/assets/images/scenarios/jul/step3_neutral.png",
        choices: [
          { text: "[3-3] 나의 목숨은 조국의 것! 미국으로 건너가 독립군 비행학교를 세운다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-4] 일본 대사관에 찾아가 무릎을 꿇고 살려달라 애원한다.", type: "villain", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 6,
        context: "밀서를 훔치지 못하고 도망친 당신. 네덜란드 거리를 배회합니다.",
        defaultImg: "/assets/images/scenarios/jul/step3_neutral2.png",
        choices: [
          { text: "[3-5] 스스로 조선의 억울함을 알리는 벽보를 거리에 붙인다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-6] 일용직 노동자가 되어 현실에 순응하며 산다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 7,
        context: "특사는 순국했고 당신은 일본 귀족의 작위를 보장받았습니다.",
        defaultImg: "/assets/images/scenarios/jul/step3_villain.png",
        choices: [
          { text: "[3-7] 평생 매국노의 죄책감에 시달리며 매일 밤 악몽을 꾼다.", type: "neutral", weight: 1, nextId: "end" },
          { text: "[3-8] 조선의 멸망은 시대의 흐름이었다며 뻔뻔하게 부귀를 누린다.", type: "villain", weight: 1, nextId: "end" }
        ]
      }
    ],
    endings: {
      hero_high: { name: "이준", desc: "이국땅에서 한을 품은 채 순국한 대한의 특사입니다.", img: "/assets/images/cards/hero_leejun.jpg" },
      neutral: { name: "구국을 고뇌하는 유학생", desc: "약소국의 무력함에 좌절하며 펜을 굳게 쥔 지식인입니다.", img: "/assets/images/cards/neutral_student.jpg" },
      villain_high: { name: "송병준", desc: "헤이그 특사를 빌미로 황제를 퇴위시킨 천하의 매국노입니다.", img: "/assets/images/cards/villain_byeongjun.jpg" }
    }
  },

  // ==========================================
  // 8월: 경술국치
  // ==========================================
  8: {
    month: 8,
    title: "1910년 8월, 망국의 통곡",
    steps: [
      {
        id: 1,
        context: "1910년 8월 29일. 대한제국이 주권을 완전히 잃었다는 공고가 붙었습니다.",
        defaultImg: "/assets/images/scenarios/aug/step1_base.png",
        choices: [
          { text: "[1-1] 전 재산을 처분하고 만주로 떠나 무관학교를 세우기로 결심한다.", type: "hero", weight: 1, nextId: 2 },
          { text: "[1-2] 한일합방 축하 연회에 참석하여 일본 통감에게 작위를 청한다.", type: "villain", weight: 1, nextId: 3 }
        ]
      },
      {
        id: 2,
        context: "만주 삼원보에 도착했습니다. 칼바람 속에 대원들이 풍토병으로 쓰러져 갑니다.",
        defaultImg: "/assets/images/scenarios/aug/step2_hero.png",
        choices: [
          { text: "[2-1] 입고 있는 비단옷까지 모두 팔아 약값과 막사 자재를 조달한다.", type: "hero", weight: 1, nextId: 4 },
          { text: "[2-2] 무관학교 설립을 포기하고 현지 농사로 노선을 바꾼다.", type: "neutral", weight: 1, nextId: 5 }
        ]
      },
      {
        id: 3,
        context: "당신은 총독부로부터 자작 작위와 막대한 은사금을 받았습니다. 하지만 독립군 토벌 자금을 내놓으라는 압박이 들어옵니다.",
        defaultImg: "/assets/images/scenarios/aug/step2_villain.png",
        choices: [
          { text: "[2-3] 돈은 절대 줄 수 없다며 핑계를 대고 피한다.", type: "neutral", weight: 1, nextId: 6 },
          { text: "[2-4] 기꺼이 헌납하며 만주의 독립군 기지 소탕 작전을 응원한다.", type: "villain", weight: 1, nextId: 7 }
        ]
      },
      {
        id: 4,
        context: "신흥무관학교 첫 졸업식 날, 인근 중국 마적단이 학교를 습격해옵니다.",
        defaultImg: "/assets/images/scenarios/aug/step3_hero.png",
        choices: [
          { text: "[3-1] 대원들을 이끌고 선제타격으로 마적단을 완벽히 제압한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-2] 기지 자금의 일부를 내어주고 타협한다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 5,
        context: "수십 년 후 조국을 보지 못하고 노쇠한 당신. 후손들에게 남길 유언은?",
        defaultImg: "/assets/images/scenarios/aug/step3_neutral.png",
        choices: [
          { text: "[3-3] '우리는 모든 걸 바쳤으니 부끄러움이 없다. 끝까지 싸워라.'", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-4] '독립은 허상이었다... 그저 조용히 몸을 숙이고 살아라.'", type: "villain", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 6,
        context: "토벌 자금 헌납을 피하다가 총독부의 눈밖에 났습니다. 감시가 심해집니다.",
        defaultImg: "/assets/images/scenarios/aug/step3_neutral2.png",
        choices: [
          { text: "[3-5] 몰래 남은 재산을 만주의 독립군에게 송금한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-6] 작위를 반납하고 조용히 시골로 낙향한다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 7,
        context: "백성들의 고혈을 짠 돈으로 호화 저택을 지었습니다. 독립군의 암살 경고장이 날아옵니다.",
        defaultImg: "/assets/images/scenarios/aug/step3_villain.png",
        choices: [
          { text: "[3-7] 두려움에 떨며 밖으로 한 발짝도 나가지 못한다.", type: "neutral", weight: 1, nextId: "end" },
          { text: "[3-8] 일본 헌병 수백 명을 개인 경호원으로 고용해 거드름을 피운다.", type: "villain", weight: 1, nextId: "end" }
        ]
      }
    ],
    endings: {
      hero_high: { name: "이회영", desc: "전 재산을 바쳐 신흥무관학교를 세운 노블레스 오블리주의 거인입니다.", img: "/assets/images/cards/hero_leehoe.jpg" },
      neutral: { name: "황현", desc: "망국의 슬픔을 절명시로 남기고 자결한 매천 황현입니다.", img: "/assets/images/cards/neutral_hwang.jpg" },
      villain_high: { name: "민영휘", desc: "백성의 고혈을 짜내고 일제에 빌붙은 탐욕의 화신입니다.", img: "/assets/images/cards//villain_younghwi.jpg" }
    }
  },

  // ==========================================
  // 9월: 한국광복군 창설
  // ==========================================
  9: {
    month: 9,
    title: "1940년 9월, 충칭의 정규군 선언",
    steps: [
      {
        id: 1,
        context: "충칭. 임시정부의 정규군 '한국광복군' 창설식입니다. 김구 주석이 단상에 서 있습니다.",
        defaultImg: "/assets/images/scenarios/sep/step1_base.png",
        choices: [
          { text: "[1-1] OSS 연합 작전과 국내 진공 작전의 선봉대에 자원한다!", type: "hero", weight: 1, nextId: 2 },
          { text: "[1-2] 몰래 탈영하여 일본군 사령부에 광복군 배치도를 밀고한다.", type: "villain", weight: 1, nextId: 3 }
        ]
      },
      {
        id: 2,
        context: "인도-버마 전선 파견 요청이 들어왔습니다. 전선은 지옥과 같은 포화 속입니다.",
        defaultImg: "/assets/images/scenarios/sep/step2_hero.png",
        choices: [
          { text: "[2-1] 지옥이라도 가겠습니다! 인도 전선 공작대에 자원한다.", type: "hero", weight: 1, nextId: 4 },
          { text: "[2-2] 후방에 남아 정보 분석 업무에 집중한다.", type: "neutral", weight: 1, nextId: 5 }
        ]
      },
      {
        id: 3,
        context: "당신의 밀고로 일본군은 광복군의 훈련소를 기습 폭격했습니다. 일본군 대좌 김석원이 당신을 노골적으로 칭찬합니다.",
        defaultImg: "/assets/images/scenarios/sep/step2_villain.png",
        choices: [
          { text: "[2-3] 양심의 가책을 느끼고 조용히 종군기자로 신분을 세탁한다.", type: "neutral", weight: 1, nextId: 6 },
          { text: "[2-4] 조선 청년들을 학도병으로 끌고 가는 선동대장 역할을 맡는다.", type: "villain", weight: 1, nextId: 7 }
        ]
      },
      {
        id: 4,
        context: "독수리 작전 낙하산 침투 훈련 중 동료가 다리가 부러지는 중상을 입었습니다.",
        defaultImg: "/assets/images/scenarios/sep/step3_hero.png",
        choices: [
          { text: "[3-1] 부상당한 동료를 등에 업고 남은 훈련 코스를 완주한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-2] 훈련을 중단시키고 동료를 병원으로 이송한다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 5,
        context: "1945년 8월, 돌연 일본이 무조건 항복을 선언합니다. 국내 진공 작전이 허무하게 무산되었습니다.",
        defaultImg: "/assets/images/scenarios/sep/step3_neutral.png",
        choices: [
          { text: "[3-3] 정의군의 자격으로 당당히 전함을 타고 부산항에 입항한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-4] 허탈함을 안고 무기를 버린 채 고향으로 향한다.", type: "villain", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 6,
        context: "종군기자로 위장한 당신. 일본군의 끔찍한 학살 현장을 목격합니다.",
        defaultImg: "/assets/images/scenarios/sep/step3_neutral2.png",
        choices: [
          { text: "[3-5] 일본군의 패악질을 몰래 기록해 연합군에 넘긴다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-6] 목숨이 아까워 평범한 기사만 쓰며 생존한다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 7,
        context: "일제가 패망했습니다. 당신은 전범 재판에 회부될 위기에 처했습니다.",
        defaultImg: "/assets/images/scenarios/sep/step3_villain.png",
        choices: [
          { text: "[3-7] 모든 죄를 뉘우치고 재판 결과를 담담히 수용한다.", type: "neutral", weight: 1, nextId: "end" },
          { text: "[3-8] 미 군정에 뇌물을 바치고 반공 투사로 신분을 위장해 살아남는다.", type: "villain", weight: 1, nextId: "end" }
        ]
      }
    ],
    endings: {
      hero_high: { name: "지청천", desc: "한국광복군 총사령관으로서 조국 진공의 칼날을 간 무장입니다.", img: "/assets/images/cards/hero_ji.jpg" },
      neutral: { name: "광복군 대원", desc: "수천 리를 걸어 충칭에 합류한 뜨거운 청년입니다.", img: "/assets/images/cards/neutral_kia.jpg" },
      villain_high: { name: "김석원", desc: "조선 청년들에게 학도병 참전을 선동한 친일 군인입니다.", img: "/assets/images/cards/villain_seokwon.jpg" }
    }
  },

  // ==========================================
  // 10월: 안중근 하얼빈 거사
  // ==========================================
  10: {
    month: 10,
    title: "1909년 10월, 하얼빈의 총성",
    steps: [
      {
        id: 1,
        context: "하얼빈역. 이토 히로부미가 삼엄한 경호를 받으며 당신 앞을 지납니다.",
        defaultImg: "/assets/images/scenarios/oct/step1_base.png",
        choices: [
          { text: "[1-1] 권총을 뽑아 이토를 향해 세 발의 총탄을 명중시킨다!", type: "hero", weight: 1, nextId: 2 },
          { text: "[1-2] 러시아 경비대에게 저격수가 있다고 소리쳐 고발한다.", type: "villain", weight: 1, nextId: 3 }
        ]
      },
      {
        id: 2,
        context: "총탄 명중 후 헌병들이 당신을 덮쳐 바닥에 메칩니다.",
        defaultImg: "/assets/images/scenarios/oct/step2_hero.png",
        choices: [
          { text: "[2-1] 하늘이 울리도록 당당히 '코레아 우라!'를 삼창한다.", type: "hero", weight: 1, nextId: 4 },
          { text: "[2-2] 제압당한 채 고개를 숙여 얼굴을 숨긴다.", type: "neutral", weight: 1, nextId: 5 }
        ]
      },
      {
        id: 3,
        context: "당신의 밀고로 이토 공작은 살아남았습니다. 그는 당신에게 큰 보상을 약속합니다.",
        defaultImg: "/assets/images/scenarios/oct/step2_villain.png",
        choices: [
          { text: "[2-3] 보상은 거절하고 조용히 헌병대에서 빠져나간다.", type: "neutral", weight: 1, nextId: 6 },
          { text: "[2-4] 보상금을 받고 일진회에 가입해 한일합방 청원에 앞장선다.", type: "villain", weight: 1, nextId: 7 }
        ]
      },
      {
        id: 4,
        context: "일본 법정. 검찰관이 당신을 살인범으로 매도합니다.",
        defaultImg: "/assets/images/scenarios/oct/step3_hero.png",
        choices: [
          { text: "[3-1] '나는 대한의군 참모중장이다!' 이토의 15가지 죄악을 꾸짖는다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-2] 침묵을 지키며 검사의 심문을 거부한다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 5,
        context: "사형 선고를 받고 감옥에 갇힌 당신. 사형 당일입니다.",
        defaultImg: "/assets/images/scenarios/oct/step3_neutral.png",
        choices: [
          { text: "[3-3] '나의 뼈를 하얼빈에 묻어라!' 유언을 남기고 당당히 순국한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-4] 살려달라며 일본 변호사를 통해 항소서를 제출한다.", type: "villain", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 6,
        context: "보상을 거절하고 빠져나온 당신. 만주 벌판에 홀로 남았습니다.",
        defaultImg: "/assets/images/scenarios/oct/step3_neutral2.png",
        choices: [
          { text: "[3-5] 이름 없는 의병 부대에 말단으로 입대해 총을 잡는다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-6] 장사꾼으로 위장해 돈이나 벌며 살아간다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 7,
        context: "결국 한일합방이 이루어졌습니다. 당신은 이토의 총애를 받는 거물이 되었습니다.",
        defaultImg: "/assets/images/scenarios/oct/step3_villain.png",
        choices: [
          { text: "[3-7] 나라 잃은 백성들의 참상에 뒤늦게 눈물을 흘린다.", type: "neutral", weight: 1, nextId: "end" },
          { text: "[3-8] 이토 각하 만세! 제국의 번영을 축하하며 만찬을 즐긴다.", type: "villain", weight: 1, nextId: "end" }
        ]
      }
    ],
    endings: {
      hero_high: { name: "안중근", desc: "이토를 격살하고 사형대에서도 당당했던 동양 평화의 수호자입니다.", img: "/assets/images/cards/hero_ahn_jung.jpg" },
      neutral: { name: "하얼빈의 목격자", desc: "역사적인 총성을 현장에서 목격한 시대의 방관자입니다.", img: "/assets/images/cards/neutral_harbin.jpg" },
      villain_high: { name: "이용구", desc: "안중근 의사를 테러리스트라 규탄한 일진회의 우두머리입니다.", img: "/assets/images/cards/villain_yonggu.jpg" }
    }
  },

  // ==========================================
  // 11월: 광주 학생 독립 운동
  // ==========================================
  11: {
    month: 11,
    title: "1929년 11월, 통학 열차의 분노",
    steps: [
      {
        id: 1,
        context: "나주행 통학 열차 안. 일본인 학생들이 조선인 여학생의 댕기머리를 당기며 희롱합니다.",
        defaultImg: "/assets/images/scenarios/nov/step1_base.png",
        choices: [
          { text: "[1-1] 일본 학생들의 멱살을 잡고 당당하게 맞서 싸운다.", type: "hero", weight: 1, nextId: 2 },
          { text: "[1-2] 일본인 교무주임에게 달려가 조선 학생들이 싸움을 걸었다고 거짓 보고한다.", type: "villain", weight: 1, nextId: 3 }
        ]
      },
      {
        id: 2,
        context: "나주역 광장. 편파적 수사에 분노한 조선 학생들이 스크럼을 짜고 시위를 시작합니다.",
        defaultImg: "/assets/images/scenarios/nov/step2_hero.png",
        choices: [
          { text: "[2-1] 맨 앞줄에 서서 격렬하게 만세를 선창한다.", type: "hero", weight: 1, nextId: 4 },
          { text: "[2-2] 퇴학이 두려워 스크럼을 풀고 교실로 복귀한다.", type: "neutral", weight: 1, nextId: 5 }
        ]
      },
      {
        id: 3,
        context: "당신의 거짓말로 조선인 학생들만 구속되었습니다. 학교 측은 당신을 칭찬하며 비밀 독서회를 캐오라 지시합니다.",
        defaultImg: "/assets/images/scenarios/nov/step2_villain.png",
        choices: [
          { text: "[2-3] 친구들을 팔 수 없다며 거짓 제보를 한다.", type: "neutral", weight: 1, nextId: 6 },
          { text: "[2-4] 성진회 명부를 훔쳐 교장에게 전달한다.", type: "villain", weight: 1, nextId: 7 }
        ]
      },
      {
        id: 4,
        context: "시위가 서울까지 확산되었습니다. 기마병들이 말발굽으로 학생들을 짓밟습니다.",
        defaultImg: "/assets/images/scenarios/nov/step3_hero.png",
        choices: [
          { text: "[3-1] 기마병의 고삐를 붙잡고 끝까지 저항한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-2] 다친 동료들을 부축하고 신속히 대피한다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 5,
        context: "감옥 창살 밖을 바라봅니다. 후배들이 '우리가 역사를 바꾼 게 맞나요?' 묻습니다.",
        defaultImg: "/assets/images/scenarios/nov/step3_neutral.png",
        choices: [
          { text: "[3-3] '우리가 굽히지 않았으니 반드시 밝을 것이다!'", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-4] '다 무모한 짓이다. 그저 공부나 열심히 해라.'", type: "villain", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 6,
        context: "거짓말을 하다 들켜 일본인 교사에게 구타당하고 학교에서 쫓겨났습니다.",
        defaultImg: "/assets/images/scenarios/nov/step3_neutral2.png",
        choices: [
          { text: "[3-5] 야학을 열어 어린 학생들에게 민족혼을 가르친다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-6] 공장에 취직해 기계처럼 일하며 살아간다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 7,
        context: "학생들은 전부 퇴학당했고, 당신은 그 공로로 총독부 장학금을 받았습니다.",
        defaultImg: "/assets/images/scenarios/nov/step3_villain.png",
        choices: [
          { text: "[3-7] 장학금을 찢어버리고 고향을 떠나버린다.", type: "neutral", weight: 1, nextId: "end" },
          { text: "[3-8] 장학금으로 일본 유학을 떠나 황국신민이 된다.", type: "villain", weight: 1, nextId: "end" }
        ]
      }
    ],
    endings: {
      hero_high: { name: "장재성", desc: "광주학생운동을 거국적 투쟁으로 이끈 학생 영웅입니다.", img: "/assets/images/cards/hero_jang.jpg" },
      neutral: { name: "침묵한 고등학생", desc: "퇴학의 공포 앞에 스크럼을 풀었던 평범한 소년입니다.", img: "/assets/images/cards/neutral_student.jpg" },
      villain_high: { name: "친일 훈도", desc: "의로운 학생들을 불량배로 몰아 넘긴 악질 교사입니다.", img: "/assets/images/cards/villain_teacher.jpg" }
    }
  },

  // ==========================================
  // 12월: 식산은행/동양척식 폭탄
  // ==========================================
  12: {
    month: 12,
    title: "1926년 12월, 동양척식주식회사의 심판",
    steps: [
      {
        id: 1,
        context: "농민들의 토지를 수탈하는 동양척식주식회사 로비. 폭탄을 품고 잠입했습니다.",
        defaultImg: "/assets/images/scenarios/dec/step1_base.png",
        choices: [
          { text: "[1-1] 착취의 온상에 폭탄을 던지고 간부들을 향해 권총을 발사한다!", type: "hero", weight: 1, nextId: 2 },
          { text: "[1-2] 관리실로 가 폭탄을 보여주며 의열단 암살 조를 체포하라고 밀고한다.", type: "villain", weight: 1, nextId: 3 }
        ]
      },
      {
        id: 2,
        context: "거사 직후 총을 쏘며 을지로 거리로 뛰쳐나왔습니다. 기마 경찰들이 추격해옵니다.",
        defaultImg: "/assets/images/scenarios/dec/step2_hero.png",
        choices: [
          { text: "[2-1] 전차에 올라타 운행 중인 전차 위에서 추격대를 저격한다.", type: "hero", weight: 1, nextId: 4 },
          { text: "[2-2] 전차 뒤편 인파 속으로 숨어 무기를 버린다.", type: "neutral", weight: 1, nextId: 5 }
        ]
      },
      {
        id: 3,
        context: "당신의 배신으로 폭파 작전은 무산되었습니다. 식산은행 간부가 당신에게 감사를 표합니다.",
        defaultImg: "/assets/images/scenarios/dec/step2_villain.png",
        choices: [
          { text: "[2-3] 도망친 동지들이 두려워 보상만 받고 숨어버린다.", type: "neutral", weight: 1, nextId: 6 },
          { text: "[2-4] 자본의 위대함을 찬양하며 동양척식의 하수인으로 취직한다.", type: "villain", weight: 1, nextId: 7 }
        ]
      },
      {
        id: 4,
        context: "경찰 수십 명에게 완전히 포위당했습니다. 치명상을 입고 권총에는 세 발의 탄환뿐입니다.",
        defaultImg: "/assets/images/scenarios/dec/step3_hero.png",
        choices: [
          { text: "[3-1] 두 발은 적 수장에게 쏘고, 마지막 한 발로 당당히 자결한다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-2] 총을 버리고 일제 구급대의 체포를 받아들인다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 5,
        context: "병원에서 의식을 찾았습니다. 특고형사가 무기를 대준 배후가 누구냐며 다그칩니다.",
        defaultImg: "/assets/images/scenarios/dec/step3_neutral.png",
        choices: [
          { text: "[3-3] 산소마스크를 물어뜯어 던져버리고 끝까지 묵비권을 지킨다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-4] 살기 위해 의열단의 경성 지부 아지트를 실토한다.", type: "villain", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 6,
        context: "보상금만 챙겨 숨어버린 당신. 거리에서 동지들의 수배 전단을 봅니다.",
        defaultImg: "/assets/images/scenarios/dec/step3_neutral2.png",
        choices: [
          { text: "[3-5] 보상금으로 무기를 사서 몰래 의열단에 보낸다.", type: "hero", weight: 1, nextId: "end" },
          { text: "[3-6] 돈을 들고 시골로 깊숙이 숨어버린다.", type: "neutral", weight: 1, nextId: "end" }
        ]
      },
      {
        id: 7,
        context: "당신은 엄청난 부를 이룬 친일 자본가가 되었습니다. 사람들은 당신을 흡혈귀라 부릅니다.",
        defaultImg: "/assets/images/scenarios/dec/step3_villain.png",
        choices: [
          { text: "[3-7] 막대한 재산 일부를 익명으로 고아원에 기부한다.", type: "neutral", weight: 1, nextId: "end" },
          { text: "[3-8] 미개한 자들의 시기라며 비웃고 더 악랄하게 토지를 수탈한다.", type: "villain", weight: 1, nextId: "end" }
        ]
      }
    ],
    endings: {
      hero_high: { name: "나석주", desc: "수탈의 심장을 쏜 무적의 의열단원입니다.", img: "/assets/images/cards/hero_naseokju.jpg" },
      neutral: { name: "은행 서기", desc: "총성 속에 책상 밑으로 숨어 시대의 비극을 겪은 소시민입니다.", img: "/assets/images/cards/neutral_clerk.jpg" },
      villain_high: { name: "한상룡", desc: "동포들의 땅을 빼앗아 부를 이룬 친일 자본가입니다.", img: "/assets/images/cards/villain_sangryong.jpg" }
    }
  }
};

export const MARCH_SCENARIO = SCENARIOS;