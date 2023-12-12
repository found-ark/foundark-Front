import Control from "./control.jsx";
import InfoDiv from "./info.jsx";

import TimeDiv from "./time.jsx";

export default function HarbController({
  yellowButtonAction,
  blueButtonAction,
  blueResetButtonAction,
  praiseButtonAction,
  dreamButtonAction,
  brokenList,
  noBrokenList
}) {
  return (
    <div className="harbContent">
      <TimeDiv />
      <InfoDiv brokenList={brokenList} noBrokenList={noBrokenList} />
      <div className="harbControler">
        <Control list={[["yellow_meteo", "노랑 메테오 콰광", yellowButtonAction]]} />
        <Control
          list={[
            ["blue_meteo", "파랑 메테오 위치 확인", blueButtonAction],
            ["blue_meteo_reset", "파랑 메테오 시간 재조정", blueResetButtonAction],
          ]}
        />
        <Control list={[["praise", "찬미하라", praiseButtonAction]]} />
        <Control list={[["dream", "몽환을 지켜라", dreamButtonAction]]} />
      </div>
    </div>
  );
}
