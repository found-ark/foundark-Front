import * as stylex from "@stylexjs/stylex";
const styles = stylex.create({
  button: {},
});

export default function Select({ onChange, label, options, value }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select id={label} name={label} onChange={onChange} value={value}>
        {options.map((ele) => (
          <option key={ele} value={ele}>
            {ele}
          </option>
        ))}
      </select>
    </div>
  );
}
