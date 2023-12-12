import BlueInfoDiv from "./blueInfoDiv";

export default function InfoDiv({ brokenList, noBrokenList }) {

  return (
    <div className="info">
      <div className="blue1">
        {noBrokenList && noBrokenList.length !== 0 && (
          <BlueInfoDiv list={noBrokenList} infoText="안부서지는 위치 추천 " />
        )}
      </div>
      <div className="blue2">
        {brokenList && brokenList.length !== 0 && (
          <BlueInfoDiv list={brokenList} infoText="하나 버리는 위치 추천 " />
        )}
      </div>
    </div>
  );
}
