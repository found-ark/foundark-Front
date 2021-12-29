import {AccElement} from "./accElement";
import {SummaryElement} from "./summaryElement"


export function ResultElement(data) {  
    let resultElement = document.createElement("div");
    resultElement.classList.add("result_element")

    resultElement.appendChild(SummaryElement(data))
    let whiteList = [1,0,0,1,1,0,0,1]
    Object.keys(data).forEach((ele,i)=>{
        if(data[ele]["name"]!==undefined){
            let accEle = AccElement(data[ele])
            if(whiteList[i]===1){
                accEle.classList.add("white")
            }
            resultElement.appendChild(accEle)
        }
    })

    //요약
    
    return resultElement

}
  