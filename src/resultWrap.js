import {ResultElement} from "./resultElement"


export function ResultWrap(wrap,data) {  
    data.forEach((ele)=>{
        wrap.appendChild(ResultElement(ele))
    })
}
  