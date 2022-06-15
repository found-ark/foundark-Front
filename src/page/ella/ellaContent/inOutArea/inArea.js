export default function InArea(){
    let div = document.createElement("div")
    div.className = "inputArea"

    //제목 부분
    let title = document.createElement("div")
    title.className = "title"
    title.innerText="한글"

    //
    let content = document.createElement("div")
    content.className = "input"

    let textArea = document.createElement("textarea")
    content.appendChild(textArea)

    let textArea2 = document.createElement("div")
    textArea2.style.display = "none"
    textArea2.className = "textArea2"
    content.appendChild(textArea2)

    div.appendChild(title)
    div.appendChild(content)
    return [div,textArea,textArea2]
}