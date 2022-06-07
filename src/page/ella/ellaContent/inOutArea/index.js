import InArea from "./inArea"
import OutArea from "./outArea"
import { ellaTrans } from "../../ellaTrans"

export default function InOutArea(){
    let div = document.createElement("div")
    div.className="inOutWrap"
    let [outputDiv,canvas]  = OutArea()
    let [inputDiv,textArea]  = InArea()


    let timer = null
    textArea.addEventListener("input",()=>{

        if(timer!==null){
            clearTimeout(timer)
        }
        timer = setTimeout(function(){
            //Do your magic here 
            ellaTrans(textArea.value,canvas)
        }, 1000);
    })


    div.appendChild(inputDiv)    
    div.appendChild(outputDiv)  
    return div
}