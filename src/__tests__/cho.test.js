import { boardMap } from "../page/cho/util";
import reducer, {
  move,
  setBlessing,
  setGear,
  setStage,
  summon,
  setBoard,
  setTile,
  trade,
  setNextCard,
  setCard,
  setCardTier,
} from "../reducer/cho";

describe("기초 state처리", () => {
  test("초기 state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });

  test("gear 설정", () => {
    expect(reducer(undefined, setGear({ gear: "견갑" }))).toEqual({
      gear: "견갑",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });

  test("stage 설정", () => {
    expect(reducer(undefined, setStage({ stage: 3 }))).toEqual({
      gear: "투구",
      stage: 3,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });

  test("정령 사용", () => {
    expect(reducer(undefined, summon())).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 1,
      leftSummonCount: 6,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });

  test("정령사용, 교체이후 부위변경", () => {
    const previousState = {
      gear: "견갑",
      stage: 1,
      blessing: 0,
      tradeCount: 0,
      currentSummonCount: 5,
      leftSummonCount: 2,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    };

    expect(reducer(previousState, setGear({ gear: "투구" }))).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });
  test("정령사용, 교체이후 단계변경", () => {
    const previousState = {
      gear: "견갑",
      stage: 1,
      blessing: 0,
      tradeCount: 0,
      currentSummonCount: 5,
      leftSummonCount: 2,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    };

    expect(reducer(previousState, setStage({ stage: 3 }))).toEqual({
      gear: "견갑",
      stage: 3,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });
});

describe("보드 관련 state처리", () => {
  test("보드 교체", () => {
    expect(
      reducer(undefined, setBoard({ board: boardMap["견갑"]["5"] }))
    ).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 2, 1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1, 2, 1],
        [1, 1, 1, 2, 1, 1, 1],
        [1, 2, 1, 1, 1, 1, 1],
        [1, 1, 2, 1, 1, 2, 1],
        [1, 1, 1, 1, 1, 1, 1],
      ],
    });
  });

  test("타일 교체", () => {
    const previousState = {
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 0,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    };

    expect(
      reducer(previousState, setTile({ row: 1, col: 2, status: 5 }))
    ).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 0,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 5, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });
});

describe("정령 카드 합체 메카니즘", () => {
  test("정령 카드 합체 안함", () => {
    const previousState = {
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    };

    expect(reducer(previousState, move({ idx: 0 }))).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["낙뢰", "업화", "업화"],
      cards: [
        { name: "업화", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });

  test("정령 카드 합체 진행", () => {
    const previousState = {
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["충격파", "용오름", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "업화", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    };

    expect(reducer(previousState, move({ idx: 0 }))).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["낙뢰", "낙뢰", "충격파"],
      cards: [
        { name: "업화", tier: 2 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });

  test("정령 카드 단계 큰곳으로 합체 진행", () => {
    const previousState = {
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["충격파", "용오름", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "업화", tier: 2 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    };

    expect(reducer(previousState, move({ idx: 0 }))).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["낙뢰", "낙뢰", "충격파"],
      cards: [
        { name: "용오름", tier: 1 },
        { name: "업화", tier: 3 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });

  test("정령 카드 연속합체", () => {
    const previousState = {
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "업화", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    };

    expect(reducer(previousState, move({ idx: 0 }))).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["낙뢰", "낙뢰", "낙뢰"],
      cards: [
        { name: "업화", tier: 3 },
        { name: "업화", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });
});

describe("카드 교체", () => {
  test("다음 카드 교체0", () => {
    expect(reducer(undefined, setNextCard({ idx: 0, card: "낙뢰" }))).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["낙뢰", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });

  test("다음 카드 교체1", () => {
    expect(reducer(undefined, setNextCard({ idx: 1, card: "낙뢰" }))).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "낙뢰", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });

  test("다음 카드 교체2", () => {
    expect(reducer(undefined, setNextCard({ idx: 2, card: "낙뢰" }))).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "낙뢰"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });

  test("카드 교체1", () => {
    expect(reducer(undefined, setCard({ idx: 0, card: "충격파" }))).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "충격파", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });

  test("카드 교체2", () => {
    expect(reducer(undefined, setCard({ idx: 1, card: "낙뢰" }))).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "낙뢰", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });

  test("카드 티어 교체", () => {
    expect(reducer(undefined, setCardTier({ idx: 0, num: 1 }))).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 2 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });

  test("카드 티어 최대 3", () => {
    expect(reducer(undefined, setCardTier({ idx: 0, num: 4 }))).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 3 },
        { name: "용오름", tier: 1 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });

  test("카드 티어 최소 1", () => {
    const previousState = {
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 3 },
        { name: "용오름", tier: 3 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    };

    expect(reducer(previousState, setCardTier({ idx: 0, num: -3 }))).toEqual({
      gear: "투구",
      stage: 1,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 3 },
      ],
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
    });
  });
});
