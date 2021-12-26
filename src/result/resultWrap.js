import {ResultElement} from "./resultElement"


export function ResultWrap(wrap,data) {  
    if(data.error || data.length===0){
        alert("결과가 없습니다.")
    }else{
        data.forEach((ele)=>{
            wrap.appendChild(ResultElement(ele))
        })
    }   
}
  