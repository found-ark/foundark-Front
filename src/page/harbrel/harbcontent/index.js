import controller from "./controller"
export default function harbContent(){
    let div = document.createElement("div")
    div.classList.add("harb")

    let mapVoid  = document.createElement("div")
    mapVoid.classList.add("harbCount")

    div.appendChild(mapVoid)
    div.appendChild(controller())
    
    return div
}