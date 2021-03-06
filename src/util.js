const checkCateEn = {
    //전설
    //비틀린, 빛나는, 강렬한, 
    //추락한

    //유물
    //타락한, 찬란한, 타오르는, 타락한, 
    //울부짖는

    //고대
    //공허한, 거룩한, 솟구치는
    //참혹한
    "비틀린":"regend",
    "빛나는":"regend",
    "강렬한":"regend",
    "추락한":"regend",

    "타락한":"antiq",
    "찬란한":"antiq",
    "타오르는":"antiq",
    "타락한":"antiq",
    "울부짖는":"antiq",

    "공허한":"ancient",
    "거룩한":"ancient",
    "솟구치는":"ancient",
    "참혹한":"ancient"
}

const checkCateDol = {
    "뛰어난":"hero",
    "강력한":"regend",
    "고고한":"antiq",
}

export const Abbreviation = {
    "특화":"특",
    "치명":"치",
    "제압":"제",
    "인내":"인",
    "숙련":"숙",
    "공격속도 감소":"공속",
    "이동속도 감소":"이속",
    "공격력 감소":"공감",
    "방어력 감소":"방감",
    "각성":"각성",
    "갈증":"갈증",
    "강령술":"강렬술",
    "강화 무기":"강무",
    "강화 방패":"강방",
    "결투의 대가":"결대",
    "고독한 기사":"고기",
    "광기":"광기",
    "광전사의 비기":"광비",
    "구슬동자":"구동",
    "굳은 의지":"굳의",
    "극의: 체술":"체술",
    "급소 타격":"급타",
    "기습의 대가":"기습",
    "긴급구조":"긴급",
    "넘치는 교감":"교감",
    "달의 소리":"달소",
    "달인의 저력":"달저",
    "돌격대장":"돌대",
    "두 번째 동료":"두동",
    "마나 효율 증가":"마효",
    "마나의 흐름":"마흐",
    "멈출 수 없는 충동":"충동",
    "바리케이드":"바리",
    "버스트":"버스트",
    "번개의 분노":"번분",
    "부러진 뼈":"부뼈",
    "분노의 망치":"분망",
    "분쇄의 주먹":"분쇄",
    "불굴":"불굴",
    "사냥의 시간":"사시",
    "상급 소환사":"상급",
    "선수필승":"선필",
    "세맥타통":"세멕",
    "속전속결":"속속",
    "슈퍼 차지":"슈차",
    "승부사":"승부사",
    "시선 집중":"시선",
    "실드 관통":"실드",
    "심판자":"심판자",
    "아드레날린":"아드",
    "아르데타인의 기술":"기술",
    "안정된 상태":"안상",
    "약자 무시":"약무",
    "에테르 포식자":"에포",
    "여신의 가호":"여가",
    "역천지체":"역천",
    "연속 포격":"포격",
    "예리한 둔기":"예둔",
    "오의 강화":"오의(배)",
    "오의난무":"오의(스)",
    "완벽한 억제":"역제",
    "원한":"원한",
    "위기 모면":"위기",
    "일격필살":"일격",
    "잔재된 기운":"잔재",
    "저주받은 인형":"저받",
    "전문의":"전문의",
    "전투 태세":"전태",
    "절실한 구원":"절구",
    "절정":"절정",
    "절제":"절제",
    "점화":"점화",
    "정기 흡수":"정흡",
    "정밀 단도":"정단",
    "죽음의 습격":"죽습",
    "중갑 착용":"중갑",
    "중력 수련":"중수",
    "진실된 용맹":"진용",
    "진화의 유산":"유산",
    "질량 증가":"질증",
    "초심":"초심",
    "최대 마나 증가":"최마증",
    "추진력":"추진",
    "축복의 오라":"축오",
    "충격 단련":"충단",
    "타격의 대가":"타대",
    "탈출의 명수":"탈명",
    "폭발물 전문가":"폭전",
    "피스메이커":"피메",
    "핸드거너":"핸드",
    "화력 강화":"강화",
    "환류":"환류",
    "황제의 칙령":"황제",
    "황후의 은총":"황후",



}

const stonPeon = {
    "hero":5,
    "regend":7,
    "antiq":9
}
const akPeon = {
    "hero":15,
    "regend":25,
    "antiq":25,
    "ancient":35,
}
export function getDolCate(name){
    let [cate,m,d] = name.split(" ")

    return checkCateDol[cate]
}

export function getGakCate(engrave){
    let result = ""
    Object.keys(engrave).forEach((ele)=>{
        if(engrave[ele]===12){
            result="regend"
        }else if(engrave[ele]===9){
            result="hero"
        }
    })

    return result
}

export function getAccCate(name){
    let [cate,m,d] = name.split(" ")

    return checkCateEn[cate]
}

/*
 특성 작성
*/
export function getTek(data){
    //ability 특성 {'치명': 482, '특화': 442}
    // <p>특:121 치:121</p>
    let result = "<p>"
    Object.keys(data).forEach((ele)=>{
        result+=(Abbreviation[ele]+":"+data[ele]+" ")
    })
    result+="</p>"
    return result

}


export function getEngrage(eng,pen){
    //getEngrage({'각성': 4, '원한': 3},('공격속도 감소', 1))
    //engrave 각인  {'각성': 4, '원한': 3}
    //penalty 패널티각인 ('공격속도 감소', 1)
    /* <p>각성 기습 공속</p> */
        // <p>3 3 1</p>
    let result = "<p>"
    let result2 = "<p>"
    Object.keys(eng).forEach((ele)=>{
        result+=(Abbreviation[ele]+" ")
        result2+=(eng[ele]+" ")
    })
    Object.keys(pen).forEach((ele)=>{
        result+=Abbreviation[ele]
        result2+=pen[ele]
    })
    result+="</p>"
    result2+="</p>"

    return result+result2

}
    


export function getPeon(name){
    let check = name.split(" ")
    let checkCls = check[check.length-1]
    let peon = 0
    if(checkCls==="각인서"){
        peon = 0
    }else if(checkCls==="돌"){
        let rank = getDolCate(name)
        peon = stonPeon[rank]
    }else{
        let rank = getAccCate(name)
        peon = akPeon[rank]
    }

    return peon
    

    
}