export default function ConvertButton(){
    let div = document.createElement("div")
    div.className = "convert"

    let button = document.createElement("div")
    button.className="convertButton"
    button.classList.add("HtE")

    button.innerText = "엘라어->한글"

    div.appendChild(button)
    return [div,button]
}