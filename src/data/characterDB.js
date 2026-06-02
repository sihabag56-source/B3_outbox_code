export const CHARACTER_DB = {
  // ==========================================
  // 1월: 고종 국장 및 1월의 주요 무장 의거 인물
  // ==========================================
  1: [
    { 
      id: "lee_bongchang", 
      name: "이봉창", 
      type: "hero", 
      stats: { attack: 95, defense: 60, wisdom: 85, lead: 90 },
      desc: "사쿠라다문의 폭음. 적의 심장부 도쿄에서 일왕을 향해 폭탄을 던져 민족의 거룩한 의기를 만천하에 드러낸 영웅입니다.", 
      img: "/assets/images/cards/hero_bongchang.jpg",
      comicImgs: [
        "/assets/images/comics/bong_1.jpg", 
        "/assets/images/comics/bong_2.jpg", 
        "/assets/images/comics/bong_3.jpg", 
        "/assets/images/comics/bong_4.jpg"
      ],
      video: "/assets/videos/docu_lee_bongchang.mp4",
      prompt: "너는 한인애국단원 이봉창 의사야. 죽음을 앞두고도 미소를 잃지 않았던 초연함과, 조국의 독립을 위해 기꺼이 목숨을 바친 영웅의 당당하고 활기찬 목소리로 대화해줘.",
      articleBody: `[독립신문 호외: 도쿄를 뒤흔든 폭음, 이봉창 의사의 의거]\n\n왜적의 심장 도쿄 사쿠라다문에서 하늘을 찌르는 폭음이 울렸다. \n우리 기지는 한인애국단의 제1호 단원으로서 \n일왕 히로히토를 처단하기 위해 수류탄을 투척한 \n이봉창 의사의 거룩한 의거를 피 끓는 심정으로 기록한다. \n\n비록 적 괴수를 현장에서 처단하는 데는 실패하였으나, \n상하이 임시정부의 침체를 깨뜨리고 전 세계에 \n조선 백성이 여전히 살아있음을 똑똑히 각인시켰다. \n\n체포되는 순간에도 얼굴에 미소를 잃지 않았던 \n그의 영웅적 기개는 우리 독립운동사에 영원불멸의 \n횃불로 타오를 것이다. 동지들이여, 그의 미소를 기억하라!`
    },
   
    { 
      id: "neutral_jan", 
      name: "망국의 백성", 
      type: "neutral", 
      stats: { attack: 40, defense: 50, wisdom: 50, lead: 40 },
      desc: "황제를 잃은 거대한 슬픔 속에서 흰 상복을 입고 조용히 눈물 흘리며 추모했던 소시민입니다.", 
      img: "/assets/images/cards/neutral.png",
      comicImgs: [
        "/assets/images/comics/cit_1.jpg", 
        "/assets/images/comics/cit_2.jpg", 
        "/assets/images/comics/cit_3.jpg", 
        "/assets/images/cards/neutral.png"
      ],
      video: "/assets/videos/docu_citizen.mp4",
      prompt: "너는 고종 황제의 인산일 대열에서 슬피 곡을 하던 망국의 백성이다. 나라 잃은 설움과 두려움을 솔직하고 슬픈 어조로 말해줘.",
      articleBody: `[독립신문 아카이브: 상복을 입고 통곡한 무명의 백성들]\n\n나라의 어버이를 잃고 한양 거리를 가득 메운 \n흰 상복의 물결을 보라. 그들은 대단한 투사는 아니었으나 \n가슴 깊이 망국의 설움을 눈물로 씻어내던 우리 이웃들이었다. \n\n총칼을 겨눈 헌병의 위협 속에서도 조용히 엎드려 \n조선 백성의 자존심을 지켰던 그들의 슬픔은 \n훗날 거대한 만세 운동의 든든한 강물이 되었다. \n비록 이름은 남지 않았으나, 그들의 곡소리는 역사의 한 조각이다.`
    },
   
    { 
      id: "villain_yun_deokyeong", 
      name: "윤덕영", 
      type: "villain", 
      stats: { attack: 20, defense: 40, wisdom: 90, lead: 65 },
      desc: "황실을 겁박해 옥새를 빼앗은 황실의 배신자. 나라의 멸망을 대가로 거대한 저택과 작위를 얻은 탐욕의 화신입니다.", 
      img: "/assets/images/cards/villain_deokyeong.jpg",
      comicImgs: [
        "/assets/images/comics/lee_1.jpg", 
        "/assets/images/comics/lee_2.jpg", 
        "/assets/images/comics/lee_3.jpg", 
        "/assets/images/comics/lee_4.jpg"
      ],
      video: "/assets/videos/docu_lee_wanyong.mp4",
      prompt: "너는 고종과 순종을 협박해 한일병합을 주도한 친일파 윤덕영이다. 조선의 멸망은 시대의 흐름이었을 뿐이라며, 자신이 일제로부터 받은 거대한 저택(벽수산장)과 부귀영화를 뻔뻔하게 자랑하는 목소리로 대화해라.",
      articleBody: `[독립신문 사설: 어버이를 팔아먹은 추악한 배신자, 윤덕영]\n\n1919년 1월, 덕수궁의 깊은 밤 고종 황제께서 승하하셨을 때 \n그 이면에는 평생 황실을 갉아먹은 배신자들의 그림자가 있었다. \n\n경술년, 총칼을 든 일제에 앞장서서 황제를 겁박하고 \n치맛자락에 숨긴 옥새마저 빼앗아 나라를 넘긴 자가 바로 윤덕영이다. \n나라의 녹을 먹던 외척이 제 한 목숨 건지고 부귀를 누리고자 \n군주를 배신하고 적과 결탁하였으니, 이 어찌 짐승이라 하지 않겠는가! \n\n그는 그 매국의 대가로 옥인동에 대궐 같은 저택을 짓고 \n일본이 내려준 자작 칭호를 자랑스러워하지만, \n조선 민중의 눈에 그는 그저 구더기만도 못한 존재일 뿐이다. \n동포들이 흘린 눈물과 분노가 모여 화살이 되는 날, \n그 더러운 작위와 함께 역사의 지옥 불에 떨어질 것이다.`
    }
  ],
  
  // ==========================================
  // 2월: 도쿄 2.8 독립선언 관련 인물
  // ==========================================
  2: [
    { 
      id: "kim_maria", 
      name: "김마리아", 
      type: "hero", 
      stats: { attack: 85, defense: 90, wisdom: 95, lead: 92 },
      desc: "2.8 독립선언서를 품에 숨기고 입국해 3.1 운동의 도화선을 당긴 당신은 두려움을 모르는 전달자입니다.", 
      img: "/assets/images/cards/hero_kim.jpg",
      comicImgs: ["/assets/images/comics/kim_1.jpg", "/assets/images/comics/kim_2.jpg", "/assets/images/comics/kim_3.jpg", "/assets/images/comics/kim_4.jpg"],
      video: "/assets/videos/docu_kim_maria.mp4",
      prompt: "너는 김마리아 열사야. 침착하고 이성적이면서도 독립을 향한 열망이 가득한 지적인 여성 독립운동가의 말투로 대화해줘.",
      articleBody: `[독립신문 보도: 치마속에 숨긴 희망, 김마리아의 입국]\n\n국경의 삼엄한 감시를 뚫고 우리 땅에 도착한 \n한 여성이 있었다. 그녀의 이름은 김마리아. \n\n그녀의 품안에는 도쿄 청년들이 목숨 걸고 작성한 \n2.8 독립선언서가 숨겨져 있었으니, 이는 곧 \n3.1 운동의 거대한 폭풍을 부르는 전조였다. \n\n여성의 몸으로 그 위험한 길을 자처한 그녀의 \n용기는 일제 조차 예상하지 못한 것이었다. \n\n그녀는 입국 직후 전국을 돌며 여성들을 깨웠고 \n"우리 여성들도 나라를 찾는 일에 뒷짐만 지고 \n있어서는 안 된다"며 항일 의지를 전파했다. \n\n그녀의 선구적인 행동 덕분에 수많은 여학생들이 \n책상 대신 거리를 택해 만세를 부를 수 있었다. \n\n일제의 가혹한 고문으로 건강이 악화되었음에도 \n그녀는 "나의 생명은 오직 조국을 위한 것"이라며 \n단 한 순간도 독립의 꿈을 포기하지 않았다. \n\n김마리아, 당신은 우리 민족의 나이팅게일이자 \n가장 강력한 연락책이며, 깨어있는 지성의 상징이다. \n\n그녀가 전해준 선언서 한 장 한 장이 모여 \n이제는 거대한 불길이 되어 온 산하를 태우고 있다. \n\n우리 독립운동사에서 김마리아라는 이름은 \n가장 지혜롭고 용감한 여성의 표상으로 남을 것이다. \n그녀의 헌신에 깊은 경의를 표하며 기록을 마친다.`
    },
    { 
      id: "villain_sunwoo_sun", 
      name: "선우순", 
      type: "villain", 
      stats: { attack: 30, defense: 60, wisdom: 85, lead: 65 },
      desc: "총독부의 지시로 도쿄 유학생들의 독립운동을 억누르기 위해 파견되었던 황국신민의 충견입니다.", 
      img: "/assets/images/cards/villain_sun.jpg",
      comicImgs: [
        "/assets/images/comics/sun_1.jpg", 
        "/assets/images/comics/sun_2.jpg", 
        "/assets/images/comics/sun_3.jpg", 
        "/assets/images/comics/sun_4.jpg"
      ],
      video: "/assets/videos/docu_sunwoo_sun.mp4",
      prompt: "너는 총독부의 지시를 받고 도쿄 유학생들을 회유하러 간 친일파 선우순이다. 유학생들의 독립운동을 철없는 불장난으로 치부하며, 대일본제국에 순응하는 것만이 엘리트의 길이라며 거들먹거리는 어조로 말해라.",
      articleBody: "[독립신문 고발장: 민족의 혼을 팔아치운 지식인 사냥개, 선우순]\n\n조선 청년들의 의로운 거사를 막기 위해 \n조선총독부가 도쿄로 급파한 사냥개가 있었으니, 바로 선우순이다. \n\n그는 붓과 말재주를 무기 삼아 동포 청년들을 찾아다니며, \n\"대일본제국에 거역하는 것은 계란으로 바위치기\"라며 비열한 협박과 회유를 일삼았다. \n독립의 숭고한 열망을 철없는 불장난이라 조롱하고, \n제 나라의 고통을 외면한 채 일제의 앞잡이 노릇을 충실히 수행하며 부귀영화를 누렸다. \n\n그는 단순한 밀정이 아니었다. 지식을 변절의 도구로 삼아 \n'조선독립 불능론'을 설파하며 민족의 정신을 갉아먹은 지능적인 민족의 적이다. \n일제 총독과 100번이 넘는 밀담을 나누며, 동지들을 투옥의 늪으로 밀어 넣은 \n그 악랄한 정보원은 지금도 선열들의 피 맺힌 울분을 자아내게 한다. \n\n중추원 참의의 감투를 쓰고 일제의 통치를 정당화했던 그 비열한 행보는 \n우리 민족의 가슴에 씻을 수 없는 상처를 남긴 반역의 역사였다. \n지식인의 양심을 버리고 동족을 팔아 권력을 탐했던 그 더러운 이름은, \n역사라는 준엄한 심판대 앞에서 가장 먼저 찢겨나갈 것이다. \n\n후세는 그를 애국지사를 탄압한 밀정의 대명사로 기억할 것이며, \n정의로운 역사의 심판은 영원히 그를 친일의 굴레 속에 가둘 것이다. \n청년들의 피를 밟고 올라선 그 위선적인 삶은 결코 역사의 기록을 피할 수 없으며, \n우리의 후손들은 그의 이름 앞에 당당히 돌을 던질 것이다."

},
  
  ],

  // ==========================================
  // 3월: 3.1 운동 
  // ==========================================
  3: [
    { 
      id: "yu_gwansun", 
      name: "유관순", 
      type: "hero", 
      stats: { attack: 88, defense: 98, wisdom: 85, lead: 93 },
      desc: "아우내 장터의 불꽃. 18세의 나이로 감옥에서도 독립을 외친 당신은 죽음도 꺾지 못한 불굴의 용기론자입니다.", 
      img: "/assets/images/cards/hero_yu.jpg",
      comicImgs: [
        "/assets/images/comics/yu_1.jpg",
        "/assets/images/comics/yu_2.jpg",
        "/assets/images/comics/yu_3.jpg",
        "/assets/images/comics/yu_4.jpg"
      ],
      video: "/assets/videos/docu_yu_gwansun.mp4",
      prompt: "너는 유관순 열사야. 18세의 당당하고 기개 넘치는 목소리로 대답해줘. 어떤 고문에도 굴하지 않는 강인한 의지를 보여줘.",
      articleBody: `[독립신문 특별기재: 아우내의 별, 유관순을 기록하다]\n\n1919년 삼월, 저 뜨거웠던 함성을 기억하는가. \n오늘 우리 독립신문은 천안 아우내 장터에서 \n민족의 혼을 일깨운 한 소녀의 거룩한 행적을 \n피 끓는 심정으로 기록하고자 한다. \n\n유관순, 그녀는 단지 열여덟의 어린 학생이었으나 \n그 품에 품은 뜻은 태산보다 높고 바다보다 깊었다. \n이화학당의 수업이 중단된 후 고향으로 내려온 그녀는 \n밤마다 마을을 돌며 독립의 당위성을 설파하였고, \n손수 태극기를 제작하여 동포들의 손에 쥐여주었다. \n\n거사 당일, 아우내 장터에 모인 수천의 군중 앞에서 \n그녀가 치켜든 태극기는 곧 자유의 선언이었으며, \n일제의 칼날 앞에서도 멈추지 않았던 그녀의 '만세'는 \n잠자던 조선의 기상을 깨우는 뇌성벽력과도 같았다. \n\n그녀의 부모가 현장에서 목숨을 잃는 참극 속에서도 \n유관순은 무너지지 않고 끝까지 대열을 이끌었으니, \n어찌 이를 용기라는 단어 하나로 다 설명할 수 있겠는가. \n\n지금 그녀는 서대문 형무소의 차가운 벽 속에 갇혀 있으나, \n"내 나라를 찾기 위해 만세를 부른 것이 죄냐"는 \n그녀의 꾸짖음은 옥벽을 넘어 강토 전체에 울리고 있다. \n\n일제의 간악한 고문이 그녀의 몸을 상하게 할지언정 \n그녀의 고결한 영혼은 결코 굴복시키지 못할 것이다. \n\n우리 민족의 모든 딸들이여, 그리고 청년들이여! \n유관순의 저 찬란한 눈빛을 기억하라. \n그녀가 흘린 눈물과 피가 거름이 되어 \n이 땅에 독립의 꽃이 만발하는 그날이 올 때까지, \n우리는 결코 투쟁을 멈추지 않을 것이다. \n\n역사는 그녀의 이름을 영원한 불꽃으로 기록할 것이며, \n후손들은 대대로 그녀의 용기를 노래할 것이다. \n정의는 반드시 승리하며, 진리는 죽지 않는다. \n유관순 열사의 안녕과 우리 독립의 그날을 기원한다.`
    },
    { 
      id: "lee_wanyong", 
      name: "이완용", 
      type: "villain", 
      stats: { attack: 20, defense: 30, wisdom: 95, lead: 70 },
      desc: "나라를 팔아넘긴 매국노의 우두머리. 자신의 부귀영화를 위해 민족의 고통을 외면한 당신은 영원한 죄인입니다.", 
      img: "/assets/images/cards/villain_lee.jpg",
      comicImgs: ["/assets/images/comics/lee_1.jpg", "/assets/images/comics/lee_2.jpg", "/assets/images/comics/lee_3.jpg", "/assets/images/comics/lee_4.jpg"],
      video: "/assets/videos/docu_lee_wanyong.mp4",
      prompt: "너는 매국노 이완용이야. 엘리트 의식에 찌들어 조선의 멸망은 어쩔 수 없는 대세였다며 아주 거만하고 뻔뻔하게 말해줘.",
      articleBody: `[호외: 매국노의 우두머리 이완용, 민족의 심판을 받으라]\n\n나라를 팔아넘긴 천하의 역적 이완용을 보라! \n그는 화려한 관복 아래 썩은 영혼을 숨긴 채 \n우리 조국의 주권을 일제에게 송두리째 넘겼다. \n\n그는 "시대를 읽는 지혜"라고 포장하지만 \n그것은 오직 본인의 안위와 부귀를 위한 \n비겁하고 더러운 뒷거래에 불과했다. \n\n1919년 삼월, 온 민족이 만세를 부르며 일어날 때 \n그는 일제와 손잡고 동포들의 목을 조르며 \n자신의 호화로운 저택에서 웃음을 지었다. \n\n수많은 의병들이 피를 흘리며 쓰러질 때 \n그가 얻은 은사금은 곧 동포들의 고혈이자 피눈물이다. \n\n이완용, 당신은 조선 역사상 가장 수치스러운 \n이름으로 영원히 박제될 것이다. \n\n천년 만년이 흘러도 당신의 죄는 씻기지 않을 것이며 \n당신이 누린 부귀영화는 역사의 침 세례로 돌아갈 것이다. \n\n민족의 고통을 외면하고 나라의 자존심을 짓밟은 죄, \n그 무거운 형벌이 당신의 이름 뒤에 항상 따라붙으리라. \n\n우리는 다시 선언한다. 이완용과 그 일당의 만행을 \n단 한 순간도 잊지 않을 것이며, 기필코 국권을 되찾아 \n이들의 죄악을 준엄하게 단죄할 것이다. \n\n하늘이 알고 땅이 아는 그대의 죄, \n지옥의 불길조차 그대를 거부할 만큼 추악하다.`
    }
  ],

  // ==========================================
  // 4월: 임시정부 수립
  // ==========================================
  4: [
    { 
      id: "ahn_changho", 
      name: "안창호", 
      type: "hero", 
      stats: { attack: 65, defense: 85, wisdom: 99, lead: 99 },
      desc: "임시정부의 등불. 상하이에서 흩어진 독립지사들을 하나로 규합하고 민주공화제의 기틀을 다진 위대한 지도자입니다.", 
      img: "/assets/images/cards/hero_ahn.jpg",
      comicImgs: ["/assets/images/comics/ahn_1.jpg", "/assets/images/comics/ahn_2.jpg", "/assets/images/comics/ahn_3.jpg", "/assets/images/comics/ahn_4.jpg"],
      video: "/assets/videos/docu_ahn_changho.mp4",
      prompt: "너는 도산 안창호 선생이다. 분열된 임시정부를 하나로 묶기 위해 애쓰는 지도자로서, 진실되고 온화하면서도 강직한 어조로 민족의 나아갈 길을 설파해라.",
      articleBody: `[독립신문 기획: 상하이의 밤을 밝히는 지도자, 안창호]\n\n조국의 주권이 무너지고 수많은 지사들이 이국땅 상하이로 모여들었을 때, \n가장 먼저 그 흩어진 모래알들을 하나로 묶어낸 이가 바로 도산 안창호 선생이다. \n그는 내무총장으로서 임시정부의 실질적인 체계를 세웠고, \n"낙망은 청년의 죽음이요, 청년이 죽으면 민족이 죽는다"며 \n가난과 굶주림에 지친 대원들의 마음을 어루만졌다. \n그가 세운 민주공화제의 뼈대는 오늘날 대한민국의 가장 거룩한 뿌리가 되었다.`
    },
    { 
      id: "sunwoo_gap", 
      name: "선우갑", 
      type: "villain", 
      stats: { attack: 40, defense: 60, wisdom: 85, lead: 30 },
      desc: "임시정부 요인들을 감시하고 일제에 밀고한 악질 밀정. 조국의 새로운 시작을 적의 손에 팔아넘기려 했습니다.", 
      img: "/assets/images/cards/villain_woo.jpg",
      comicImgs: ["/assets/images/comics/spy_1.jpg", "/assets/images/comics/spy_2.jpg", "/assets/images/comics/spy_3.jpg", "/assets/images/comics/spy_4.jpg"],
      video: "/assets/videos/docu_spy_jung.mp4",
      prompt: "너는 임시정부를 파괴하기 위해 상하이에 파견된 밀정 선우갑이다. 임시정부의 가난과 분열을 조롱하며, 자신의 스파이 짓이 현명한 생존법이라 자랑해라.",
      articleBody: `[독립신문 고발장: 새 정부의 뿌리를 좀먹는 독버섯, 밀정]\n\n대한민국 임시정부가 가난과 분열 속에서도 간신히 싹을 틔우려 할 때, \n그 연약한 뿌리를 파먹기 위해 침투한 일제의 첩자들이 있었다. \n선우갑을 비롯한 밀정들은 동포로 위장하여 요인들의 회동 위치와 \n국내로 향하는 비밀 연락망(연통제) 조직도를 일본 영사관에 넘겼다. \n동지들의 피를 팔아 산 고급 양복을 걸치고 상하이 거리를 활보하는 \n그 추악한 매국노들을 역사는 결코 잊지도, 용서하지도 않을 것이다.`
    }
  ],

  // ==========================================
  // 5월: 종로경찰서 폭탄 투척 (의열단)
  // ==========================================
  5: [
    { 
      id: "kim_wonbong", 
      name: "김원봉", 
      type: "hero", 
      stats: { attack: 95, defense: 80, wisdom: 95, lead: 98 },
      desc: "의열단 단장 약산. 폭력과 암살을 유일한 독립의 수단으로 천명하고 일제의 간담을 서늘하게 한 전설의 지휘관입니다.", 
      img: "/assets/images/cards/hero_wonbong.jpg",
      comicImgs: ["/assets/images/comics/won_1.jpg", "/assets/images/comics/won_2.jpg", "/assets/images/comics/won_3.jpg", "/assets/images/comics/won_4.jpg"],
      video: "/assets/videos/docu_kim_wonbong.mp4",
      prompt: "너는 의열단 단장 약산 김원봉이다. 일제가 가장 두려워했던 인물답게, 폭력 투쟁과 무장 항쟁의 필요성을 차갑고 날카로운 카리스마로 설파해라.",
      articleBody: `[독립신문 기획: 의열의 불꽃을 지휘하는 거인, 약산 김원봉]\n\n"정의의 사를 맹렬히 실행한다!" \n신흥무관학교를 거쳐 의열단을 창설한 약산 김원봉. \n그는 타협을 모르는 차가운 이성과 끓어오르는 투혼으로 \n조선 총독부와 일제 심장부를 타격할 암살 폭파 계획을 지휘했다. \n일제가 가장 높은 현상금을 걸고 그를 잡으려 혈안이 되었음에도 \n그는 신출귀몰하게 아시아 전역을 넘나들며 독립투쟁을 이끌었다. \n김상옥, 나석주 등 수많은 의열단 영웅들의 등 뒤에는 항상 약산이 있었다.`
    },
    { 
      id: "kim_taeseok", 
      name: "김태석", 
      type: "villain", 
      stats: { attack: 80, defense: 50, wisdom: 85, lead: 50 },
      desc: "독립운동가들을 전문적으로 사냥하던 경기도 고등경찰. 강우규 등 의사들을 체포하여 일제의 총애를 받은 악질 형사입니다.", 
      img: "/assets/images/cards/villain_taeseok.jpg",
      comicImgs: ["/assets/images/comics/kimt_1.jpg", "/assets/images/comics/kimt_2.jpg", "/assets/images/comics/kimt_3.jpg", "/assets/images/comics/kimt_4.jpg"],
      video: "/assets/videos/docu_spy_jung.mp4",
      prompt: "너는 일제의 충견이자 고등계 형사 김태석이다. 독립투사들을 무자비하게 고문한 것을 자신의 업적으로 자랑하며, 제국의 힘 앞에 저항하는 자들을 비웃어라.",
      articleBody: `[독립신문 고발장: 제 동포를 찢어 발기는 일제의 사냥개, 김태석]\n\n총독부를 향해 폭탄을 던진 강우규 의사를 직접 체포하고 \n수많은 의열단원들을 잡아들인 잔혹한 고등경찰 김태석. \n그는 동포의 피와 살을 뜯어 일제에 바치며 높은 관직을 하사받았다. \n독립투사들의 비명 소리를 자장가 삼아 호의호식하는 그 추악한 얼굴을 \n우리 민족은 영원히 잊지 않고 기억할 것이다. \n광복의 그날, 가장 날카로운 단두대의 칼날이 그의 목을 겨눌 것이다.`
    }
  ],

  // ==========================================
  // 6월: 봉오동 전투
  // ==========================================
  6: [
    { 
      id: "hong_beomdo", 
      name: "홍범도", 
      type: "hero", 
      stats: { attack: 99, defense: 85, wisdom: 90, lead: 99 },
      desc: "백두산 호랑이. 신출귀몰한 유격 전술로 봉오동에서 일본 정규군을 섬멸한 전설적인 독립군 총사령관입니다.", 
      img: "/assets/images/cards/hero_hong.jpg",
      comicImgs: ["/assets/images/comics/hong_1.jpg", "/assets/images/comics/hong_2.jpg", "/assets/images/comics/hong_3.jpg", "/assets/images/comics/hong_4.jpg"],
      video: "/assets/videos/docu_hong_beomdo.mp4",
      prompt: "너는 봉오동 전투를 승리로 이끈 홍범도 장군이다. 날아오는 총탄 속에서도 산처럼 굳건하게 부하들을 이끄는 명장다운 웅장하고 호탕한 목소리로 말해라.",
      articleBody: `[독립신문 호외: 만주 벌판에 포효하는 백두산 호랑이, 홍범도]\n\n1920년 6월, 짙은 안개로 덮인 북간도 봉오동의 죽음의 골짜기. \n홍범도 장군이 이끄는 독립군 연합부대는 지형을 활용한 완벽한 매복으로 \n무적을 자랑하던 일본군 월강추격대대를 완벽하게 박살 내었다! \n총알이 비 오듯 쏟아지는 전장의 한복판에서 장군은 직접 소총을 들고 \n신출귀몰하게 적의 심장부를 강타했다. \n이 위대한 승리는 일제에 짓눌려 있던 2천만 동포에게 \n"우리도 정규군을 이길 수 있다"는 거대한 희망의 불기둥이 되었다.`
    },
    { 
      id: "nameless_soldier", 
      name: "무명 독립군", 
      type: "neutral", 
      stats: { attack: 60, defense: 70, wisdom: 60, lead: 50 },
      desc: "가족을 만주에 남겨두고 두려움을 이겨내며 총을 잡았던 평범한 군인. 승리의 이면에는 이들의 피와 땀이 있었습니다.", 
      img: "/assets/images/cards/neutral_soldier.jpg",
      comicImgs: ["/assets/images/comics/nsol_1.jpg", "/assets/images/comics/nsol_2.jpg", "/assets/images/comics/nsol_3.jpg", "/assets/images/comics/nsol_4.jpg"],
      video: "/assets/videos/docu_citizen.mp4",
      prompt: "너는 봉오동 전투에 참전한 이름 없는 젋은 독립군이다. 처음 사람을 향해 총을 쏠 때의 두려움과, 그럼에도 조국을 위해 목숨을 건 굳은 결의를 솔직하게 말해라.",
      articleBody: `[독립신문 아카이브: 봉오동 계곡에 스러져간 이름 없는 별들]\n\n봉오동 대첩의 영광스러운 승전보 뒤에는 \n낡은 러시아제 소총을 꼭 쥐고 떨며 방아쇠를 당겼던 \n수많은 평범한 청년 독립군들의 뜨거운 피가 흐르고 있다. \n그들은 고향을 떠나 만주의 매서운 추위와 배고픔을 견디며 \n오직 조국 해방이라는 일념 하나로 죽음의 계곡에 뛰어들었다. \n역사 책에 이름 한 줄 남기지 못하고 쓰러져간 이 무명용사들이야말로 \n만주 벌판을 지켜낸 진정한 호랑이들이다.`
    },
    { 
      id: "eom_inseop", 
      name: "엄인섭", 
      type: "villain", 
      stats: { attack: 60, defense: 50, wisdom: 80, lead: 50 },
      desc: "과거 안중근 의사와 의형제를 맺었으나, 훗날 일본의 밀정이 되어 홍범도 장군의 부대를 팔아넘긴 끔찍한 변절자입니다.", 
      img: "/assets/images/cards/villain_inseop.jpg",
      comicImgs: ["/assets/images/comics/eom_1.jpg", "/assets/images/comics/eom_2.jpg", "/assets/images/comics/eom_3.jpg", "/assets/images/comics/eom_4.jpg"],
      video: "/assets/videos/docu_spy_jung.mp4",
      prompt: "너는 한때 안중근의 의형제였으나 결국 일제의 밀정이 되어 동지들을 배신한 엄인섭이다. 끝없는 도망자 생활에 지쳐 현실을 택했다며 스스로의 배신을 씁쓸하게, 그러나 뻔뻔하게 합리화해라.",
      articleBody: `[독립신문 고발장: 형제의 등에 칼을 꽂은 변절자, 엄인섭]\n\n한때 안중근 의사와 피를 나누며 의형제를 맺고 연추 지역을 호령했던 사내. \n그러나 모진 세월과 일제의 교묘한 회유 앞에 그의 영혼은 썩어문드러졌다. \n그는 일본 영사관의 밀정이 되어 만주 일대 독립군의 이동 경로와 \n홍범도 장군의 은신처를 낱낱이 적에게 밀고하는 악귀로 전락했다. \n함께 조국을 외치던 형제들을 죽음으로 내몰고 얻어낸 그 더러운 삶은 \n결국 민족의 가장 깊은 저주와 함께 파멸을 맞이할 것이다.`
    }
  ],

  // ==========================================
  // 7월: 헤이그 특사 파견
  // ==========================================
  7: [
    { 
      id: "lee_jun", 
      name: "이준", 
      type: "hero", 
      stats: { attack: 50, defense: 70, wisdom: 95, lead: 90 },
      desc: "헤이그의 외로운 호소. 만국평화회의에서 일본의 침략을 고발하고 이국땅에서 한을 품은 채 순국한 대한의 특사입니다.", 
      img: "/assets/images/cards/hero_leejun.jpg",
      comicImgs: ["/assets/images/comics/leej_1.jpg", "/assets/images/comics/leej_2.jpg", "/assets/images/comics/leej_3.jpg", "/assets/images/comics/leej_4.jpg"],
      video: "/assets/videos/docu_leejun.mp4",
      prompt: "너는 헤이그 특사 이준 열사다. 열강들의 철저한 외면 속에서도 결코 물러서지 않고, 대한제국의 주권을 되찾기 위해 피를 토하는 듯한 절박하고 강직한 목소리로 말해라.",
      articleBody: `[독립신문 기획: 만국의 차가운 외면 속, 조국을 부르다 순국한 이준]\n\n1907년 7월, 네덜란드 헤이그. 열강들의 냉정한 외면과 일제의 방해 속에서 \n회의장 입장조차 거부당한 세 명의 특사가 있었다. \n그중 이준 열사는 기자들 앞에서 을사늑약의 불법성을 피를 토하듯 연설하며 \n일본의 야만적인 침략 행위를 전 세계의 양심에 호소했다. \n그러나 제국주의의 차가운 벽에 부딪힌 그는 끝내 분을 이기지 못하고 \n머나먼 이국땅 호텔방에서 조국을 부르짖으며 장렬히 순국하셨다. \n그가 남긴 피 묻은 외교의 씨앗은 훗날 우리 민족의 거대한 독립 투지로 부활했다.`
    },
    { 
      id: "song_byeongjun", 
      name: "송병준", 
      type: "villain", 
      stats: { attack: 30, defense: 40, wisdom: 85, lead: 80 },
      desc: "일진회를 조직하여 매국에 앞장섰으며, 헤이그 특사 사건을 빌미로 고종 황제를 협박해 퇴위시킨 천하의 매국노입니다.", 
      img: "/assets/images/cards/villain_byeongjun.jpg",
      comicImgs: ["/assets/images/comics/songb_1.jpg", "/assets/images/comics/songb_2.jpg", "/assets/images/comics/songb_3.jpg", "/assets/images/comics/songb_4.jpg"],
      video: "/assets/videos/docu_lee_wanyong.mp4",
      prompt: "너는 일진회 총재 송병준이다. 일본의 무력을 등에 업고 황제에게 퇴위를 강요했던 자신의 행위를 '조선을 근대화시키기 위한 구국의 결단'이었다며 매우 뻔뻔하고 교만하게 주장해라.",
      articleBody: `[독립신문 사설: 황제를 겁박하고 나라를 판 친일 거두, 송병준]\n\n헤이그 특사 파견 사실이 알려지자, 일제 통감부보다 앞장서서 \n궁궐로 쳐들어가 고종 황제에게 권총을 들이밀며 퇴위를 강요한 자. \n그가 바로 친일 매국 단체 '일진회'의 우두머리 송병준이다. \n그는 동포 수십만 명을 선동해 일본의 앞잡이 노릇을 시켰으며, \n매국의 대가로 일본 귀족의 작위와 거대한 영지를 하사받았다. \n조선의 멸망을 축하하며 샴페인을 터뜨린 그의 추악한 얼굴을 \n우리 민족의 역사서 가장 더러운 페이지에 영원히 낙인찍을 것이다.`
    }
  ],

  // ==========================================
  // 8월: 경술국치와 신흥무관학교
  // ==========================================
  8: [
    { 
      id: "lee_hoeyoung", 
      name: "이회영", 
      type: "hero", 
      stats: { attack: 70, defense: 80, wisdom: 95, lead: 99 },
      desc: "노블레스 오블리주의 상징. 명문가의 전 재산을 급매하여 만주 벌판에 신흥무관학교를 세우고 기꺼이 굶주림을 택한 거인입니다.", 
      img: "/assets/images/cards/hero_leehoe.jpg",
      comicImgs: ["/assets/images/comics/leeh_1.jpg", "/assets/images/comics/leeh_2.jpg", "/assets/images/comics/leeh_3.jpg", "/assets/images/comics/leeh_4.jpg"],
      video: "/assets/videos/docu_lee_hoeyoung.mp4",
      prompt: "너는 우당 이회영 선생이다. 수조 원에 달하는 전 재산을 독립운동에 바치고 만주에서 가난하게 살아가면서도, 한 점 후회 없이 당당하고 기품 있는 선비의 억양으로 말해라.",
      articleBody: `[독립신문 기획: 모든 것을 버리고 광야로 나선 거인, 우당 이회영]\n\n1910년 8월, 나라가 망하자 삼한 갑족이라 불리던 최고의 명문가 6형제가 \n현재 가치 수조 원에 달하는 전 재산을 처분하고 압록강을 건넜다. \n그 중심에 선 우당 이회영은 얼어붙은 만주 벌판에 신흥무관학교를 세워 \n훗날 청산리 대첩을 이끌 수천 명의 정예 독립군 장교들을 길러냈다. \n일제가 주는 귀족 작위를 거부하고, 만주 빈민가에서 옥수수죽으로 연명하며 \n일생을 항일 투쟁에 바치다 모진 고문 끝에 순국한 그의 삶은 \n'가진 자가 조국을 위해 무엇을 해야 하는가'를 증명한 가장 위대한 서사시다.`
    },
    { 
      id: "min_younghwi", 
      name: "민영휘", 
      type: "villain", 
      stats: { attack: 30, defense: 70, wisdom: 80, lead: 60 },
      desc: "백성의 고혈을 짜내어 조선 최고의 갑부가 된 뒤, 일제에 빌붙어 자작 작위를 받고 호화롭게 산 탐욕의 화신입니다.", 
      img: "/assets/images/cards/villain_younghwi.jpg",
      comicImgs: ["/assets/images/comics/min_1.jpg", "/assets/images/comics/min_2.jpg", "/assets/images/comics/min_3.jpg", "/assets/images/comics/min_4.jpg"],
      video: "/assets/videos/docu_lee_wanyong.mp4",
      prompt: "너는 일제 강점기 조선 최고의 갑부이자 친일파 민영휘다. 나라가 망하든 말든 내 재산만 지키면 그만이라며, 자신의 끝없는 부를 자랑하고 가난한 독립군들을 벌레 보듯 비웃어라.",
      articleBody: `[독립신문 고발장: 백성의 고혈로 쌓아 올린 탐욕의 성, 민영휘]\n\n이회영 가문이 전 재산을 바쳐 독립군 기지를 세울 때, \n백성들을 수탈하여 조선 최고의 갑부가 된 민영휘는 과연 무엇을 했는가? \n그는 자신의 거대한 재산을 지키기 위해 일제에 머리를 조아렸고, \n그 대가로 일본 귀족인 '자작' 작위와 거액의 은사금을 받았다. \n나라가 멸망하는 그 순간조차 자신의 금고를 채우는 데만 혈안이 되었던 \n이 탐욕의 짐승이 누린 부귀영화는 동포의 뼈와 살을 깎아 만든 것이다. \n역사의 심판은 그의 재산뿐 아니라 이름조차 남김없이 불태울 것이다.`
    }
  ],

  // ==========================================
  // 9월: 한국광복군 창설
  // ==========================================
  9: [
    { 
      id: "ji_cheongcheon", 
      name: "지청천", 
      type: "hero", 
      stats: { attack: 90, defense: 85, wisdom: 88, lead: 99 },
      desc: "한국광복군 총사령관. 만주와 중국 관내를 무대로 수십 년간 정규전을 지휘하며 조국 진공의 칼날을 간 무장입니다.", 
      img: "/assets/images/cards/hero_ji.jpg",
      comicImgs: ["/assets/images/comics/ji_1.jpg", "/assets/images/comics/ji_2.jpg", "/assets/images/comics/ji_3.jpg", "/assets/images/comics/ji_4.jpg"],
      video: "/assets/videos/docu_ji_cheongcheon.mp4",
      prompt: "너는 한국광복군 총사령관 지청천 장군이다. 일본 육사를 탈출해 평생을 독립군에 바친 정통 군인으로서, 국내 진공 작전을 앞둔 비장하고 카리스마 넘치는 어조로 부하들을 독려해라.",
      articleBody: `[독립신문 특집: 대한민국 정규군의 탄생과 총사령관 지청천]\n\n1940년 9월, 충칭에 마침내 대한민국 임시정부의 정식 군대인 '한국광복군'이 창설되었다. \n그 중심에는 일본 육군사관학교를 탈출하여 신흥무관학교와 서로군정서, \n한국독립군을 거쳐 평생을 전장에서 보낸 지청천 총사령관이 있었다. \n그는 OSS(미 전략정보국)와 연합하여 국내로 진공하기 위한 특수부대를 훈련시켰고, \n"우리의 힘으로 조국을 탈환하리라"는 거대한 꿈을 실현 직전까지 이끌었다. \n비록 일제의 이른 항복으로 작전은 무산되었으나, 그가 육성한 광복군은 \n오늘날 자랑스러운 대한민국 국군의 모태가 되었다.`
    },
    { 
      id: "kim_seokwon", 
      name: "김석원", 
      type: "villain", 
      stats: { attack: 85, defense: 70, wisdom: 60, lead: 80 },
      desc: "일본군 고급 장교로 참전하여 일제의 침략 전쟁에 앞장섰으며, 조선 청년들에게 학도병 참전을 선동한 친일 군인입니다.", 
      img: "/assets/images/cards/villain_seokwon.jpg",
      comicImgs: ["/assets/images/comics/kims_1.jpg", "/assets/images/comics/kims_2.jpg", "/assets/images/comics/kims_3.jpg", "/assets/images/comics/kims_4.jpg"],
      video: "/assets/videos/docu_spy_jung.mp4",
      prompt: "너는 일본 제국군 대좌 김석원이다. 황군으로 복무하는 것을 무한한 영광으로 여기며, 광복군을 보잘것없는 반란군이라 폄하하고 학도병 징집을 당연하게 생각하는 군국주의자의 억양으로 말해라.",
      articleBody: `[독립신문 고발장: 제 동포를 사지로 몰아넣은 일본 제국의 충견]\n\n지청천과 이범석이 일본 육사를 탈출해 광야의 독립군이 되었을 때, \n반대로 끝까지 일제 군대에 남아 황군의 장교로서 부귀를 누린 자가 있다. \n김석원은 화려한 군복을 입고 전국을 돌며 조선의 젊은 학생들에게 \n"천황 폐하를 위해 기꺼이 옥쇄하라"며 침략 전쟁의 총알받이가 될 것을 선동했다. \n수많은 청년들이 낯선 남양군도에서 피를 흘리며 억울하게 죽어갈 때, \n그는 일본 군부의 찬사를 받으며 훈장을 달고 거드름을 피웠다. \n동포의 목숨을 밟고 올라선 그 더러운 별은 영원히 지워지지 않을 죄악의 증표다.`
    }
  ],

  // ==========================================
  // 10월: 안중근 의사 하얼빈 거사
  // ==========================================
  10: [
    { 
      id: "ahn_junggeun", 
      name: "안중근", 
      type: "hero", 
      stats: { attack: 99, defense: 80, wisdom: 95, lead: 90 },
      desc: "동양 평화의 수호자. 하얼빈역에서 침략의 원흉 이토 히로부미를 처단하고 사형대 위에서도 당당했던 영웅입니다.", 
      img: "/assets/images/cards/hero_ahn_jung.jpg",
      comicImgs: ["/assets/images/comics/ahnj_1.jpg", "/assets/images/comics/ahnj_2.jpg", "/assets/images/comics/ahnj_3.jpg", "/assets/images/comics/ahnj_4.jpg"],
      video: "/assets/videos/docu_ahn_junggeun.mp4",
      prompt: "너는 대한의군 참모중장 안중근이다. 하얼빈에서 이토를 격살한 후 일본 법정에서도 전혀 굴하지 않고, 오히려 이토의 죄악 15가지를 논리적이고 호통치는 어조로 꾸짖어라.",
      articleBody: `[독립신문 호외: 하얼빈의 포효, 침략의 원흉을 격살하다]\n\n1909년 10월 26일 하얼빈역, 세 발의 총성이 세상을 뒤흔들었다. \n대한의군 참모중장 안중근 의사는 조선을 삼키려는 침략의 원흉 \n이토 히로부미의 가슴에 정의의 총탄을 정확히 명중시켰다. \n"코레아 우라(대한 만세)!"를 외치며 체포된 그는, \n일본의 법정 앞에서도 일개 살인범이 아닌 교전국 군인의 자격으로 서서 \n오히려 이토의 15가지 대죄를 조목조목 꾸짖으며 판사를 압도했다. \n사형대 위에서도 '동양평화론'을 설파하며 초연하게 순국한 그의 삶은, \n우리 민족이 일제에 굴복하지 않았음을 전 세계에 선포한 가장 위대한 사건이다.`
    },
    { 
      id: "lee_yonggu", 
      name: "이용구", 
      type: "villain", 
      stats: { attack: 20, defense: 40, wisdom: 85, lead: 70 },
      desc: "친일 단체 일진회의 회장. 안중근 의사를 테러리스트라 규탄하며 일본에 사죄 사절단을 보내는 등 매국에 앞장선 자입니다.", 
      img: "/assets/images/cards/villain_yonggu.jpg",
      comicImgs: ["/assets/images/comics/leey_1.jpg", "/assets/images/comics/leey_2.jpg", "/assets/images/comics/leey_3.jpg", "/assets/images/comics/leey_4.jpg"],
      video: "/assets/videos/docu_lee_wanyong.mp4",
      prompt: "너는 일진회 회장 이용구다. 안중근 의사의 거사로 인해 일본의 심기를 건드렸다며 분노하고, 한일병합을 청원하는 것이 우리 민족이 살 유일한 길이었다고 기만적으로 변명해라.",
      articleBody: `[독립신문 사설: 적장의 죽음 앞에 동포를 팔아 눈물 흘린 매국노]\n\n안중근 의사가 적장의 심장을 쏘았을 때 온 민족은 환호했으나, \n오직 일진회 회장 이용구와 매국노들만이 제 아비를 잃은 듯 통곡했다. \n그들은 "어리석은 폭도가 이토 공을 해쳤다"며 일본에 거액의 위문금을 보내고 \n사죄 사절단까지 파견하는 등 그 추악한 본성을 서슴없이 드러냈다. \n그 기세를 몰아 앞장서서 '한일병합 청원서'를 조작해 올린 이용구의 죄악은, \n우리 민족이 총칼을 든 왜적보다 내부의 배신자를 먼저 처단해야 함을 \n역사적 교훈으로 남겼다. 그의 이름은 영원한 저주 속에 썩어갈 것이다.`
    }
  ],

  // ==========================================
  // 11월: 광주 학생 독립 운동
  // ==========================================
  11: [
    { 
      id: "jang_jaeseong", 
      name: "장재성", 
      type: "hero", 
      stats: { attack: 60, defense: 75, wisdom: 95, lead: 98 },
      desc: "광주학생운동의 심장. 비밀결사 성진회와 독서회를 이끌며 감정 싸움을 전국적인 항일 투쟁으로 기획한 학생 영웅입니다.", 
      img: "/assets/images/cards/hero_jang.jpg",
      comicImgs: ["/assets/images/comics/jang_1.jpg", "/assets/images/comics/jang_2.jpg", "/assets/images/comics/jang_3.jpg", "/assets/images/comics/jang_4.jpg"],
      video: "/assets/videos/docu_jang_jaeseong.mp4",
      prompt: "너는 광주학생독립운동을 배후에서 조직한 학생 영웅 장재성이다. 단순한 한일 학생 간의 싸움이 아닌, 일제의 식민 교육과 차별을 타파하기 위한 거국적 투쟁임을 논리적이고 굳센 어조로 선언해라.",
      articleBody: `[독립신문 기획: 광주의 분노를 전국으로 피워올린 학생 지사들]\n\n1929년 11월, 나주역에서 시작된 조선과 일본 학생들의 충돌은 \n단순한 싸움이 아니라 일제의 차별과 폭압에 맞선 민족의 폭발이었다. \n그 폭발을 단순 소요로 끝내지 않고 전국적인 동맹휴학 투쟁으로 승화시킨 \n배후에는 '독서회'를 이끌던 청년 장재성과 깨어있는 학생들이 있었다. \n그들은 늦은 밤 등사기를 돌려 격문을 인쇄하고 전국의 학교로 연락망을 뻗어 \n"피 끓는 학생 대중아, 용기 있게 나서라!"라며 동세대들의 가슴에 불을 질렀다. \n가혹한 고문과 퇴학 처분 앞에서도 결코 고개 숙이지 않았던 이 학생들의 투혼은 \n3.1 운동 이후 최대 규모의 항일 운동이라는 빛나는 금자탑을 쌓아 올렸다.`
    },
    { 
      id: "pro_japanese_teacher", 
      name: "친일 훈도", 
      type: "villain", 
      stats: { attack: 50, defense: 60, wisdom: 75, lead: 50 },
      desc: "학생들의 의로운 반발을 '불온한 사상'으로 몰아 일제 경찰에게 명단을 넘기고 점수를 얻은 악질 친일 교사입니다.", 
      img: "/assets/images/cards/villain_teacher.jpg",
      comicImgs: ["/assets/images/comics/teach_1.jpg", "/assets/images/comics/teach_2.jpg", "/assets/images/comics/teach_3.jpg", "/assets/images/comics/teach_4.jpg"],
      video: "/assets/videos/docu_lee_wanyong.mp4",
      prompt: "너는 일제 제국주의 교육을 맹신하는 친일 조선인 교사다. 거리로 나선 학생들을 철없는 불량배로 취급하며, 황국신민이 되는 것만이 문명화의 길이라고 강압적이고 권위적인 어조로 훈계해라.",
      articleBody: `[독립신문 고발장: 제자를 사지로 내몬 더러운 교편, 친일 훈도]\n\n학생들이 일제의 부당한 식민 교육과 일본 학생들의 횡포에 항거할 때, \n그들의 앞을 가로막은 것은 일본 경찰뿐만이 아니었다. \n제국주의 교육에 찌든 조선인 친일 훈도(교사)들은 아이들의 의로운 분노를 \n철없는 폭동으로 매도하며 주동자들의 명단을 직접 작성해 헌병대에 넘겼다. \n교육이라는 신성한 방패 뒤에 숨어 제자들의 피를 대가로 교장 자리를 탐한 \n이 간악한 지식 거간꾼들은 참된 스승의 이름을 모욕한 최악의 배신자다. \n광복의 날, 그들이 움켜쥔 더러운 교편은 가장 먼저 부러질 것이다.`
    }
  ],

  // ==========================================
  // 12월: 식산은행/동양척식주식회사 폭탄 투척
  // ==========================================
  12: [
    { 
      id: "na_seokju", 
      name: "나석주", 
      type: "hero", 
      stats: { attack: 99, defense: 80, wisdom: 85, lead: 85 },
      desc: "수탈의 심장을 쏜 의열단원. 우리 농민의 고혈을 빨아먹던 동양척식주식회사에 폭탄을 던지고 자결한 결사 지사입니다.", 
      img: "/assets/images/cards/hero_naseokju.jpg",
      comicImgs: ["/assets/images/comics/na_1.jpg", "/assets/images/comics/na_2.jpg", "/assets/images/comics/na_3.jpg", "/assets/images/comics/na_4.jpg"],
      video: "/assets/videos/docu_na_seokju.mp4",
      prompt: "너는 식산은행과 동양척식주식회사에 폭탄을 던진 의열단원 나석주 의사다. 우리 민족의 경제를 파탄 낸 일제 기관을 심판하고, 죽음 앞에서도 전혀 흔들림 없는 맹렬하고 서늘한 투사의 목소리로 말해라.",
      articleBody: `[독립신문 호외: 착취의 온상에 떨어뜨린 징벌의 벼락, 나석주 의거]\n\n우리 민족의 토지를 빼앗고 경제의 숨통을 조이던 악질 수탈 기관, \n식산은행과 동양척식주식회사의 심장부에 정의의 폭탄이 떨어졌다! \n의열단원 나석주 의사는 백주대낮에 삼엄한 경계를 뚫고 잠입하여 \n침략 기관의 간부들을 권총으로 처단하고 통쾌한 폭음을 울렸다. \n을지로 한복판에서 수십 명의 추격대와 격렬한 총격전을 벌이던 그는, \n적에게 체포되어 굴욕을 겪느니 차라리 스스로 목숨을 끊는 고결한 자결을 택했다. \n그가 흘린 붉은 피는 빼앗긴 강토를 되찾으려는 우리 농민과 민중의 \n가장 뜨거운 대답으로 역사에 깊이 새겨질 것이다.`
    },
    { 
      id: "han_sangryong", 
      name: "한상룡", 
      type: "villain", 
      stats: { attack: 20, defense: 40, wisdom: 90, lead: 80 },
      desc: "수탈의 대리인. 식산은행 등 일제의 경제 침략 기관에 협력하며 조선인들의 고혈을 짜내어 거대한 부를 이룬 친일 자본가입니다.", 
      img: "/assets/images/cards/villain_sangryong.jpg",
      comicImgs: ["/assets/images/comics/han_1.jpg", "/assets/images/comics/han_2.jpg", "/assets/images/comics/han_3.jpg", "/assets/images/comics/han_4.jpg"],
      video: "/assets/videos/docu_lee_wanyong.mp4",
      prompt: "너는 일제에 협력하여 막대한 부를 이룬 친일 자본가 한상룡이다. 자본의 논리가 세상의 전부라며 나석주 의사의 숭고한 희생을 '자본을 모르는 미개한 자의 테러'라고 오만하게 조롱해라.",
      articleBody: `[독립신문 사설: 동포의 피를 황금으로 바꾼 흡혈귀, 친일 자본가]\n\n일제가 무력으로 강토를 짓밟았다면, 경제의 숨통을 조인 것은 \n동양척식주식회사와 식산은행 등 악랄한 착취 자본이었다. \n그리고 그 선봉에서 길잡이 역할을 하며 동포의 피를 황금으로 바꿔치기한 \n한상룡 같은 친일 자본가들의 죄악은 그 무엇으로도 씻을 수 없다. \n그들은 "조선을 근대화시키기 위한 자본의 흐름"이라는 교묘한 궤변으로 \n수십만 농민들을 소작농으로 전락시키고 길거리로 나앉게 만들었다. \n폭탄 연기 속에 숨어 제 잇속을 챙긴 이 흡혈귀 자본가들의 더러운 금고를 \n우리 민족이 온전히 박살 낼 날이 기필코 오고야 말 것이다.`
    }
  ]
};