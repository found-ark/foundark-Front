import {AkElement} from "./akElement";
import {SummaryElement} from "./summaryElement"


export function ResultElement(data) {  
    let resultElement = document.createElement("div");
    resultElement.classList.add("result_element")
    
    let resultAkList = `<div class="result_acc_list">`
    //악세서리 정보
    // console.log(data["neck"])
    Object.keys(data).forEach((ele)=>{
        // if(data[ele]["name"])
        if(data[ele]["name"]!==undefined){
            resultAkList+=AkElement(data[ele])
        }
    })
    resultAkList+="</div>"

    //요약
    
    resultElement.innerHTML = `
        ${resultAkList}
        ${SummaryElement(data)}
    `
    return resultElement

}
  