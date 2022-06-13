import InArea from "./inArea"
import OutArea from "./outArea"
import {Str2sepHan,drawElla } from "../../ellaTrans"

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
            drawElla(Str2sepHan(textArea.value),canvas)
        }, 1000);
    })


    div.appendChild(inputDiv)    
    div.appendChild(outputDiv)  
    return [div,inputDiv,outputDiv,textArea,canvas]
}