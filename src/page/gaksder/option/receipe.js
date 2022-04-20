import {buffImage,baseEngrave,classEngrave} from "../util"

//각인서 수정
function receipeData(){
    this.eng = null

    this.setEng = (eng)=>{
        this.eng = eng
    }
    this.getEng = ()=>{
        return this.eng
    }
}

//돌 고정 체크
export function receipeCheck(jobData){
    let checkbox  = document.querySelector(".receipe_checkbox")
    let Data = new receipeData()

    checkbox.addEventListener("change",()=>{
        show(checkbox.checked)
    })

    //각인 리스트에 이벤트 활성화
    receipeEng(Data,jobData)

    //직업 변경시 모달 수정
    jobData.subJob(()=>{mkClassEngrave(Data,jobData)})
    jobData.subJob(()=>{reset()})//선택된 각인 초기화
}
function reset(){
    let engraveList = document.querySelectorAll(".receipe_wrap .engrave")
    modifyEngrave(engraveList[0],"원한")
    modifyEngrave(engraveList[1],"각성")
}

//숨기고 보이기
function show(check){
    let box  = document.querySelector(".receipe_list")
    if(check){
        box.style.transition = "1000ms"
        box.style.transform = "translate(0px, -80px)"
    }else{
        box.style.transition = "1000ms"
        box.style.transform = "translate(0px, 0px)"
    }
}

//각인서 각인 클릭 이벤트
function receipeEng(Data,jobData){
    let engs = document.querySelectorAll(".receipe_engrave_wrap .engrave")
    
    //모달 내용 채우기
    mkEngraveModal(Data,jobData)

    engs.forEach((ele,i)=>{

        ele.addEventListener("click",(e)=>{

            let targetNode = e.target
            
            //점수 수정부분

            //점수 더하기
            if(targetNode.classList.contains("down")|| (targetNode.tagName==="IMG" && targetNode.parentNode.classList.contains("down"))){
                let valueNode = null
                if(targetNode.classList.contains("down")){
                    valueNode = e.target.nextElementSibling
                }else{
                    valueNode = e.target.parentNode.nextElementSibling
                }
                
                let tmp = Number(valueNode.innerHTML)
                if(tmp!==3){
                    valueNode.innerHTML = tmp-3
                }
            }
            //더하기일경우
            else if(targetNode.classList.contains("up")|| (targetNode.tagName==="IMG" && targetNode.parentNode.classList.contains("up"))){
                let valueNode = null
                if(targetNode.classList.contains("up")){
                    valueNode = e.target.previousElementSibling
                }else{
                    valueNode = e.target.parentNode.previousElementSibling
                }
                
                let tmp = Number(valueNode.innerHTML)
                if(tmp!==12){
                    valueNode.innerHTML = tmp+3
                }
            }else{
                //각인 수정부분
                Data.setEng(ele)
                //모달 오픈
                modalToggle("#receipe_modal")
            }
        })
    })
}

function mkClassEngrave(Data,jobData){
    let classWrap = document.querySelector("#receipe_modal .class_engrave")
    classWrap.innerHTML=``;
    classEngrave[jobData.getJob()].forEach(ele=>{
        classWrap.appendChild(mkEngrave(Data,ele,"#receipe_modal"))
    })
}
//돌 모달 생성
function mkEngraveModal(Data,jobData){
    let modalEng = document.querySelector("#receipe_modal .modal_content")

    let classWrap = document.createElement("div")
    classWrap.classList.add("class_engrave","engrave_wrap")
    
    let baseWrap = document.createElement("div")
    baseWrap.classList.add("base_engrave","engrave_wrap")

    //초기화
    modalEng.innerHTML = ``
    
    modalEng.appendChild(classWrap)
    modalEng.appendChild(baseWrap)

    //직업
    mkClassEngrave(Data,jobData)
    //기본
    baseEngrave.forEach(ele=>{
        baseWrap.appendChild(mkEngrave(Data,ele,"#receipe_modal"))
    })
    //닫기 활성화
    let close = document.querySelector("#receipe_modal .close")
    close.addEventListener("click",()=>{
        modalToggle("#receipe_modal")
    })
}


//모달 열기닫기
function modalToggle(modalId){
    let rootmodal = document.querySelector(modalId)
    rootmodal.classList.toggle("modal_close")
}

//모달 내의 각인 노드 만들기
function mkEngrave(Data,engraveName,modalId){
    let engrave = document.createElement("DIV")
    engrave.className = "engrave"
    engrave.innerHTML = `
    <div class="engrave_img">
        <img src = "${buffImage[engraveName]}">
    </div>
    <span>${engraveName}</span>
    `
    engrave.addEventListener("click",()=>{
        modalToggle(modalId)
        //선택된 각인 노드 가져오기
        let selectedEng = Data.getEng()
        //수정
        modifyEngrave(selectedEng,engraveName)
    })
    return engrave
}

//각인 수정
function modifyEngrave(engrave,engraveName){
    //img수정
    let child = engrave.firstElementChild
    child.firstElementChild.src = buffImage[engraveName]
    //이름 수정
    child = child.nextElementSibling
    child.textContent = engraveName
    //value초기화
    child = child.nextElementSibling
    child.firstElementChild.nextElementSibling.textContent = 9
}