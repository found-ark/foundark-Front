import React, { useEffect } from "react";
import { initEllaImg } from "../imageloader";
import EllaContent from "./ellaContent";
import { useDispatch } from "react-redux";
import { clear } from "../../reducer/ella";

function Ella() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    initEllaImg();
    
    return ()=>{
      dispatch(clear());
    }
  }, []);

  return (
    <div className="content">
      <EllaContent/>
    </div>
  );
}

export default Ella;
