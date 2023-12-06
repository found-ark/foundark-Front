import BlueInfoDiv from "./blueInfoDiv";

export default function InfoDiv({ list1, list2, action1, action2 }) {
  return (
    <div className="info">
      <div className="blue1">
        {list1 && list1.length !== 0 && (
          <BlueInfoDiv list={list1} action={action1} infoText="안부서지는 위치 추천" />
        )}
      </div>
      <div className="blue2">
        {list2 && list2.length !== 0 && (
          <BlueInfoDiv list={list2} action={action2} infoText="안부서지는 위치 추천" />
        )}
      </div>
    </div>
  );
}
