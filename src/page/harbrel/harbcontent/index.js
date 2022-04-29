import controller from "./controller"
import harbMap from "./map"
export default function harbContent(){
    let div = document.createElement("div")
    div.classList.add("harb")

    let mapVoid  = document.createElement("div")
    mapVoid.classList.add("harbCount")

    //배치를 위한 빈공간
    div.appendChild(mapVoid)
    //컨트롤러
    div.appendChild(controller())
    //맵
    div.appendChild(harbMap())
    
    return div
}