import { useEffect, useState } from "react";
import { sec2time } from "../../util";

export default function HarbSector({ hp, id, setMapBox }) {
  const [HP, setHP] = useState(hp);

  useEffect(() => {
    setMapBox((prv) => {
      let newArr = { ...prv };
      newArr[id] = attack;
      return newArr;
    });
    return () => {
      clearTimeout(timeCheck);
    };
  }, []);
  const [timeCheck, setTimeCheck] = useState(undefined);
  const [time, setTime] = useState(100);

  useEffect(() => {
    if (time === 0) {
      clearInterval(timeCheck);
      setHP(3);
      setTime(100);
    }
  }, [time, timeCheck]);

  /**
   * 해당 섹터에 damage를 입힌다.
   * @param {*} damage
   */
  function attack(damage) {
    //-1은 현재 상태 확인
    if (damage === -1) {
      if (HP === 0) {
        return [false, time];
      } else {
        return [true, HP];
      }
    }
    //체력이 0이면 아무런 변화 없음
    if (HP === 0) return;

    //attack
    if (HP > damage) {
      setHP((prv) => prv - damage);
      return;
    }
    //break
    setHP(0);
    setTime(100);
    setTimeCheck(
      setInterval(() => {
        setTime((prv) => prv - 1);
      }, 1000)
    );
  }

  function attackName() {
    if (HP === 2) {
      return " atk1";
    } else if (HP === 1) {
      return " atk2";
    }
    return "";
  }

  return (
    <>
      {HP === 0 ? (
        <div className="harbSec break">
          <div className="text">{sec2time(time)}</div>
        </div>
      ) : (
        <div className={"harbSec" + attackName()}>
          <div className="text">{HP}</div>
        </div>
      )}
    </>
  );
}
