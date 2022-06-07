export default function OutArea(){
    let div = document.createElement("div")
    div.className = "outputArea"

    let title = document.createElement("div")
    title.className = "title"

    let content = document.createElement("div")
    content.className = "output"


    title.innerText="엘라어"
    content.innerText = "출력 영역"

    div.appendChild(title)
    div.appendChild(content)
    return div
}