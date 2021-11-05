import { gakSelectElement } from "./gakSelectElement"

/**
 * 각인선택 추가 이벤트
 * 
 */
export function addGakSelect(addbutton){
    addbutton.addEventListener("click",()=>{
        //어디에 넣을지
        addbutton.parentNode.insertAdjacentElement("beforebegin",gakSelectElement())//add버튼 바로 앞
    })
}

/**
 * 각인선택 제거 이벤트
 */
 export function delGakSelect(minbutton,delElement){
    minbutton.addEventListener("click",()=>{
        delElement.parentNode.removeChild(delElement)
    })
}

