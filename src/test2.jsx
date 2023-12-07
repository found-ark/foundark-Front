import { useEffect, useState } from "react";

function Test2({ test, setTest, setTmp }) {
  const [timeCheck, setTimeCheck] = useState(undefined);
  const [hp, setHp] = useState(3);
  const [time, setTime] = useState(5);

  useEffect(() => {
    setTmp((prv) => (prv["hi"] = bb));
  }, []);

  useEffect(() => {
    if (test === 0) return;
    aa(test);
  }, [test]);

  useEffect(() => {
    if (time === 0) {
      clearInterval(timeCheck);
      setHp(3);
      setTime(5);
      setTest(0);
    }
  }, [time, timeCheck]);

  function aa(tss) {
    if (hp < tss) {
      setTimeCheck(
        setInterval(() => {
          setTime((prv) => prv - 1);
        }, 1000)
      );
    } else {
      setHp((prv) => prv - tss);
      setTest(0);
    }
  }
  function bb() {
    setTime((prv) => prv + 1);
  }

  return (
    <div>
      하이2
      <div>{time}time</div>
      hhhhh
      <div></div>
    </div>
  );
}

export default Test2;
