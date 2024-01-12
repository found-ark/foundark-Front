import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import { attackArea } from "../../util";

const styles = stylex.create({
  wrap: {
    position: "relative",
  },
  xy: (top, left) => ({
    position: "absolute",
    zIndex: 10,
    top,
    left,
  }),
  over: {
    position: "absolute",
    zIndex: 10,
    top: "-10px",
    left: "10px",
  },
  flex: {
    display: "flex",
    flexDirection: "column",
  },
  size: {
    height: "90%",
  },
});
export default function Card({ name, onClick }) {
  const [over, setOver] = useState(false);
  const [overTop, setOverTop] = useState("0px");
  const [overLeft, setOverLeft] = useState("0px");

  function onMouseOver() {
    setOver(true);
  }
  function onMouseLeave() {
    setOver(false);
  }
  function onMouseMove(event) {
    const parentRect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - parentRect.left;
    const y = event.clientY - parentRect.top;
    setOverTop(y - 105 + "px");
    setOverLeft(x + "px");
  }
  return (
    <div
      {...stylex.props(styles.wrap, styles.flex, styles.size)}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onClick={onClick}
    >
      <img src={`/${name}.png`} {...stylex.props(styles.size)} />
      <span>{name}</span>
      {over && (
        <div {...stylex.props(styles.xy(overTop, overLeft))}>
          <img src={attackArea[name]} />
        </div>
      )}
    </div>
  );
}
