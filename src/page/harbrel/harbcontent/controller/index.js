import control from "./control"
import { sec2time,time2sec } from "../../util"
import InfoDiv from "./info"

import TimeDiv from "./time"

export default function harbController(){
    //출력 영역
    let div = document.createElement("div")
    div.classList.add("harbContent")

    //안내 메시지
    let [infoDiv,infoBox] = InfoDiv()
    
    //다음 파메 시간
    let [timeDiv,timerBox] = TimeDiv(infoDiv)


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
    
    return [div,panelBox,timerBox,infoBox]
}