export default function ConvertButton(){
    let div = document.createElement("div")
    div.className = "convert"

    let button = document.createElement("div")
    button.className="convertButton"

    button.innerText = "전환버튼"

    div.appendChild(button)
    return div
}