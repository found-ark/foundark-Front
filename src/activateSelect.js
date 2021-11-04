//select, check박스로 선택시 짝이되는 부분 활성화

export function initSelectActivate(){
    //기본 gakin 선택 가져오기
    let initDefaultGakin = document.querySelectorAll(".gakinWrap .gakin")
    initDefaultGakin.forEach((ele)=>{
        selectActivateEvent(ele,"INPUT")
    })

    //돌 체크박스 활성화
    let dolWrap = document.querySelector(".dol_wrap")
    checkSelectActivate(dolWrap,"SELECT")

    //돌 고정
    let optionDol = document.querySelectorAll(".dol_gakin_wrap .gakin")
    optionDol.forEach((ele)=>{
        selectActivateEvent(ele,"SELECT")
    })

    //각인서 체크박스 활성화
    let checkboxWrap = document.querySelector(".gakinseo_wrap")
    checkSelectActivate(checkboxWrap,"INPUT")

    //각인서 고정
    let optionGakinseo = document.querySelectorAll(".gakinseo_select_wrap .gakin")
    optionGakinseo.forEach((ele)=>{
        selectActivateEvent(ele,"INPUT")
    })

    

    
}

/**
 * 이벤트 지정
 * <div class="wrap">
 *  </div >
 *      <select>
 *  </div >
 *      <target>
 * </>
 * @param {*} wrap 각인선택 집합 노드
 */
export function selectActivateEvent(wrap,target){
    let select = wrap.firstElementChild.firstElementChild//선택하는 부분 select
    let childs = select.parentNode.nextElementSibling.childNodes//선택했을때 활성 비활성할 부분
    select.addEventListener("change",()=>{
        let value = select.options[select.selectedIndex].value
        selectToggle(childs,target,value==="---")
    })
}

/**
 * disableCheck이 true면 disable, 아니면 해제
 * @param {*} targets 선택한게 적용되는 부분
 * @param {*} target 적용되는 태그명
 * @param {boolean} disableCheck 해제 true, false
 */
function selectToggle(targets,target,disableCheck){
    targets.forEach(ele=>{
        if(ele.tagName===target){
            ele.disabled = disableCheck
        }
    })
}

/**
 * <div class="wrap">
 *  <div>
 *      <input checkbox>
 *  </div>
 *  <div>
 *      <div>
 *          <div>
 *              <select>
 *          </div>
 *      </div>
 *      ...
 *   </div>
 * </>
 * @param {체크박스 wrap} wrap 
 */
export function checkSelectActivate(wrap,target){
    let checkDiv = wrap.firstElementChild
    let checkbox = checkDiv.firstElementChild//체크박스 부분
    checkbox.addEventListener("change",()=>{
        let allSelect = checkDiv.nextElementSibling.childNodes//체크해서 활성화 되는 부분
        allSelect.forEach(ele=>{
            if(ele.tagName==="DIV"){
                //체크가 되면, 활성화, 체크가 안되면 비활성화
                let select = ele.firstElementChild.firstElementChild
                let childs = ele.firstElementChild.nextElementSibling.childNodes
                //checkbox가 체크되면 disable해제
                select.disabled = !checkbox.checked
                selectToggle(childs,target,!checkbox.checked)
            }
        })
        
    })
}
