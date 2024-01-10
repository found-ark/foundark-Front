import * as stylex from "@stylexjs/stylex";
import Controller from "./controler";
import "../../assets/cho";
import Board from "./board";

const styles = stylex.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
  flex: {
    display: "flex",
  },
  red: {
    backgroundColor: "red",
    height: "550px",
    width: "500px",
  },
});

export default function Cho() {
  return (
    <div className="content">
      <div {...stylex.props(styles.container)}>
        <Board gear={"장갑"} stage={7} />
        <Controller />
      </div>
    </div>
  );
}
