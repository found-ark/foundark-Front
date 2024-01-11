import * as stylex from "@stylexjs/stylex";
import { boardMap } from "../util";
import { useEffect, useState } from "react";
import Tile from "./Tile";
import { useSelector } from "react-redux";
const styles = stylex.create({
  board: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  line: {
    display: "flex",
    gap: "4px",
  },
});

export default function Board() {
  const gear = useSelector((state) => state.cho.gear);
  const stage = useSelector((state) => state.cho.stage);

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(boardMap[gear][stage].length);
  }, [gear, stage]);

  return (
    <div {...stylex.props(styles.board)}>
      {boardMap[gear][stage].map((line, i) => (
        <div key={i} {...stylex.props(styles.line)}>
          {line.map((ele, j) => (
            <Tile key={j} status={ele} />
          ))}
        </div>
      ))}
    </div>
  );
}
