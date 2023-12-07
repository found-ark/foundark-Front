import { useEffect, useState } from "react";
import BlueInfoDiv from "./blueInfoDiv";

export default function InfoDiv({ setInfoBox }) {
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [action1, setAction1] = useState(undefined);
  const [action2, setAction2] = useState(undefined);

  //위로 올리기

  useEffect(() => {
    setInfoBox((prv) => {
      return {
        ...prv,
        blueWrite1: (list, action = undefined) => {
          setList1(list);
          setAction1(action);
        },
        blueWrite2: (list, action = undefined) => {
          setList2(list);
          setAction2(action);
        },
      };
    });
  }, []);

  return (
    <div className="info">
      <div className="blue1">
        {list1 && list1.length !== 0 && (
          <BlueInfoDiv list={list1} action={action1} infoText="안부서지는 위치 추천 " />
        )}
      </div>
      <div className="blue2">
        {list2 && list2.length !== 0 && (
          <BlueInfoDiv list={list2} action={action2} infoText="하나 버리는 위치 추천 " />
        )}
      </div>
    </div>
  );
}
