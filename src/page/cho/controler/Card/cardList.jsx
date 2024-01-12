import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  wrap: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "450px",
    zIndex: "999",
    padding: "4px",

    display: "flex",
    flexWrap: "wrap",
    gap: "4px",

    backgroundColor: "rgb(233 254 255)",
    borderStyle: "solid",
    borderColor: "#000000",
    borderWidth: "1px",
  },
  back: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0)", // 투명한 검은색 배경
    zIndex: "998", // wrap보다 낮은 z-index
  },
  card: {
    display: "flex",
    flexDirection: "column",
  },
  imageSize: {
    height: "100px",
  },
});
export default function CardList({ close }) {
  const cards = [
    "업화",
    "대폭발",
    "벼락",
    "낙뢰",
    "용오름",
    "충격파",
    "지진",
    "해일",
    "폭풍우",
    "정화",
    "세계수의공명",
    "분출",
  ];

  function stopPropagation(event) {
    event.stopPropagation(); //이벤트 전파 막기
  }
  return (
    <>
      <div
        {...stylex.props(styles.back)}
        onMouseOver={stopPropagation}
        onMouseLeave={stopPropagation}
        onMouseMove={stopPropagation}
        onClick={close}
      ></div>
      <div
        {...stylex.props(styles.wrap)}
        onMouseOver={stopPropagation}
        onMouseMove={stopPropagation}
        onMouseLeave={stopPropagation}
      >
        {cards.map((card) => (
          <div key={card} {...stylex.props(styles.card)}>
            <img src={`/${card}.png`} {...stylex.props(styles.imageSize)} />
            <span>{card}</span>
          </div>
        ))}
      </div>
    </>
  );
}
