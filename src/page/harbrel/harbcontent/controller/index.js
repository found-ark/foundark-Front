import control from "./control"

export default function harbController(){
    let div = document.createElement("div")
    div.classList.add("harbContent")

    //출력 영역
    let textDiv = document.createElement("div")
    textDiv.classList.add("text")
    div.appendChild(textDiv)

    //컨트롤러 영역
    let harbControl = document.createElement("div")
    harbControl.classList.add("harbControler")


    harbControl.appendChild(control([["yellow_meteo","노랑 메테오"]]))
    harbControl.appendChild(control([["blue_meteo","파랑 메테오"],["blue_meteo_fail","파랑 메테오 리셋"]]))
    harbControl.appendChild(control([["praise","찬미"]]))
    harbControl.appendChild(control([["dream","몽환"]]))


    div.appendChild(harbControl)
    

    return div
}