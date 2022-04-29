import { sec2time,time2sec } from "../../util"

export default function text(){
    //출력 영역
    let div = document.createElement("div")
    div.classList.add("text")

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
    timeDiv.appendChild(timeText)
    timeDiv.appendChild(timer)

    div.appendChild(timeDiv)
    div.appendChild(infoDiv)
    
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
    return [div,timerBox]
}