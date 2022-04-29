import control from "./control"
import text from "./text"
export default function harbController(){
    let div = document.createElement("div")
    div.classList.add("harbContent")

    //출력 영역
    let [textDiv,timerBox] = text()
    div.appendChild(textDiv)

    //컨트롤러 영역
    let harbControl = document.createElement("div")
    harbControl.classList.add("harbControler")

    let panelBox = {}
    harbControl.appendChild(control([["yellow_meteo","노랑 메테오"]],panelBox))
    harbControl.appendChild(control([["blue_meteo","파랑 메테오"],["blue_meteo_reset","파랑 메테오 리셋"]],panelBox))
    harbControl.appendChild(control([["praise","찬미"]],panelBox))
    harbControl.appendChild(control([["dream","몽환"]],panelBox))


    div.appendChild(harbControl)
    

    return [div,panelBox,timerBox]
}