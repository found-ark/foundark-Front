export default function harbSector(text){
    let div = document.createElement("div")
    div.classList.add("harbSec")

    let textDiv = document.createElement("div")
    textDiv.classList.add("text")
    textDiv.innerText=text

    div.appendChild(textDiv)
    return div
}