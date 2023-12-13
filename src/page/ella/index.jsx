import React, { useEffect } from "react";
import { initEllaImg } from "../imageloader";
import EllaContent from "./ellaContentR";

function Ella() {
  useEffect(() => {
    initEllaImg();
  }, []);

  return (
    <div className="content">
      <EllaContent/>
    </div>
  );
}

export default Ella;
