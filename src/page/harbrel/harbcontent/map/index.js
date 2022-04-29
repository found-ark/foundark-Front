import harbLine from "./line"
export default function harbMap(){
    let div = document.createElement("div")
    div.classList.add("harbMap")

    //1줄
    div.appendChild(harbLine(["3","3","3"]))
    //2줄
    div.appendChild(harbLine(["3","14","3"]))
    //3줄
    div.appendChild(harbLine(["3","3","3"]))

    return div
}