import * as stylex from "@stylexjs/stylex";
const styles = stylex.create({
  button: {
    borderStyle: "solid",
    borderColor: "#b3b3b3",
    backgroundColor: "white",
    borderWidth: "1px",
    cursor: "pointer",

    width: "64px",
    height: "20px",
  },
});

export default function Button({ onClick, value }) {
  return (
    <button {...stylex.props(styles.button)} onClick={onClick}>
      {value}
    </button>
  );
}
