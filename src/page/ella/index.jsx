import React, { useEffect } from "react";
import EllaContent from "./ellaContent";
import { useDispatch } from "react-redux";
import { clear } from "../../reducer/ella";

function Ella() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {    
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
