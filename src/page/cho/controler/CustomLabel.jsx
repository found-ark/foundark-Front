import * as stylex from "@stylexjs/stylex";
const styles = stylex.create({
  button: {},
});

export default function CustomLabel({ label, value }) {
  return (
    <div>
      {label}:{value}
    </div>
  );
}
