import * as stylex from "@stylexjs/stylex";
import Button from "./Button";
import Select from "./Select";
import CustomLabel from "./CustomLabel";
import SmallCard from "./Card/smallCard";
import BigCard from "./Card/bigCard";
import { useDispatch } from "react-redux";
import { setBlessing, setGear, setStage } from "../../../reducer/cho";
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

  function changeGear(e) {
    dispatch(setGear({ gear: e.target.value }));
  }

  function changeStage(e) {
    dispatch(setStage({ stage: e.target.value }));
  }

  function changeBless(e) {
    dispatch(setBlessing({ bless: e.target.value }));
  }
  return (
    <div {...stylex.props(styles.controller)}>
      <div {...stylex.props(styles.flex, styles.setting)}>
        <div {...stylex.props(styles.flex)}>
          <Select
            label="부위"
            options={["투구", "견갑", "상의", "하의", "장갑"]}
            onChange={changeGear}
          />
          <Select
            label="단계"
            options={[1, 2, 3, 4, 5, 6, 7]}
            onChange={changeStage}
          />
          <Select
            label="가호"
            options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            onChange={changeBless}
          />
        </div>
        <Button value="리셋" />
      </div>
      <div>
        <CustomLabel label="정령사용횟수" value={0} />
        <CustomLabel label="교체횟수" value={0} />
      </div>
      <hr />
      <div>
        <div {...stylex.props(styles.flex)}>
          <div {...stylex.props(styles.smallSize)}>
            <SmallCard name={"업화"} />
          </div>
          <div {...stylex.props(styles.smallSize)}>
            <SmallCard name={"충격파"} />
          </div>
          <div {...stylex.props(styles.smallSize)}>
            <SmallCard name={"정화"} />
          </div>
        </div>
        <div {...stylex.props(styles.flex)}>
          <BigCard name={"업화"} level={1} />
          <BigCard name={"업화"} level={1} />
        </div>
      </div>
    </div>
  );
}
