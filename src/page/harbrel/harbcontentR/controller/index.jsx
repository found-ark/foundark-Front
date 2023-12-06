import Control from "./control.jsx";
import InfoDiv from "./info.jsx";

import TimeDiv from "./time.jsx";

export default function HarbController() {
  return (
    <div className="harbContent">
      <TimeDiv />
      <InfoDiv />
      <div className="harbControler">
        <Control list={[["yellow_meteo", "노랑 메테오 콰광"]]} />
        <Control
          list={[
            ["blue_meteo", "파랑 메테오 위치 확인"],
            ["blue_meteo_reset", "파랑 메테오 시간 재조정"],
          ]}
        />
        <Control list={[["praise", "찬미하라"]]} />
        <Control list={[["dream", "몽환을 지켜라"]]} />
      </div>
    </div>
  );
}
