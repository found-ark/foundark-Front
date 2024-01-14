import * as stylex from "@stylexjs/stylex";
import { boardMap } from "../util";
import { useEffect, useState } from "react";
import Tile from "./Tile";
import { useDispatch, useSelector } from "react-redux";
import { resetGuidBoard, setBoard } from "../../../reducer/cho";
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
  warning: {
    color: "red",
  },
});

export default function Board() {
  const gear = useSelector((state) => state.cho.gear);
  const stage = useSelector((state) => state.cho.stage);
  const board = useSelector((state) => state.cho.board);
  const currentSummonCount = useSelector(
    (state) => state.cho.currentSummonCount
  );
  const specialTile = useSelector((state) => state.cho.specialTile);

  const [width, setWidth] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setWidth(boardMap[gear][stage].length);
    dispatch(setBoard({ board: boardMap[gear][stage] }));
    dispatch(resetGuidBoard({ width: boardMap[gear][stage].length }));
  }, [gear, stage]);

  return (
    <div {...stylex.props(styles.board)}>
      {board.map((line, i) => (
        <div key={i} {...stylex.props(styles.line)}>
          {line.map((ele, j) => (
            <Tile key={j} row={i} col={j} />
          ))}
        </div>
      ))}
      {currentSummonCount > 0 && specialTile[0] === -1 && (
        <div>
          <span {...stylex.props(styles.warning)}>
            특수타일을 지정해주세요.
          </span>{" "}
        </div>
      )}
    </div>
  );
}
