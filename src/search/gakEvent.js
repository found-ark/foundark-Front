import { gakSelectElement } from "./gakSelectElement"

/**
 * 각인선택 추가 이벤트
 * 
 */
export function addGakSelect(addbutton){
    addbutton.addEventListener("click",()=>{
        //한계 
        //최대7개까지 만들수있다.
        let allList = Array.from(addbutton.parentNode.parentNode.childNodes)
        let count = allList.reduce((acc,ele)=>{
            if(ele.tagName==="DIV" && ele.classList.contains("gakin")){
                return acc+1
            }
            return acc
        },0)
        console.log(count)
        if(count<7){//7가 최대
            addbutton.parentNode.insertAdjacentElement("beforebegin",gakSelectElement())//add버튼 바로 앞
        }
       
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

