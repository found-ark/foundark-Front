import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import CardList from "./cardList";
import { useDispatch } from "react-redux";
import { setNextCard } from "../../../../reducer/cho";
import Card from ".";

const styles = stylex.create({
  wrap: {
    position: "relative",
  },
  size: {
    height: "90%",
  },
});
export default function SmallCard({ name, idx }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  function openCardList() {
    setOpen(true);
  }

  function close(e) {
    e.stopPropagation();
    setOpen(false);
  }

  function changeCard(card) {
    dispatch(setNextCard({ idx: idx, card: card }));
  }
  return (
    <div {...stylex.props(styles.wrap, styles.size)}>
      <Card name={name} onClick={openCardList} />
      {open && <CardList close={close} changeCard={changeCard} />}
    </div>
  );
}
