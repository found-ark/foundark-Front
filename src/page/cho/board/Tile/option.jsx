import * as stylex from "@stylexjs/stylex";

export default function Option({
  tileStyle,
  statusStyle,
  setStatus,
  close,
  name,
}) {
  function optionClick() {
    //status선택
    setStatus();

    //닫기
    close();
  }
  return (
    <div onClick={optionClick}>
      <div {...stylex.props(tileStyle, statusStyle)}></div>
      <div>{name}</div>
    </div>
  );
}
