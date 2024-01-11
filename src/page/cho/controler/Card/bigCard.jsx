import * as stylex from "@stylexjs/stylex";
import SmallCard from "./smallCard";
import CardButton from "../Button/cardButton";
import { useDispatch } from "react-redux";
import { trade } from "../../../../reducer/cho";

const styles = stylex.create({
  flex: {
    display: "flex",
  },
  col: {
    display: "flex",
    flexDirection: "column",
  },
  buttonWrap: {
    justifyContent: "space-between",
  },
  center: {
    justifyContent: "center",
  },
  size: {
    height: "200px",
  },
});

export default function BigCard({ name, idx }) {
  const dispatch = useDispatch();
  function changeCard() {
    dispatch(trade());
  }
  function modifyCard() {}
  return (
    <div {...stylex.props(styles.col)}>
      <div {...stylex.props(styles.flex)}>
        <div {...stylex.props(styles.size)}>
          <SmallCard name={name} />
        </div>
        <div {...stylex.props(styles.col, styles.buttonWrap)}>
          <div>
            <CardButton value={"카드수정"} onClick={modifyCard} />
          </div>
          <div {...stylex.props(styles.col)}>
            <CardButton value={"단계+"} />
            <CardButton value={"단계-"} />
          </div>
        </div>
      </div>
      <div {...stylex.props(styles.flex, styles.center)}>
        <CardButton value={"교체"} onClick={changeCard} />
      </div>
    </div>
  );
}
