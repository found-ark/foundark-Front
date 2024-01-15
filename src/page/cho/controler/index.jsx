import * as stylex from "@stylexjs/stylex";
import Button from "./Button";
import Select from "./Select";
import CustomLabel from "./CustomLabel";
import SmallCard from "./Card/smallCard";
import BigCard from "./Card/bigCard";
import { useDispatch, useSelector } from "react-redux";
import {
  resetGuidBoard,
  resetState,
  setBlessing,
  setBoard,
  setGear,
  setStage,
} from "../../../reducer/cho";
import { boardMap } from "../util";
const styles = stylex.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
  flex: {
    display: "flex",
  },
  controller: {
    height: "550px",
    width: "500px",
  },
  setting: {
    justifyContent: "space-around",
  },
  smallSize: {
    height: "100px",
  },
});
export default function Controller() {
  const dispatch = useDispatch();
  const nextCards = useSelector((state) => state.cho.nextCard);
  const cards = useSelector((state) => state.cho.cards);
  const tradeCount = useSelector((state) => state.cho.tradeCount);
  const leftSummonCount = useSelector((state) => state.cho.leftSummonCount);
  const gear = useSelector((state) => state.cho.gear);
  const stage = useSelector((state) => state.cho.stage);
  const blessing = useSelector((state) => state.cho.blessing);

  function changeGear(e) {
    dispatch(setGear({ gear: e.target.value }));
  }

  function changeStage(e) {
    dispatch(setStage({ stage: e.target.value }));
  }

  function changeBless(e) {
    dispatch(setBlessing({ bless: e.target.value }));
  }
  function reset() {
    //리셋
    dispatch(resetState());
    //보드 리셋
    dispatch(setBoard({ board: boardMap[gear][stage] }));
    dispatch(resetGuidBoard({ width: boardMap[gear][stage].length }));
    //가호 재계산
    dispatch(setBlessing({ bless: blessing }));
  }
  return (
    <div {...stylex.props(styles.controller)}>
      <div {...stylex.props(styles.flex, styles.setting)}>
        <div {...stylex.props(styles.flex)}>
          <Select
            label="부위"
            options={["투구", "견갑", "상의", "하의", "장갑"]}
            onChange={changeGear}
            value={gear}
          />
          <Select
            label="단계"
            options={[1, 2, 3, 4, 5, 6, 7]}
            onChange={changeStage}
            value={stage}
          />
          <Select
            label="가호"
            options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            onChange={changeBless}
            value={blessing}
          />
        </div>
        <Button value="리셋" onClick={reset} />
      </div>
      <div>
        <CustomLabel label="정령사용횟수" value={leftSummonCount} />
        <CustomLabel label="교체횟수" value={tradeCount} />
      </div>
      <hr />
      <div>
        <div {...stylex.props(styles.flex)}>
          <div {...stylex.props(styles.smallSize)}>
            <SmallCard name={nextCards[0]} idx={0} />
          </div>
          <div {...stylex.props(styles.smallSize)}>
            <SmallCard name={nextCards[1]} idx={1} />
          </div>
          <div {...stylex.props(styles.smallSize)}>
            <SmallCard name={nextCards[2]} idx={2} />
          </div>
        </div>
        <div {...stylex.props(styles.flex)}>
          <BigCard name={cards[0].name} tier={cards[0].tier} idx={0} />
          <BigCard name={cards[1].name} tier={cards[1].tier} idx={1} />
        </div>
      </div>
    </div>
  );
}
