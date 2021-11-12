import { selectElement } from "./selectElement"
/**
 * 직업 선택 이벤트 함수
 * 선택시 현재 select들을 전부 수정
 */
export function classSelectEvent(){
    let classSelectForm = document.querySelector(".job .select_form select")
    classSelectForm.addEventListener("change",()=>{
        //바꿀 select 확인
        //gakinWrap select_form "mainSelect"
        //gakinseo_select_wrap select_form "optionGakGakin"

        let mainSelect = document.querySelectorAll(".gakinWrap .select_form")

        mainSelect.forEach(ele=>{
            ele.innerHTML = selectElement("mainSelect")
        })



        let optionSelect  = document.querySelectorAll(".gakinseo_wrap .select_form")
        //체크박스 비활성화
        let optionCheck  = document.querySelector(".gakinseo_wrap .gakinseo_check input")
        optionCheck.checked = false
        //선택창 재설정
        optionSelect.forEach(ele=>{
            ele.innerHTML = selectElement("optionGakGakin",true)
        })
        //수정
        
    })
    
}
/**
 * 어떤 직업이 선택되었는지 확인
 * @returns 선택한 직업
 */
export function classSelectValue(){
    let classSelectForm = document.querySelector(".job .select_form select")
    return classSelectForm.options[classSelectForm.selectedIndex].value
}