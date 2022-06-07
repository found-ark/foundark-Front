export default function Keyboard(){
    let div = document.createElement("div")
    div.className = "keyboardWrap"

    let content = document.createElement("div")
    content.className="keyboard"

    content.innerText = "자판기"

    div.appendChild(content)
    return div
}