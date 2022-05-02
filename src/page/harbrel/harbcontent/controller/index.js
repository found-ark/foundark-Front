import control from "./control"
import { sec2time,time2sec } from "../../util"

export default function harbController(){
    //출력 영역
    let div = document.createElement("div")
    div.classList.add("harbContent")

    //안내 메시지
    let infoDiv = document.createElement("div")
    infoDiv.classList.add("info")
    
    //다음 파메 시간
    let timeDiv = document.createElement("div")
    timeDiv.classList.add("timeWrap")
    let timeText = document.createElement("div")
    timeText.classList.add("timeText")
    timeText.innerText = "다음 파메 시간은 : "
    let timer = document.createElement("div")
    timer.classList.add("timer")
    timer.innerText = sec2time(65)
    timeDiv.appendChild(timeText)
    timeDiv.appendChild(timer)


    //컨트롤러 영역
    let harbControl = document.createElement("div")
    harbControl.classList.add("harbControler")

    let panelBox = {}
    harbControl.appendChild(control([["yellow_meteo","노랑 메테오 콰쾅"]],panelBox))
    harbControl.appendChild(control([["blue_meteo","파랑 메테오 콰쾅"],["blue_meteo_reset","파랑 메테오 시간 재조정"]],panelBox))
    harbControl.appendChild(control([["praise","찬미하라"]],panelBox))
    harbControl.appendChild(control([["dream","몽환을 지켜라"]],panelBox))

    div.appendChild(timeDiv)
    div.appendChild(infoDiv)
    div.appendChild(harbControl)
    


    //필요한 엑션들
    let timerCheck = undefined

    let write = (text)=>{
        infoDiv.innerText = text
    }
    let timeSet = (nextTime)=>{
        timer.innerText = sec2time(nextTime)
        timerCheck = setInterval(()=>{
            nextTime-=1
            timer.innerText=sec2time(nextTime)
            if(nextTime===0){
                nextTime = 60
            }
        },1000)
    }
    let timeReSet = (plusTime)=>{
        clearTimeout(timerCheck)
        let nextTime = time2sec(timer.innerText)
        if(plusTime===0){
            nextTime = 60
        }else{
            nextTime+=plusTime
        }
        timer.innerText = sec2time(nextTime)
        timerCheck = setInterval(()=>{
            nextTime-=1
            timer.innerText=sec2time(nextTime)
            if(nextTime===0){
                nextTime = 60
            }
        },1000)
    }

    let timerBox = {}
    timerBox["write"] = write
    timerBox["timeSet"] = timeSet
    timerBox["timeReSet"] = timeReSet
    return [div,panelBox,timerBox]
}