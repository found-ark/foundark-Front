import React, { useEffect } from "react";
import Harbcontent from "./harbcontent";
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
