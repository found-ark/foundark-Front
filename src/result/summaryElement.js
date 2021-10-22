import {getPeon,Abbreviation} from "../util"

function sum(target,input){
    Object.keys(input).forEach(ele=>{
        if(target[ele]===undefined){
            target[ele]=0
        }
        target[ele]+=input[ele]
    })
}
function abilText(input){
    let result = ""
    // key value ... 로 출력

    Object.keys(input).forEach(key=>{
        result+=`${key}${input[key]} `
    })

    return result
}

function engText(input){
    let result = ""
    // key value ... 로 출력
    Object.keys(input).sort((a,b)=>{
        return input[b]-input[a]
    }).forEach(key=>{
        result+=`${Abbreviation[key]}${parseInt(input[key]/5)} `
    })
    return result
}

function penText(input){
    let result = ""
    // key value ... 로 출력

    let noPen = true
    Object.keys(input).sort((a,b)=>{
        return input[b]-input[a]
    }).forEach(key=>{
        result+=`${Abbreviation[key]}${parseInt(input[key]/5)} `
        if(input[key]>=5){
            noPen = false
        }
    })
    if(noPen){
        result = "감소 없음"
    }
    return result
}   

export function SummaryElement(data) {  
    let $smElement = ""

    {/* <b>요약: 요금 40000G 페온 100 특화1500 치명500</b>
    각성3 기습3 정흡3 돌대3 원한3 광기3 <span>감소 없음</span> */}
    let money = 0
    let peon = 0

    let abil = {}//ability
    let eng = {}//engrave
    let pen = {}//penalty
    Object.keys(data).forEach((ele)=>{
        if(data[ele]["name"]!==undefined){
            money+=data[ele]["price"]
            peon+= getPeon(data[ele]["name"])
            //특성
            sum(abil,data[ele]["ability"])
            //engrave(각인)
            sum(eng,data[ele]["engrave"])
            //penalty(패널티)
            sum(pen,data[ele]["penalty"])
        }
    })
    $smElement = `
    <div class="result_summary">
        <span>
            <b>요약: 요금 ${money}G 페온 ${peon} ${abilText(abil)}</b>
            ${engText(eng)}<span style="color:red">${penText(pen)}</span>
        </span>
    `
    return $smElement
}
  