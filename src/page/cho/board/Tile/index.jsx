import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import Option from "./option";
import { useDispatch, useSelector } from "react-redux";
import {
  setGuidBoard,
  setTile,
  setSelect,
  move,
  summon,
  addTrade,
  reinforceTile,
  replicationTile,
} from "../../../../reducer/cho";
import { attackDelta } from "../../util";
const styles = stylex.create({
  wrap: {
    position: "relative",
    width: "40px",
    height: "40px",
    backgroundColor: "#abe9ff",
  },
  tile: {
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
  guide: {
    borderStyle: "solid",
    borderColor: "#ff0404",
    borderWidth: "1px",
  },
  recommendGuide: {
    borderStyle: "solid",
    borderColor: "#2104ff",
    borderWidth: "1px",
  },
  selects: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    position: "absolute",

    backgroundColor: "rgb(233 254 255)",
    borderStyle: "solid",
    borderColor: "#000000",
    borderWidth: "1px",

    top: "0px",
    left: "0px",
    zIndex: "999",
    padding: "4px",
  },
  option: {
    display: "flex",
    gap: "4px",
  },
  normal: {
    backgroundColor: "#bea9ff",
  },
  destroy: {
    backgroundColor: "#969696",
  },
  distortion: {
    backgroundColor: "#000000",
  },
  addition: {
    backgroundColor: "#ffabab",
  },
  reinforce: {
    backgroundColor: "#fbabff",
  },
  blessing: {
    backgroundColor: "#f7ff85",
  },
  mystery: {
    backgroundColor: "#fbc26c",
  },
  reassign: {
    backgroundColor: "#fdfdfd",
  },
  replication: {
    backgroundColor: "#668aff",
  },
});
/**
 # -1: 없는자리
 # 0: 파괴된자리
 # 1: 파괴 가능한 자리
 # 2: 왜곡
 # 3: 추가 : 정령교체횟수 추가
 # 4: 강화 : 남은정령 강화
 # 5: 축복 : 횟수 소모 X
 # 6: 신비 : 세계수 or 분출로 남은카드 변경
 # 7: 재배치 : 재배치
 # 8: 복제 : 쓴카드 복제하기. 반댓편으로 생성됨
 */
