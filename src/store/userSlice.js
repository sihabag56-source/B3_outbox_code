import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    ownedCharacters: [],
    ownedInventions: [], // 미니게임으로 얻은 발명품 이름 배열
    currentDeck: [],      // 선택된 5장의 캐릭터 ID
    
    // [추가] 구독 시스템 관련 초기 상태
    isSubscribed: false,  // 프리미엄 구독 여부
    tokens: 0,            // 특수무기 구매용 전용 토큰
    ownedWeapons: [],     // 구매한 특수무기 ID 배열
    
    // [신규] 장착 시스템: { "인물ID": "무기ID" } 형태로 저장
    equippedWeapons: {},  
  },
  reducers: {
    // 서버에서 데이터를 한꺼번에 가져와 덮어씌울 때 사용
    setUserData: (state, action) => {
      state.ownedCharacters = action.payload.ownedCharacters || [];
      state.ownedInventions = action.payload.ownedInventions || [];
      state.currentDeck = action.payload.currentDeck || [];
      
      // [추가] 서버에서 가져온 구독 및 토큰 정보 반영
      state.isSubscribed = action.payload.isSubscribed || false;
      state.tokens = action.payload.tokens || 0;
      state.ownedWeapons = action.payload.ownedWeapons || [];
      
      // [신규] 서버에서 가져온 장착 정보 반영
      state.equippedWeapons = action.payload.equippedWeapons || {};
    },
    // [추가] 발명품 하나를 획득했을 때 리덕스만 즉시 업데이트
    addInvention: (state, action) => {
      const newInvention = action.payload;
      // 중복 저장을 방지하기 위해 includes 체크
      if (!state.ownedInventions.includes(newInvention)) {
        state.ownedInventions.push(newInvention);
      }
    },
    // 덱 정보를 업데이트할 때 사용
    updateDeck: (state, action) => {
      state.currentDeck = action.payload;
    },

    // [추가] 구독 활성화 및 초기 토큰 지급
    subscribeUser: (state) => {
      state.isSubscribed = true;
      state.tokens += 1000; // 구독 보너스로 1000토큰 지급
    },

    // [추가] 특수무기 구매 (토큰 차감 및 목록 추가)
    buyWeapon: (state, action) => {
      const { id, price } = action.payload;
      if (state.tokens >= price && !state.ownedWeapons.includes(id)) {
        state.tokens -= price;
        state.ownedWeapons.push(id);
      }
    },

    // [추가] 토큰만 별도로 추가 지급해야 할 경우 (예: 미니게임 보상)
    addTokens: (state, action) => {
      state.tokens += action.payload;
    },

    // [신규] 특정 인물에게 무기 장착 또는 해제
    // action.payload: { charId: "yu_gwansun", weaponId: "w_yu_01" } -> 장착
    // action.payload: { charId: "yu_gwansun", weaponId: null } -> 해제
    equipWeapon: (state, action) => {
      const { charId, weaponId } = action.payload;
      if (weaponId) {
        state.equippedWeapons[charId] = weaponId;
      } else {
        delete state.equippedWeapons[charId];
      }
    }
  },
});

// 기존 export에 equipWeapon을 추가합니다.
export const { 
  setUserData, 
  addInvention, 
  updateDeck, 
  subscribeUser, 
  buyWeapon,
  addTokens,
  equipWeapon
} = userSlice.actions;

export default userSlice.reducer;