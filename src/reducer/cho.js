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
  board: [
    [-1, 1, 1, 1, 1, -1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [-1, 1, 1, 1, 1, -1],
  ],
  guidBoard: [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  select: -1,
  specialTile: [-1, -1],
};

const choSlice = createSlice({
  name: "cho",
  initialState,
  reducers: {
    setGear: (state, action) => {
      const { gear } = action.payload;
      state.gear = gear;
      state.tradeCount = 2;
      state.blessing = 0;
      state.leftSummonCount = countData[state.gear][state.stage];
      state.currentSummonCount = 0;
    },
    setStage: (state, action) => {
      const { stage } = action.payload;
      state.stage = stage;
      //진행 값 초기화
      state.tradeCount = 2;
      state.blessing = 0;
      state.leftSummonCount = countData[state.gear][state.stage];
      state.currentSummonCount = 0;
    },
    setBlessing: (state, action) => {
      const { bless } = action.payload;
      state.tradeCount -= state.blessing;
      state.tradeCount += Number(bless);
      state.blessing = bless;
    },
    trade: (state) => {
      if (state.tradeCount > 0) {
        state.tradeCount -= 1;
      }
    },
    addTrade: (state) => {
      state.tradeCount += 1;
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
    setBoard: (state, action) => {
      const { board } = action.payload;
      state.board = board;
    },
    setTile: (state, action) => {
      const { row, col, status } = action.payload;
      if (status > 2) {
        //특수타일지정
        //이전 특수타일이 여전히 특수타일이면 제거
        if (
          state.specialTile[0] !== -1 &&
          state.board[state.specialTile[0]][state.specialTile[1]] > 2
        ) {
          state.board[state.specialTile[0]][state.specialTile[1]] = 1;
        }

        //특수타일 저장
        state.specialTile = [row, col];
      } else {
        //만약 특수타일을 지울경우
        if (
          state.specialTile[0] !== -1 &&
          row === state.specialTile[0] &&
          col === state.specialTile[1]
        ) {
          //특수타일 위치 제거
          state.specialTile = [-1, -1];
        }
      }
      state.board[row][col] = status;
    },
    setNextCard: (state, action) => {
      const { idx, card } = action.payload;
      state.nextCard[idx] = card;
    },
    setCard: (state, action) => {
      const { idx, card } = action.payload;
      state.cards[idx] = { name: card, tier: 1 };
    },
    setCardTier: (state, action) => {
      const { idx, num } = action.payload;
      state.cards[idx]["tier"] += num;
      if (state.cards[idx]["tier"] > 3) {
        state.cards[idx]["tier"] = 3;
      }
      if (state.cards[idx]["tier"] < 1) {
        state.cards[idx]["tier"] = 1;
      }
    },
    setSelect: (state, action) => {
      const { idx } = action.payload;
      state.select = idx;
    },
    setGuidBoard: (state, action) => {
      const { row, col, status } = action.payload;
      //외부 나갔을때, 현재 빈곳은 제외
      if (
        row < 0 ||
        col < 0 ||
        row >= state.guidBoard.length ||
        col >= state.guidBoard.length
      )
        return;
      if (state.board[row][col] === -1) return;

      state.guidBoard[row][col] += status;
    },
    resetGuidBoard: (state, action) => {
      const { width } = action.payload;
      state.guidBoard = [];

      for (let i = 0; i < width; i++) {
        state.guidBoard.push(Array(width).fill(0));
      }
    },
    delRedGuidBoard: (state) => {
      //가이드에 1로 표시된것들을 지운다.
      for (let i = 0; i < state.guidBoard.length; i++) {
        for (let j = 0; j < state.guidBoard.length; j++) {
          if (state.guidBoard[i][j] > 0) {
            state.guidBoard[i][j] &= ~1;
          }
        }
      }
    },
  },
});

export const {
  move,
  setBlessing,
  setGear,
  setStage,
  summon,
  trade,
  addTrade,
  setBoard,
  setTile,
  setNextCard,
  setCard,
  setCardTier,
  setSelect,
  setGuidBoard,
  resetGuidBoard,
  delRedGuidBoard,
} = choSlice.actions;
export default choSlice.reducer;
