import { createSlice } from "@reduxjs/toolkit";
import { countData } from "../page/cho/util";

const initialState = {
  gear: "투구",
  stage: 1,
  blessing: 0, // 엘조윈 가호
  tradeCount: 2, //남은 정령 교체 횟수
  currentSummonCount: 0, //현재 소환 횟수
  leftSummonCount: 7, //남은 소환 횟수
  nextCard: ["업화", "업화", "업화"],
  cards: [
    { name: "낙뢰", tier: 1 }, //정령명, 등급
    { name: "용오름", tier: 1 }, //정령명, 등급
  ],
};

const choSlice = createSlice({
  name: "cho",
  initialState,
  reducers: {
    setGear: (state, action) => {
      const { gear } = action.payload;
      state.gear = gear;
      state.leftSummonCount = countData[state.gear][state.stage];
    },
    setStage: (state, action) => {
      const { stage } = action.payload;
      state.stage = stage;
      state.leftSummonCount = countData[state.gear][state.stage];
    },
    setBlessing: (state, action) => {
      const { bless } = action.payload;
      state.blessing = bless;
      if (bless > 0) {
        state.leftSummonCount += 1;
      }
    },
    trade: (state) => {
      state.tradeCount -= 1;
    },
    summon: (state) => {
      state.leftSummonCount -= 1;
      state.currentSummonCount += 1;
    },
    move: (state, action) => {
      //최대 두번 연속 이동한다.
      const { idx } = action.payload;

      let changeIdx = idx;
      while (true) {
        //추출
        const next = state.nextCard.pop();
        //새로운 카드 추가
        state.nextCard.unshift("낙뢰");

        //교체
        state.cards[changeIdx] = { name: next, tier: 1 };

        //둘의 이름이 다르면 종료
        if (state.cards[0].name !== state.cards[1].name) break;

        //둘중 한쪽이 tier가 3이면 종료
        if (state.cards[0].tier === 3 || state.cards[1].tier === 3) break;

        //카드가 동일해서 이제 합쳐야 된다.
        if (state.cards[0].tier >= state.cards[1].tier) {
          //왼쪽카드 등급 상승
          changeIdx = 1; //오른쪽카드 교체 다시 진행
          state.cards[0].tier += 1;
        } else {
          //오른쪽카드 드급상승
          changeIdx = 0; //왼쪽카드 교체 다시 진행
          state.cards[1].tier += 1;
        }
      }
    },
  },
});

export const { move, setBlessing, setGear, setStage, summon, trade } =
  choSlice.actions;
export default choSlice.reducer;
