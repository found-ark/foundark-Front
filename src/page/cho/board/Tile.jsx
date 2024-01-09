import * as stylex from "@stylexjs/stylex";
const styles = stylex.create({});
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
  return <div>{status}</div>;
}
