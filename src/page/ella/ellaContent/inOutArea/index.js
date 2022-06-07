import InArea from "./inArea"
import OutArea from "./outArea"

export default function InOutArea(){
    let div = document.createElement("div")
    div.className="inOutWrap"
    
    div.appendChild(InArea())    
    div.appendChild(OutArea())  

    return div
}