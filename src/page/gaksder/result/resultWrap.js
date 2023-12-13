import {ResultElement} from "./resultElement"
import { ResultHead } from "./resultHead"

export function ResultWrap(wrap,data) {  
    if(data.error || data.length===0){
        alert("결과가 없습니다.")
    }else{
        wrap.appendChild(ResultHead())//결과 헤드 부분
        data.forEach((ele)=>{
            wrap.appendChild(ResultElement(ele))
        })
    }   
}
  