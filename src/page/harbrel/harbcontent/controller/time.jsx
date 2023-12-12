import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { sec2time } from "../../util";
import { setTotaltime, setTimer } from "../../../../reducer/harbrel";

export default function TimeDiv() {
  //다음 파메 시간
  
  const time = useSelector((state) => state.harbrel.totalTime);
  const timer = useSelector((state) => state.harbrel.timer);
  const flag = useSelector((state) => state.harbrel.totalTimeFlag);

  const dispatch = useDispatch();

  //필요한 엑션들
  useEffect(() => {
    if(flag){
      dispatch(setTimer({timer: setInterval(() => {
          dispatch(setTotaltime({plusTime:-1}));
        }, 1000)
      }));
    }else{
      clearInterval(timer);
    }
    
    return () => {
      clearInterval(timer);
    };
  }, [flag]);

  useEffect(() => {
    if (time === 0) {
      dispatch(setTotaltime({plusTime:0}));
    }
  }, [time]);


  return (
    <div className="timeWrap">
      <div className="timeText">다음 파메 시간은 : </div>
      <div className="timer">{sec2time(time)}</div>
    </div>
  );
}
