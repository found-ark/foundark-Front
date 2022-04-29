import { sec2time } from "../../util"
export default function harbSector(hp){
    let div = document.createElement("div")
    div.classList.add("harbSec")

    let textDiv = document.createElement("div")
    textDiv.classList.add("text")
    textDiv.innerText=hp

    div.appendChild(textDiv)

    let action = (atk)=>{
        let intext = textDiv.innerText
        //타이머 중인지 확인
        if(isNaN(intext)){
            //숫자가 아니면 false넘기기
            return false
        }

        let left = Number(textDiv.innerText)
        left -= atk
        if(left<=0){
            //1분 40초
            div.style.backgroundColor = "black"
            div.style.color = "white"
            let time = 100
            textDiv.innerText=sec2time(time)
            let timerCheck = setInterval(()=>{
                time-=1
                textDiv.innerText=sec2time(time)
                if(time===0){
                    div.style.backgroundColor = "red"
                    div.style.color = "black"
                    clearTimeout(timerCheck)
                    textDiv.innerText = 3
                }
            },1000)
        }else{
            textDiv.innerText=left
        }

        return true
    }
    return [div,action]
}