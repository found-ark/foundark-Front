import { useEffect, useState } from "react";
import { sec2time } from "../../util";

export default function HarbSector({ hp, id, setMapBox }) {
  const [HP, setHP] = useState(hp);
  const [timeCheck, setTimeCheck] = useState(undefined);
  const [time, setTime] = useState(100);

  useEffect(() => {
    setMapBox((prv) => {
      let newArr = { ...prv };
      newArr[id] = (damage) => attack(damage);
      return newArr;
    });
  }, []);

  useEffect(() => {
    if (time <= 0) {
      clearInterval(timeCheck);
      setHP(hp);
      setTime(10);
    }
  }, [time, timeCheck]);

  useEffect(() => {
    return () => {
      clearInterval(timeCheck);
    };
  }, [timeCheck]);
  /**
   * 해당 섹터에 damage를 입힌다.
   * @param {*} damage
   */
  function attack(damage) {
    console.log(id + ";" + HP + "," + damage + "..." + time);
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

    if (HP > damage) {
      //attack
      setHP((prv) => {
        const newHP = prv - damage < 0 ? 0 : prv - damage;
        console.log("New HP:", newHP);
        return newHP;
      });
    } else {
      //break
      setHP((prv) => 0);
      setTime(10);
      setTimeCheck(
        setInterval(() => {
          setTime((prv) => prv - 1);
        }, 1000)
      );
    }
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
