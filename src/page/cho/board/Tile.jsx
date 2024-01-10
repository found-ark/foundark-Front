import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
const styles = stylex.create({
  tile: {
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

  return (
    <div {...stylex.props(styles.tile)}>
      {status === -1 ? (
        <></>
      ) : (
        <div
          {...stylex.props(
            styles.tile,
            styles.recommendGuide,
            statusStyle[status]
          )}
        ></div>
      )}
    </div>
  );
}
