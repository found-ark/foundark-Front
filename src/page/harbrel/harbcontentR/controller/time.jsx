import { useState } from "react";

import { sec2time } from "../../util";

export default function TimeDiv() {
  //다음 파메 시간

  const [time, setTime] = useState(65);
  const [timerCheck, setTimerCheck] = useState(undefined);

  //필요한 엑션들
  //   let timerCheck = undefined;

  let timeSet = (nextTime) => {
    setTime(nextTime);
    setTimerCheck(
      setInterval(() => {
        setTime((prv) => prv - 1);
        if (time === 0) {
          setTime((prv) => 60);
        }
      }, 1000)
    );
  };
  let timeReSet = (plusTime) => {
    clearTimeout(timerCheck);
    if (plusTime === 0) {
      setTime(60);
    } else {
      setTime((prv) => prv + plusTime);
    }
    setTimerCheck(
      setInterval(() => {
        setTime((prv) => prv - 1);
        if (time === 0) {
          setTime((prv) => 60);
        }
      }, 1000)
    );
  };

  let timeCheck = () => {
    return time;
  };

  //이건 전부 위로 올린다.
  let timerBox = {};
  timerBox["timeSet"] = timeSet;
  timerBox["timeReSet"] = timeReSet;
  timerBox["timeCheck"] = timeCheck;

  return (
    <div className="timeWrap">
      <div className="timeText">다음 파메 시간은 : </div>
      <div className="timer">{sec2time(time)}</div>
    </div>
  );
}
