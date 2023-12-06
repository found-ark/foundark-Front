import React, { useEffect } from "react";
import Harbcontent from "./harbcontentR";
import { initHarbImg } from "../imageloader";

function Harbrel() {
  useEffect(() => {
    initHarbImg();
  }, []);

  return (
    <div className="content">
      <Harbcontent />
    </div>
  );
}

export default Harbrel;
