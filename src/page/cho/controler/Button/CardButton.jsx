import * as stylex from "@stylexjs/stylex";
const styles = stylex.create({
  button: {
    borderStyle: "solid",
    borderColor: "#b3b3b3",
    borderWidth: "1px",
    cursor: "pointer",
  },
});

export default function CardButton({ onClick, value }) {
  return (
    <button {...stylex.props(styles.button)} onClick={onClick}>
      {value}
    </button>
  );
}
