import ConvertButton from "./convertButton"
import InArea from "./inArea"
import OutArea from "./outArea"

export default function InOutArea(){
    let div = document.createElement("div")
    
    div.appendChild(InArea())    
    div.appendChild(ConvertButton())  
    div.appendChild(OutArea())  

    return div
}