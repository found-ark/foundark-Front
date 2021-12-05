{/* <option>---</option>
<option>광기</option>
<option>광전사의 비기</option>
<option>각성</option>
<option>강령술</option>
<option>강화 방패</option>
<option>결투의 대가</option>
<option>구슬동자</option>
<option>굳은 의지</option>
<option>급소 타격</option>
<option>기습의 대가</option>
<option>긴급구조</option>
<option>달인의 저력</option>
<option>돌격대장</option>
<option>마나 효율 증가</option>
<option>마나의 흐름</option>
<option>바리케이드</option>
<option>번개의 분노</option>
<option>부러진 뼈</option>
<option>분쇄의 주먹</option>
<option>불굴</option>
<option>선수필승</option>
<option>속전속결</option>
<option>슈퍼 차지</option>
<option>승부사</option>
<option>시선 집중</option>
<option>실드 관통</option>
<option>아드레날린</option>
<option>안정된 상태</option>
<option>약자 무시</option>
<option>에테르 포식자</option>
<option>여신의 가호</option>
<option>예리한 둔기</option>
<option>원한</option>
<option>위기 모면</option>
<option>저주받은 인형</option>
<option>전문의</option>
<option>정기 흡수</option>
<option>정밀 단도</option>
<option>중갑 착용</option>
<option>질량 증가</option>
<option>최대 마나 증가</option>
<option>추진력</option>
<option>타격의 대가</option>
<option>탈출의 명수</option>
<option>폭발물 전문가</option> */}

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

//더하기 버튼 

//모달 내용 입력
export function mkEngModal(Data){
    let modal = document.querySelector("#engrave_modal .modal_window .modal_content")

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
    setClassEngrave(Data)
    
    //기본 각인
    baseEngrave.forEach(ele=>{
        baseWrap.appendChild(mkEngContent(ele))
    })
}

/**
 * 직업각인 작성
 */
function setClassEngrave(Data){
    let wrap = document.querySelector("#engrave_modal .class_engrave")
    wrap.innerHTML=``

    classEngrave[Data.getJob()].forEach(ele=>{
        wrap.appendChild(mkEngContent(ele))
    })
}

//모달 닫기
function engModalToggle(){
    let modal = document.querySelector("#engrave_modal")
    modal.classList.toggle("modal_close")
}

//각인 
function mkEngContent(engraveName){
    let content = document.createElement("div")
    content.className="engrave"

    content.innerHTML = `
    <div class="engrave_img">
        <img src = "${buffImage[engraveName]}">
    </div>
    <span> ${engraveName} </span>`

    //해당 각인 클릭시
    //모달 닫기
    content.addEventListener('click',()=>{
        engModalToggle()//모달 닫기
    })
    return content
}