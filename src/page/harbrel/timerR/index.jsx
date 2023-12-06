import { useEffect } from "react";
import { sec2time } from "../util";
function HarbTimer() {
  const [timerText, setTimerText] = useState("시작!");
  const [timerStart, setTimerStart] = useState(true);
  const [time, setTime] = useState(1200);
  //   let time = 1200;
  //   let timerCheck = undefined;
  const [timerCheck, setTimerCheck] = useState(undefined);

  useEffect(() => {
    return () => {
      clearTimeout(timerCheck);
    };
  });
  function timeEvent() {
    if (timerStart) {
      setTimerCheck(
        setInterval(() => {
          // time -= 1;
          setTime((prv) => prv - 1);
          // timerView.innerText = sec2time(time);
          if (time === 0) {
            clearTimeout(timerCheck);
            //   time = 0;
            setTime((prv) => 0);
            //   timerStart = !timerStart;
            setTimerStart((prv) => !prv);
            //   timerButton.innerText = "종료!";
            setTimerText("종료");
          }
        }, 1000)
      );
      setTimerStart((prv) => !prv);
      //   timerButton.innerText = "중지!";
      setTimerText("중지");
    } else {
      clearTimeout(timerCheck);
      //   timerButton.innerText = "시작!";
      setTimerText("시작");
      //   time = 1200;
      setTime((prv) => 1200);
      //   timerView.innerText = sec2time(time);
      //   timerStart = !timerStart;
      setTimerStart((prv) => !prv);
    }
  }

  return (
    <div className="timerWrap">
      <div className="timer">{sec2time(time)}</div>
      <div className="timer_button" onClick={timeEvent}>
        {timerText}
      </div>
    </div>
  );
}
export default HarbTimer;
