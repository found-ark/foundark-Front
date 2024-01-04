import * as stylex from "@stylexjs/stylex";
const styles = stylex.create({
  button: {},
});

export default function Button({ onClick, value }) {
  return (
    <button {...stylex.props(styles.button)} onClick={onClick}>
      {value}
    </button>
  );
}
