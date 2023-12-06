import { useEffect, useState } from "react";
import { sec2time } from "../../util";

export default function HarbSector({ hp, id }) {
  // const [HP, setHP] = useState(hp);
  // const [timeCheck, setTimeCheck] = useState(undefined);
  // const [time, setTime] = useState(100);

  // useEffect(() => {
  //   if (damage === 0) return;

  //   attack(damage);

  //   return () => {
  //     clearTimeout(timeCheck);
  //   };
  // }, [damage]);

  // /**
  //  * 해당 섹터에 damage를 입힌다.
  //  * @param {*} damage
  //  */
  // function attack(damage) {
  //   //체력이 0이면 아무런 변화 없음
  //   if (HP === 0) return;

  //   //attack
  //   if (HP > damage) {
  //     setHP((prv) => prv - damage);
  //     return;
  //   }
  //   //break
  //   setHP(0);
  //   setTime(100);
  //   setTimeCheck(
  //     setInterval(() => {
  //       setTime((prv) => prv - 1);
  //       if (time === 0) {
  //         clearTimeout(timeCheck);
  //         setHP(3);
  //       }
  //     }, 1000)
  //   );
  // }

  // function attackName() {
  //   if (HP === 2) {
  //     return " atk1";
  //   } else if (HP === 1) {
  //     return " atk2";
  //   }
  //   return "";
  // }

  return (
    // <>
    //   {HP === 0 ? (
    //     <div className="harbSec break">
    //       <div className="text">{sec2time(time)}</div>
    //     </div>
    //   ) : (
    //     <div className={"harbSec" + attackName()}>
    //       <div className="text">{HP}</div>
    //     </div>
    //   )}
    // </>
    <div className={"harbSec"}>
      <div className="text">{hp}</div>
    </div>
  );
}
