import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { sec2time } from "../../util";
import { setHp, setTime, countTime } from "../../../../reducer/harbrel";

export default function HarbSector({hp, id }) {
  const HP = useSelector((state) => state.harbrel.hp)
  const time = useSelector((state) => state.harbrel.time)
  const [isBreak,setIsBreak] = useState(false);

  const dispatch = useDispatch()

  const [timeCheck, setTimeCheck] = useState(undefined);

  useEffect(()=>{
    //해당 체력이 변경될때 작동
    breakSector();
  },[HP[id]])


  useEffect(() => {
    if (time[id] <= 0) {
      clearInterval(timeCheck);
      dispatch(setHp({ index:id, value:hp }));
      dispatch(setTime( { index:id, value:100 }));
      setIsBreak(false);
    }
  }, [time[id], timeCheck]);

  useEffect(() => {
    return () => {
      clearInterval(timeCheck);
    };
  }, [timeCheck]);

  function breakSector() {
    
    //체력이 0이면 아무런 변화 없음
    if (!isBreak&&HP[id] === 0){
      //break
      dispatch(setHp({ index:id, value:0 }));
      dispatch(setTime( { index:id, value:100 }));
      setIsBreak(true);
      setTimeCheck(
        setInterval(() => {
          dispatch(countTime({index:id}));
        }, 1000)
      );
    }else{

    }

  }

  function attackName() {
    if (HP[id] === 2) {
      return " atk1";
    } else if (HP[id] === 1) {
      return " atk2";
    }
    return "";
  }

  return (
    <>
      {isBreak ? (
        <div className="harbSec break">
          <div className="text">{sec2time(time[id])}</div>
        </div>
      ) : (
        <div className={"harbSec" + attackName()}>
          <div className="text">{HP[id]}</div>
        </div>
      )}
    </>
  );
}
