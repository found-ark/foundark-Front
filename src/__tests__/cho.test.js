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
  setGuidBoard,
  delRedGuidBoard,
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
    });
  });

  test("gear 설정", () => {
    expect(reducer(undefined, setGear({ gear: "견갑" }))).toMatchObject({
      gear: "견갑",
    });
  });

  test("stage 설정", () => {
    expect(reducer(undefined, setStage({ stage: 3 }))).toMatchObject({
      stage: 3,
    });
  });

  test("정령 사용", () => {
    expect(reducer(undefined, summon())).toMatchObject({
      currentSummonCount: 1,
      leftSummonCount: 6,
    });
  });

  test("정령사용, 교체이후 부위변경", () => {
    const previousState = {
      gear: "견갑",
      stage: 1,
      tradeCount: 0,
      currentSummonCount: 5,
      leftSummonCount: 2,
    };

    expect(reducer(previousState, setGear({ gear: "투구" }))).toMatchObject({
      gear: "투구",
      stage: 1,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
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
    };

    expect(reducer(previousState, setStage({ stage: 3 }))).toMatchObject({
      gear: "견갑",
      stage: 3,
      blessing: 0,
      tradeCount: 2,
      currentSummonCount: 0,
      leftSummonCount: 7,
    });
  });

  test("정령 trade", () => {
    expect(reducer(undefined, trade())).toMatchObject({
      tradeCount: 1,
    });
  });

  test("정령 trade 최소 0", () => {
    const previousState = {
      tradeCount: 0,
    };
    expect(reducer(previousState, trade())).toMatchObject({
      tradeCount: 0,
    });
  });
});

describe("보드 관련 state처리", () => {
  test("보드 교체", () => {
    expect(
      reducer(undefined, setBoard({ board: boardMap["견갑"]["5"] }))
    ).toMatchObject({
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
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
      specialTile: [-1, -1],
    };

    expect(
      reducer(previousState, setTile({ row: 1, col: 2, status: 5 }))
    ).toMatchObject({
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 5, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
      specialTile: [1, 2],
    });
  });

  test("특수타일 여러개 불가", () => {
    const previousState = {
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 4, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
      specialTile: [2, 3],
    };

    expect(
      reducer(previousState, setTile({ row: 1, col: 2, status: 5 }))
    ).toMatchObject({
      board: [
        [-1, 1, 1, 1, 1, -1],
        [1, 1, 5, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [-1, 1, 1, 1, 1, -1],
      ],
      specialTile: [1, 2],
    });
  });

  test("가이드 지정", () => {
    const previousState = {
      guidBoard: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
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
      reducer(previousState, setGuidBoard({ row: 1, col: 2, status: 1 }))
    ).toMatchObject({
      guidBoard: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
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

  test("가이드 예외 외부", () => {
    const previousState = {
      guidBoard: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
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
      reducer(previousState, setGuidBoard({ row: -1, col: 2, status: 1 }))
    ).toMatchObject({
      guidBoard: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
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

  test("가이드 예외 선택불가 타일", () => {
    const previousState = {
      guidBoard: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
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
      reducer(previousState, setGuidBoard({ row: 0, col: 0, status: 1 }))
    ).toMatchObject({
      guidBoard: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
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
  test("레드 가이드 제거", () => {
    const previousState = {
      guidBoard: [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 3, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 2, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 1, 0, 2, 0, 0],
      ],
    };

    expect(reducer(previousState, delRedGuidBoard())).toMatchObject({
      guidBoard: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0],
      ],
    });
  });
});

describe("정령 카드 합체 메카니즘", () => {
  test("정령 카드 합체 안함", () => {
    const previousState = {
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
    };

    expect(reducer(previousState, move({ idx: 0 }))).toMatchObject({
      nextCard: ["낙뢰", "업화", "업화"],
      cards: [
        { name: "업화", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
    });
  });

  test("정령 카드 합체 진행", () => {
    const previousState = {
      nextCard: ["충격파", "용오름", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "업화", tier: 1 },
      ],
    };

    expect(reducer(previousState, move({ idx: 0 }))).toMatchObject({
      nextCard: ["낙뢰", "낙뢰", "충격파"],
      cards: [
        { name: "업화", tier: 2 },
        { name: "용오름", tier: 1 },
      ],
    });
  });

  test("정령 카드 단계 큰곳으로 합체 진행", () => {
    const previousState = {
      nextCard: ["충격파", "용오름", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "업화", tier: 2 },
      ],
    };

    expect(reducer(previousState, move({ idx: 0 }))).toMatchObject({
      nextCard: ["낙뢰", "낙뢰", "충격파"],
      cards: [
        { name: "용오름", tier: 1 },
        { name: "업화", tier: 3 },
      ],
    });
  });

  test("정령 카드 연속합체", () => {
    const previousState = {
      nextCard: ["업화", "업화", "업화"],
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "업화", tier: 1 },
      ],
    };

    expect(reducer(previousState, move({ idx: 0 }))).toMatchObject({
      nextCard: ["낙뢰", "낙뢰", "낙뢰"],
      cards: [
        { name: "업화", tier: 3 },
        { name: "업화", tier: 1 },
      ],
    });
  });
});

describe("카드 교체", () => {
  test("다음 카드 교체0", () => {
    expect(
      reducer(undefined, setNextCard({ idx: 0, card: "낙뢰" }))
    ).toMatchObject({
      nextCard: ["낙뢰", "업화", "업화"],
    });
  });

  test("다음 카드 교체1", () => {
    expect(
      reducer(undefined, setNextCard({ idx: 1, card: "낙뢰" }))
    ).toMatchObject({
      nextCard: ["업화", "낙뢰", "업화"],
    });
  });

  test("다음 카드 교체2", () => {
    expect(
      reducer(undefined, setNextCard({ idx: 2, card: "낙뢰" }))
    ).toMatchObject({
      nextCard: ["업화", "업화", "낙뢰"],
    });
  });

  test("카드 교체1", () => {
    expect(
      reducer(undefined, setCard({ idx: 0, card: "충격파" }))
    ).toMatchObject({
      cards: [
        { name: "충격파", tier: 1 },
        { name: "용오름", tier: 1 },
      ],
    });
  });

  test("카드 교체2", () => {
    expect(reducer(undefined, setCard({ idx: 1, card: "낙뢰" }))).toMatchObject(
      {
        cards: [
          { name: "낙뢰", tier: 1 },
          { name: "낙뢰", tier: 1 },
        ],
      }
    );
  });

  test("카드 티어 교체", () => {
    expect(reducer(undefined, setCardTier({ idx: 0, num: 1 }))).toMatchObject({
      cards: [
        { name: "낙뢰", tier: 2 },
        { name: "용오름", tier: 1 },
      ],
    });
  });

  test("카드 티어 최대 3", () => {
    expect(reducer(undefined, setCardTier({ idx: 0, num: 4 }))).toMatchObject({
      cards: [
        { name: "낙뢰", tier: 3 },
        { name: "용오름", tier: 1 },
      ],
    });
  });

  test("카드 티어 최소 1", () => {
    const previousState = {
      cards: [
        { name: "낙뢰", tier: 3 },
        { name: "용오름", tier: 3 },
      ],
    };

    expect(
      reducer(previousState, setCardTier({ idx: 0, num: -3 }))
    ).toMatchObject({
      cards: [
        { name: "낙뢰", tier: 1 },
        { name: "용오름", tier: 3 },
      ],
    });
  });
});
