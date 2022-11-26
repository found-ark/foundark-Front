import harbLine from "./line"
export default function harbMap(){
    let div = document.createElement("div")
    div.classList.add("harbMap")

    let mapBox = {}
    //1줄
    div.appendChild(harbLine(["3","3","3"],[12,1,3],mapBox))
    //2줄
    div.appendChild(harbLine(["3","14","3"],[11,0,5],mapBox))
    //3줄
    div.appendChild(harbLine(["3","3","3"],[9,7,6],mapBox))

    return [div,mapBox]
}