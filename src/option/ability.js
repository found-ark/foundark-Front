import {buffImage,baseEngrave,penalty} from "../util"

//돌 선택


//돌 고정으로 클릭 고정
function abilData(){
    this.check= false
    this.eng = null
    this.setCheck = (check)=>{
        this.check = check
    }
    this.getCheck = ()=>{
        return this.check
    }

    this.setEng = (eng)=>{
        this.eng = eng
    }
    this.getEng = ()=>{
        return this.eng
    }
}

//돌 고정 체크
export function abilCheck(){
    let checkbox  = document.querySelector(".abil_option_check")
    let Data = new abilData()

    checkbox.addEventListener("change",()=>{
        console.log(checkbox.checked)
    })

    //각인 리스트에 이벤트 활성화
    abilEng(Data)
}

//돌 각인 클릭 이벤트
function abilEng(Data){
    let engs = document.querySelectorAll(".abil_engrave_wrap .engrave")
    
    //모달 내용 채우기
    mkEngraveModal(Data)

    engs.forEach((ele,i)=>{

        ele.addEventListener("click",(e)=>{

            let className = e.target.className
            
            //점수 수정부분

            //점수 더하기
            if(className === "down" || (e.target.tagName==="IMG" && e.target.parentNode.className ==="down")){
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
                if(tmp!==10){
                    valueNode.innerHTML = tmp+1
                }
            }else{
                //각인 수정부분
                Data.setEng(ele)
                //모달 오픈
                if(i==2){//페널티
                    modalToggle("#abil_modal2")
                }else{
                    modalToggle("#abil_modal1")
                }
            }
        })
    })
}

//돌 모달 생성
function mkEngraveModal(Data){
    let modalEng = document.querySelector("#abil_modal1 .modal_content")
    let modalPen = document.querySelector("#abil_modal2 .modal_content")
    baseEngrave.forEach(ele=>{
        modalEng.appendChild(mkEngrave(Data,ele,"#abil_modal1"))
    })
    penalty.forEach(ele=>{
        modalPen.appendChild(mkEngrave(Data,ele,"#abil_modal2"))
    })

    //닫기 활성화
    let closeEng = document.querySelector("#abil_modal1 .close")
    closeEng.addEventListener("click",()=>{
        modalToggle("#abil_modal1")
    })
    let closePen = document.querySelector("#abil_modal2 .close")
    closePen.addEventListener("click",()=>{
        modalToggle("#abil_modal2")
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
    child.firstElementChild.nextElementSibling.textContent = 5
}