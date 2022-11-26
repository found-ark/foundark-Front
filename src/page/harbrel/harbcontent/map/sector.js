import { sec2time,time2sec } from "../../util"
export default function harbSector(hp){
    let div = document.createElement("div")
    div.classList.add("harbSec")

    let textDiv = document.createElement("div")
    textDiv.classList.add("text")
    textDiv.innerText=hp

    div.appendChild(textDiv)

    let timerCheck  = undefined
    let action = (atk)=>{
        let intext = textDiv.innerText
        //타이머 중인지 확인
        if(isNaN(intext)){
            //체력이 없음
            return [false,time2sec(intext)]
        }

        let left = Number(textDiv.innerText)
        if(atk===-1){
            return [true,left]
        }
        left -= atk
        if(left<=0){
            //1분 40초
            div.classList.add("break")
            div.classList.remove("atk1")
            div.classList.remove("atk2")
            let time = 100
            textDiv.innerText=sec2time(time)
            timerCheck = setInterval(()=>{
                time-=1
                textDiv.innerText=sec2time(time)
                if(time===0){
                    div.classList.remove("break")
                    clearTimeout(timerCheck)
                    textDiv.innerText = 3
                }
            },1000)
        }else{
            if(left===2){
                div.classList.add("atk1")
                div.classList.remove("break")
                div.classList.remove("atk2")
            }else if(left===1){
                div.classList.add("atk2")
                div.classList.remove("atk1")
                div.classList.remove("break")
            }
            textDiv.innerText=left
        }

        return true
    }
    return [div,action]
}