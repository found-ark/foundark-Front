import { time2sec ,sec2time} from "../../util"

export default function TimeDiv(infoDiv){

    //다음 파메 시간
    let div = document.createElement("div")
    div.classList.add("timeWrap")
    let timeText = document.createElement("div")
    timeText.classList.add("timeText")
    timeText.innerText = "다음 파메 시간은 : "
    let timer = document.createElement("div")
    timer.classList.add("timer")
    timer.innerText = sec2time(65)
    div.appendChild(timeText)
    div.appendChild(timer)

    //필요한 엑션들
    let timerCheck = undefined

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

    let timeCheck = ()=>{
        return time2sec(timer.innerText)
    }
    let timerBox = {}
    timerBox["timeSet"] = timeSet
    timerBox["timeReSet"] = timeReSet
    timerBox["timeCheck"] = timeCheck
 
    return [div,timerBox]
 }
 