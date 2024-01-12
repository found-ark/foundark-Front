import * as stylex from "@stylexjs/stylex";
import CardButton from "../Button/cardButton";
import { useDispatch, useSelector } from "react-redux";
import { trade, setCard, setCardTier, move } from "../../../../reducer/cho";
import Card from ".";
import { useState } from "react";
import CardList from "./cardList";

const styles = stylex.create({
  wrap: {
    position: "relative",
  },
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

export default function BigCard({ name, tier, idx }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const tradeCount = useSelector((state) => state.cho.tradeCount);

  function tradeCard() {
    if (tradeCount === 0) return;
    dispatch(trade());
    dispatch(move({ idx: idx }));
  }
  function changeCard(card) {
    dispatch(setCard({ idx: idx, card: card }));
  }

  function tierUpgrade() {
    dispatch(setCardTier({ idx: idx, num: 1 }));
  }

  function tierDowngrade() {
    dispatch(setCardTier({ idx: idx, num: -1 }));
  }

  function openCardList() {
    setOpen(true);
  }
  function close(e) {
    e.stopPropagation();
    setOpen(false);
  }

  return (
    <div {...stylex.props(styles.wrap, styles.col)}>
      <div {...stylex.props(styles.flex)}>
        <div {...stylex.props(styles.size)}>
          <Card name={name} tier={tier} />
        </div>
        <div {...stylex.props(styles.col, styles.buttonWrap)}>
          <div>
            <CardButton value={"카드수정"} onClick={openCardList} />
          </div>
          <div {...stylex.props(styles.col)}>
            <CardButton value={"단계+"} onClick={tierUpgrade} />
            <CardButton value={"단계-"} onClick={tierDowngrade} />
          </div>
        </div>
      </div>
      <div {...stylex.props(styles.flex, styles.center)}>
        <CardButton value={"교체"} onClick={tradeCard} />
      </div>
      {open && <CardList close={close} changeCard={changeCard} />}
    </div>
  );
}
