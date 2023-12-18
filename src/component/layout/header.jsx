import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import harbTitle from "../../assets/title2.svg"
import ellaTitle from "../../assets/ellatitle.svg"
import choTitle from "../../assets/chotitle.svg"

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [src,setSrc]= useState("");

  useEffect(()=>{
    if(currentPath==="/harbrel"){
      setSrc(harbTitle);
    }else if(currentPath==="/ella"){
      setSrc(ellaTitle);
    }else if(currentPath==="/cho"){
      setSrc(choTitle);
    }
  },[currentPath])

  return <div className="header">
    <img src={src} alt={currentPath}/>
  </div>;
}

export default Header;
