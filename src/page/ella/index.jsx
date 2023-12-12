import React, { useEffect } from "react";
import { initEllaImg } from "../imageloader";

function Ella() {
  useEffect(() => {
    initEllaImg();
  }, []);

  return (
    <div className="content">
      <div> 준비중 </div>
    </div>
  );
}

export default Ella;
