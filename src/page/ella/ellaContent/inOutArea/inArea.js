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

    div.appendChild(title)
    div.appendChild(content)
    return [div,textArea]
}