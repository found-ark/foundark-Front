import * as stylex from "@stylexjs/stylex";
const styles = stylex.create({
  button: {},
});

export default function Select({ onChange, label, options }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select id={label} name={label} onChange={onChange}>
        {options.map((ele) => (
          <option key={ele} value={ele}>
            {ele}
          </option>
        ))}
      </select>
    </div>
  );
}
