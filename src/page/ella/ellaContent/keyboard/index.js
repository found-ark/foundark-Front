import KeyboardContent from "./keyboardContent"

export default function Keyboard(){
    let div = document.createElement("div")
    div.className = "keyboardWrap"

    div.appendChild(KeyboardContent())
    return div
}