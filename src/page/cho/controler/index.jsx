import * as stylex from "@stylexjs/stylex";
import Button from "./Button";
import Select from "./Select";
import CustomLabel from "./CustomLabel";
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
});
export default function Controller() {
  return (
    <div {...stylex.props(styles.controller)}>
      <div {...stylex.props(styles.flex, styles.setting)}>
        <div {...stylex.props(styles.flex)}>
          <Select
            label="부위"
            options={["머리", "견갑", "상의", "하의", "장갑"]}
          />
          <Select label="단계" options={[1, 2, 3, 4, 5, 6, 7]} />
          <Select label="가호" options={[1, 2, 3, 4, 5]} />
        </div>
        <Button value="리셋" />
      </div>
      <div>
        <CustomLabel label="정령사용횟수" value={0} />
        <CustomLabel label="교체횟수" value={0} />
      </div>
      <hr />
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
