import KeyboardContent from "./keyboardContent"

export default function Keyboard(transText){
    let div = document.createElement("div")
    div.className = "keyboardWindow"

    let keyboardWrap = document.createElement("div")
    keyboardWrap.className = "keyboardWrap"
    keyboardWrap.appendChild(KeyboardContent(transText))

    div.appendChild(keyboardWrap)

    return [div,keyboardWrap]
}