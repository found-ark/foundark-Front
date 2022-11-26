import { sec2time } from "../util"
export default function harbTimer(){
    
    let timerStart = true
    let time = 1200

    let div = document.createElement("div")
    div.classList.add("timerWrap")

    let timerView = document.createElement("div")
    timerView.classList.add("timer")
    timerView.innerText=sec2time(time)

    let timerButton = document.createElement("div")
    timerButton.classList.add("timer_button")
    timerButton.innerText="시작!"

    div.appendChild(timerView)
    div.appendChild(timerButton)
    let timerCheck = undefined
    timerButton.addEventListener("click",()=>{
        if(timerStart){
            timerCheck = setInterval(()=>{
                time-=1
                timerView.innerText=sec2time(time)
                if(time===0){
                    clearTimeout(timerCheck)
                    time = 0
                    timerStart = !timerStart
                    timerButton.innerText = "종료!"
                }
            },1000)
            timerStart = !timerStart
            timerButton.innerText = "중지!"
        }else{
            clearTimeout(timerCheck)
            timerButton.innerText = "시작!"
            time=1200
            timerView.innerText=sec2time(time)
            timerStart =!timerStart
        }
        
    })
    return div
}