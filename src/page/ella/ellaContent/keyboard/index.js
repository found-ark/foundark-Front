import KeyboardContent from "./keyboardContent"

export default function Keyboard(){
    let div = document.createElement("div")
    div.className = "keyboardWindow"

    let keyboardWrap = document.createElement("div")
    keyboardWrap.className = "keyboardWrap"
    keyboardWrap.appendChild(KeyboardContent())

    div.appendChild(keyboardWrap)

    return div
}