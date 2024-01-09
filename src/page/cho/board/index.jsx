import * as stylex from "@stylexjs/stylex";
import { boardMap } from "../util";
import { useEffect, useState } from "react";
import Tile from "./Tile";
const styles = stylex.create({
  board: {
    display: "flex",
    flexDirections: "column",
  },
});

export default function Board({ gear, stage }) {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(boardMap[gear][stage].length);
  }, [gear, stage]);

  return (
    <div {...stylex.props(styles.board)}>
      {boardMap[gear][stage].map((line, i) => (
        <div key={i}>
          {line.map((ele, j) => (
            <Tile key={j} status={ele} />
          ))}
        </div>
      ))}
    </div>
  );
}
