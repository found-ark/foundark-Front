import { classSelectValue } from "./classSelect"
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

/**
 * 
 * @param {*} className 노드 클래스 명
 * @returns 
 */
export function selectElement(className,disable=false){
    let selectClass = classSelectValue()//선택창에서 어떤 직업을 선택했는지 확인
    return `<select name="" id="" class="${className}" ${disable?"disabled":""}>
            <option>---</option>
            <option>${classEngrave[selectClass][0]}</option>
            <option>${classEngrave[selectClass][1]}</option>
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
            <option>폭발물 전문가</option>
        </select>`
}

{/* <select name="" id="" class="${className}">
            <option>---</option>
            <option>각성</option>
            <option>갈증</option>
            <option>강령술</option>
            <option>강화 무기</option>
            <option>강화 방패</option>
            <option>결투의 대가</option>
            <option>고독한 기사</option>
            <option>광기</option>
            <option>광전사의 비기</option>
            <option>구슬동자</option>
            <option>굳은 의지</option>
            <option>극의: 체술</option>
            <option>급소 타격</option>
            <option>기습의 대가</option>
            <option>긴급구조</option>
            <option>넘치는 교감</option>
            <option>달의 소리</option>
            <option>달인의 저력</option>
            <option>돌격대장</option>
            <option>두 번째 동료</option>
            <option>마나 효율 증가</option>
            <option>마나의 흐름</option>
            <option>멈출 수 없는 충동</option>
            <option>바리케이드</option>
            <option>버스트</option>
            <option>번개의 분노</option>
            <option>부러진 뼈</option>
            <option>분노의 망치</option>
            <option>분쇄의 주먹</option>
            <option>불굴</option>
            <option>사냥의 시간</option>
            <option>상급 소환사</option>
            <option>선수필승</option>
            <option>세맥타통</option>
            <option>속전속결</option>
            <option>슈퍼 차지</option>
            <option>승부사</option>
            <option>시선 집중</option>
            <option>실드 관통</option>
            <option>심판자</option>
            <option>아드레날린</option>
            <option>아르데타인의 기술</option>
            <option>안정된 상태</option>
            <option>약자 무시</option>
            <option>에테르 포식자</option>
            <option>여신의 가호</option>
            <option>역천지체</option>
            <option>연속 포격</option>
            <option>예리한 둔기</option>
            <option>오의 강화</option>
            <option>오의난무</option>
            <option>완벽한 억제</option>
            <option>원한</option>
            <option>위기 모면</option>
            <option>일격필살</option>
            <option>잔재된 기운</option>
            <option>저주받은 인형</option>
            <option>전문의</option>
            <option>전투 태세</option>
            <option>절실한 구원</option>
            <option>절정</option>
            <option>절제</option>
            <option>점화</option>
            <option>정기 흡수</option>
            <option>정밀 단도</option>
            <option>죽음의 습격</option>
            <option>중갑 착용</option>
            <option>중력 수련</option>
            <option>진실된 용맹</option>
            <option>진화의 유산</option>
            <option>질량 증가</option>
            <option>초심</option>
            <option>최대 마나 증가</option>
            <option>추진력</option>
            <option>축복의 오라</option>
            <option>충격 단련</option>
            <option>타격의 대가</option>
            <option>탈출의 명수</option>
            <option>폭발물 전문가</option>
            <option>피스메이커</option>
            <option>핸드거너</option>
            <option>화력 강화</option>
            <option>환류</option>
            <option>황제의 칙령</option>
            <option>황후의 은총</option>
        </select> */}