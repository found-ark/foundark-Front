import {buffImage} from "../util"
const baseEngrave = [
"각성",
"강령술",
"강화 방패",
"결투의 대가",
"구슬동자",
"굳은 의지",
"급소 타격",
"기습의 대가",
"긴급구조",
"달인의 저력",
"돌격대장",
"마나 효율 증가",
"마나의 흐름",
"바리케이드",
"번개의 분노",
"부러진 뼈",
"분쇄의 주먹",
"불굴",
"선수필승",
"속전속결",
"슈퍼 차지",
"승부사",
"시선 집중",
"실드 관통",
"아드레날린",
"안정된 상태",
"약자 무시",
"에테르 포식자",
"여신의 가호",
"예리한 둔기",
"원한",
"위기 모면",
"저주받은 인형",
"전문의",
"정기 흡수",
"정밀 단도",
"중갑 착용",
"질량 증가",
"최대 마나 증가",
"추진력",
"타격의 대가",
"탈출의 명수",
"폭발물 전문가",
]
const classEngrave = {
    "버서커":["광기","광전사의 비기"],
    "디스트로이어":["분노의 망치","중력 수련"],
    "워로드":["고독한 기사","전투 태세"],
    "홀리나이트":["심판자","축복의 오라"],
    "아르카나":["황제의 칙령","황후의 은총"],
    "서머너":["넘치는 교감","상급 소환사"],
    "바드":["절실한 구원","진실된 용맹"],
    "소서리스":["점화","환류"],
    "배틀마스터":["오의 강화","초심"],
    "인파이터":["극의: 체술","충격 단련"],
    "기공사":["세맥타통","역천지체"],
    "창술사":["절정","절제"],
    "스트라이커":["오의난무","일격필살"],
    "블레이드":["버스트","잔재된 기운"],
    "데모닉":["멈출 수 없는 충동","완벽한 억제"],
    "리퍼":["갈증","달의 소리"],
    "호크아이":["두 번째 동료","죽음의 습격"],
    "데빌헌터":["강화 무기","핸드거너"],
    "블래스터":["포격 강화","화력 강화"],
    "스카우터":["아르데타인의 기술","진화의 유산"],
    "건슬링어":["사냥의 시간","피스메이커"]
}

//더하기 버튼 작동
export function addEngButton(){
    let button = document.querySelector(".add_engrave_button")
    button.addEventListener("click",()=>{
        engModalToggle()
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
       
        // console.log(e.target.tagName)
        // console.log(e.target)
        // console.log(e.target.className)
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
            console.log(tmp)
            if(tmp!==1){
                valueNode.innerHTML = tmp-1
            }
            console.log("내려!")
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
            console.log(tmp)
            if(tmp!==3){
                valueNode.innerHTML = tmp+1
            }
            console.log("올려!")
        }
        //점수클릭
        else if(className==="value"){
            console.log("점수확인!")
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
 * 
 * 기본
 * +버튼
 * 모달 열리기
 * 모달 각인 선택
 * 리스트에 추가
 * 
 * 수정
 * 리스트 클릭
 * 모달 열리기
 * 모달 각인 선택
 * 해당 리스트 수정
 * 
 * - 다른점
 * 수정에서 다른점
 * 클릭한 각인div의 정보가 필요
 * 모달 클릭시 추가가 아닌 클릭한 각인 정보를 사용하여 수정
 * 
 */