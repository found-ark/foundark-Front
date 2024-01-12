import * as stylex from "@stylexjs/stylex";
import { useEffect, useState } from "react";
import Option from "./option";
const styles = stylex.create({
  tile: {
    position: "relative",
    width: "40px",
    height: "40px",
    backgroundColor: "#abe9ff",
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
export default function Tile({ status }) {
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

  const [curStatus, setCurStatus] = useState(status);

  useEffect(() => {
    setCurStatus(status);
  }, [status]);

  const [open, setOpen] = useState(false);

  function selectOpen() {
    setOpen(true);
  }

  return (
    <div {...stylex.props(styles.tile)}>
      {curStatus === -1 ? (
        <></>
      ) : (
        <>
          <div
            {...stylex.props(
              styles.tile,
              styles.recommendGuide,
              statusStyle[curStatus]
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
                  setStatus={() => setCurStatus(1)}
                />
                <Option
                  name={"파괴"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[0]}
                  close={() => setOpen(false)}
                  setStatus={() => setCurStatus(0)}
                />
                <Option
                  name={"왜곡"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[2]}
                  close={() => setOpen(false)}
                  setStatus={() => setCurStatus(2)}
                />
              </div>
              <div {...stylex.props(styles.option)}>
                <Option
                  name={"추가"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[3]}
                  close={() => setOpen(false)}
                  setStatus={() => setCurStatus(3)}
                />
                <Option
                  name={"강화"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[4]}
                  close={() => setOpen(false)}
                  setStatus={() => setCurStatus(4)}
                />
                <Option
                  name={"축복"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[5]}
                  close={() => setOpen(false)}
                  setStatus={() => setCurStatus(5)}
                />
                <Option
                  name={"신비"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[6]}
                  close={() => setOpen(false)}
                  setStatus={() => setCurStatus(6)}
                />
                <Option
                  name={"재배치"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[7]}
                  close={() => setOpen(false)}
                  setStatus={() => setCurStatus(7)}
                />
                <Option
                  name={"복제"}
                  tileStyle={styles.tile}
                  statusStyle={statusStyle[8]}
                  close={() => setOpen(false)}
                  setStatus={() => setCurStatus(8)}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
