import { useState } from "react";

export default function ControllButton({ buttonname, value, onClick }) {
  const [isActive, setIsActive] = useState(true);
  function buttonClick() {
    //버튼을 클릭한 결과에 따라 활성여부
    setIsActive(onClick());
  }
  return (
    <>
      {isActive ? (
        <div className={"harb_button " + buttonname} onClick={buttonClick}>
          {value}
        </div>
      ) : (
        <div className={"harb_button " + buttonname + " inactive"}>{value}</div>
      )}
    </>
  );
}