export default function Tile({ row, col }) {
  const board = useSelector((state) => state.cho.board);
  const guidBoard = useSelector((state) => state.cho.guidBoard);
  const select = useSelector((state) => state.cho.select);
  const cards = useSelector((state) => state.cho.cards);

  const dispatch = useDispatch();

  const [statusStyle, setStatusStyle] = useState([
    styles.destroy,
    styles.normal,
    styles.distortion,
    styles.addition,
    styles.reinforce,
    styles.blessing,
    styles.mystery,
    styles.reassign,
    styles.replication,
  ]);

  const [open, setOpen] = useState(false);

  function selectOpen() {
    if (select > -1) {
      //카드가 선택되었을때 부서지기 적용
      //타일 처리

      if (!guidCheck()) return;

      if (cards[select]["tier"] === 1) {
        //---1레벨은 확률별로 처리
        //선택한 곳만 파괴
        //가이드는 유지
        if (["세계수의공명", "분출"].includes(cards[select]["name"])) {
          //세계수의공명, 분출은 1레벨이 완성된 레벨
          guidDel();
          guidDestroy();
        } else {
          specialTileDestroy([0, 0]);
          dispatch(setTile({ row: row, col: col, status: 0 }));
        }
      } else if (cards[select]["tier"] === 2) {
        //---2레벨은 무조건 처리
        //가이드타일 파괴
        guidDel();
        //가이드 제거
        guidDestroy();
        //파괴된영역에 왜곡있으면 복구갯수+3
      } else if (cards[select]["tier"] === 3) {
        //---3레벨은 왜곡 제외
        //가이드타일 파괴
        //가이드제거
        guidDel();
        guidDestroy();
      }

      dispatch(setSelect({ idx: -1 }));
      dispatch(move({ idx: select }));
      dispatch(summon());
    } else {
      //카드 선택 안했을때
      setOpen(true);
    }
  }

  function tileChange(status) {
    dispatch(setTile({ row: row, col: col, status: status }));
  }

  //--부숴지는 영역 확인
  function onMouseEnter() {
    if (select > -1) {
      if (!guidCheck()) return;
      //부숴지는 영역 설정
      guidAdd();
    }
  }
  function onMouseLeave() {
    if (select > -1) {
      if (!guidCheck()) return;
      guidDel();
    }
  }

  function guidCheck() {
    //빈곳 or 부서진곳 선택 불가
    if (board[row][col] === -1 || board[row][col] === 0) return false;

    //정화,세계수공명,분출만 왜곡 선택 가능
    if (board[row][col] === 2) {
      if (
        !["정화", "신목의정화", "세계수의공명", "분출"].includes(
          cards[select]["name"]
        )
      )
        return false;
    }

    return true;
  }

  function guidAdd() {
    attackDelta[cards[select]["name"]].forEach((delta) => {
      dispatch(
        setGuidBoard({ row: row + delta[0], col: col + delta[1], status: 1 })
      );
    });
  }
  function guidDel() {
    attackDelta[cards[select]["name"]].forEach((delta) => {
      dispatch(
        setGuidBoard({ row: row + delta[0], col: col + delta[1], status: -1 })
      );
    });
  }
  function guidDestroy() {
    attackDelta[cards[select]["name"]].forEach((delta) => {
      if (
        row + delta[0] < 0 ||
        row + delta[0] >= board.length ||
        col + delta[1] < 0 ||
        col + delta[1] >= board.length
      )
        //보드 밖은 넘기기
        return;

      if (board[row + delta[0]][col + delta[1]] === -1)
        //빈곳 넘기기
        return;

      //왜곡
      if (board[row + delta[0]][col + delta[1]] === 2) {
        //왜곡을 건드렸다
        if (
          ["정화", "신목의정화", "세계수의공명", "분출"].includes(
            cards[select]["name"]
          )
        ) {
          //왜곡을 파괴한다.
          dispatch(
            setTile({ row: row + delta[0], col: col + delta[1], status: 0 })
          );
          return;
        } else {
          //왜곡의 부작용
          if (cards[select]["tier"] === 3) {
            //3등급은 부작용X
          } else {
            //부작용 발생
          }
          return;
        }
      }
      //타일 부수기
      specialTileDestroy(delta);
      dispatch(
        setTile({ row: row + delta[0], col: col + delta[1], status: 0 })
      );
    });
  }

  function specialTileDestroy(delta) {
    // # 3: 추가 : 정령교체횟수 추가
    // # 4: 강화 : 남은정령 강화
    // # 5: 축복 : 횟수 소모 X
    // # 6: 신비 : 세계수 or 분출로 남은카드 변경
    // # 7: 재배치 : 재배치
    // # 8: 복제 : 쓴카드 복제하기. 반댓편으로 생성됨
    if (board[row + delta[0]][col + delta[1]] === 3) {
      alert("추가제거");
      dispatch(addTrade());
    } else if (board[row + delta[0]][col + delta[1]] === 4) {
      alert("강화제거");
      dispatch(reinforceTile({ idx: select }));
    } else if (board[row + delta[0]][col + delta[1]] === 5) {
      alert("축복제거");
      dispatch(blessTile());
    } else if (board[row + delta[0]][col + delta[1]] === 8) {
      alert("복제제거");
      dispatch(replicationTile({ idx: select }));
    }
  }
  return (
    <div
      {...stylex.props(styles.wrap)}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      {board[row][col] === -1 ? (
        <></>
      ) : (
        <>
          <div
            {...stylex.props(
              styles.tile,
              statusStyle[board[row][col]],
              guidBoard[row][col] & (1 > 0) && styles.guide
            )}
            onClick={selectOpen}
          ></div>
          {open && (
            <div {...stylex.props(styles.selects)}>
              <div {...stylex.props(styles.option)}>
                <Option
                  name={"일반"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[1]}
                  close={() => setOpen(false)}
                  setStatus={() => tileChange(1)}
                />
                <Option
                  name={"파괴"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[0]}
                  close={() => setOpen(false)}
                  setStatus={() => tileChange(0)}
                />
                <Option
                  name={"왜곡"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[2]}
                  close={() => setOpen(false)}
                  setStatus={() => tileChange(2)}
                />
              </div>
              <div {...stylex.props(styles.option)}>
                <Option
                  name={"추가"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[3]}
                  close={() => setOpen(false)}
                  setStatus={() => tileChange(3)}
                />
                <Option
                  name={"강화"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[4]}
                  close={() => setOpen(false)}
                  setStatus={() => tileChange(4)}
                />
                <Option
                  name={"축복"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[5]}
                  close={() => setOpen(false)}
                  setStatus={() => tileChange(5)}
                />
                <Option
                  name={"신비"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[6]}
                  close={() => setOpen(false)}
                  setStatus={() => tileChange(6)}
                />
                <Option
                  name={"재배치"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[7]}
                  close={() => setOpen(false)}
                  setStatus={() => tileChange(7)}
                />
                <Option
                  name={"복제"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[8]}
                  close={() => setOpen(false)}
                  setStatus={() => tileChange(8)}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
