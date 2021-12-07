import {buffImage,baseEngrave,classEngrave} from "../util"


//더하기 버튼 작동
export function addEngButton(){
    let button = document.querySelector(".add_engrave_button")
    button.addEventListener("click",()=>{
        if(engCheck(7)){//최대 7개까지
            engModalToggle()
        }
    })
}

//모달 내용 입력
export function mkEngModal(Data){
    let modal = document.querySelector("#engrave_modal .modal_window .modal_content")

    let modifyCheck = new ModifyCheck();
    //직업 각인 모음
    let classWrap = document.createElement("div")
    classWrap.classList.add("class_engrave","engrave_wrap")

    //기본 각인 모음
    let baseWrap = document.createElement("div")
    baseWrap.classList.add("base_engrave","engrave_wrap")

    //닫기 활성화
    let close = document.querySelector("#engrave_modal .close")
    close.addEventListener("click",()=>{
        engModalToggle()
    })
    
    modal.appendChild(classWrap)
    modal.appendChild(baseWrap)

    //직업 각인
    setClassEngrave(modifyCheck,Data)
    
    //기본 각인
    baseEngrave.forEach(ele=>{
        baseWrap.appendChild(mkEngContent(modifyCheck,ele))
    })

    //직업각인 관련 구독
    //직업 변경이 있을때 수정됨
    Data.subJob(()=>{setClassEngrave(modifyCheck,Data)})
    Data.subJob(()=>{resetEngrave()})
}

/**
 * 직업각인 작성
 */
function setClassEngrave(modifyCheck,Data){
    let wrap = document.querySelector("#engrave_modal .class_engrave")
    wrap.innerHTML=``

    classEngrave[Data.getJob()].forEach(ele=>{
        wrap.appendChild(mkEngContent(modifyCheck,ele))
    })
}

//모달 닫기
function engModalToggle(){
    let modal = document.querySelector("#engrave_modal")
    modal.classList.toggle("modal_close")
}

//각인 
function mkEngContent(modifyCheck,engraveName,isList =false){
    let content = document.createElement("div")
    content.className="engrave"

    content.innerHTML = `
    ${isList?`<div class="engrave_del">
    제거
</div>`:""}
    <div class="engrave_img">
        <img src = "${buffImage[engraveName]}">
    </div>
    <span> ${engraveName} </span>
    ${isList?`<div class="engrave_point">
    <div class="down"><img src = "../../static/minus.png"></div>
    <div class="value">3</div>
    <div class="up"><img src = "../../static/plus.png"></div>
</div>`:""}
    `

    //해당 각인 클릭시
    //모달 닫기
    content.addEventListener('click',(e)=>{
       
        let className = e.target.className
        //제거일경우
        if(className==="engrave_del"){
            let parent = content.parentNode
            parent.removeChild(content)
        }
        //빼기일경우
        else if(className === "down" || (e.target.tagName==="IMG" && e.target.parentNode.className ==="down")){
            let valueNode = null
            if(className==="down"){
                valueNode = e.target.nextElementSibling
            }else{
                valueNode = e.target.parentNode.nextElementSibling
            }
            
            let tmp = Number(valueNode.innerHTML)
            if(tmp!==1){
                valueNode.innerHTML = tmp-1
            }
        }
        //더하기일경우
        else if(className === "up" || (e.target.tagName==="IMG" && e.target.parentNode.className ==="up")){
            let valueNode = null
            if(className==="up"){
                valueNode = e.target.previousElementSibling
            }else{
                valueNode = e.target.parentNode.previousElementSibling
            }
            
            let tmp = Number(valueNode.innerHTML)
            if(tmp!==3){
                valueNode.innerHTML = tmp+1
            }
        }
        //그외
        else{
            engModalToggle()//모달 닫기
            if(isList){//리스트일경우
                modifyCheck.setContent(content)
            }else{
                if(modifyCheck.isCheck()){
                    let modifyContent = modifyCheck.getContent()
                    modifyEng(modifyContent,engraveName)
                }else{
                    addEng(modifyCheck,engraveName)
                }
            }
        }        
    })
    return content
}

function ModifyCheck(){
    this.content = ""
    this.check = false
    this.setContent = (data)=>{
        this.content = data
        this.check = true
    }
    this.isCheck = ()=>{
        return this.check
    }
    this.getContent = ()=>{
        this.check = false
        return this.content
    }
}


/**
 * 수정 각인
 * @param {*} content 해당 각인
 * @param {*} engraveName 바꿀 각인 이름
 */
function modifyEng(content,engraveName){
    content.innerHTML = 
    `<div class="engrave_del">제거</div>
        <div class="engrave_img">
            <img src = "${buffImage[engraveName]}">
        </div>
        <span> ${engraveName} </span>
        <div class="engrave_point">
        <div class="down"><img src = "../../static/minus.png"></div>
        <div class="value">3</div>
        <div class="up"><img src = "../../static/plus.png"></div>
    </div>`
}
/**
 * 각인 리스트에 각인 추가
 */
function addEng(modifyCheck,engrave){
    let list = document.querySelector(".engrave_list")
    list.appendChild(mkEngContent(modifyCheck,engrave,true))
}

/**
 * 각인 선택한거 리셋
 */
function resetEngrave(){
    let list = document.querySelector(".engrave_list")
    list.innerHTML=``;
}

/**
 * 각인 최대 7개 까지만
 */
function engCheck(max){
    let check = document.querySelector(".engrave_list")

    let checkLength = Array.from(check.childNodes).filter(ele=>ele.tagName==="DIV")
    if(checkLength.length===max){
        return false
    }
    return true
}