export default function InArea(){
    let div = document.createElement("div")
    div.className = "inputArea"

    let title = document.createElement("div")
    title.className = "title"

    let content = document.createElement("div")
    content.className = "input"


    title.innerText="한글"
    content.innerText = "입력 영역"

    div.appendChild(title)
    div.appendChild(content)
    return div
}