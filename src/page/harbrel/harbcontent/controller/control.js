export default function control(props,panelBox){
    let div = document.createElement("div")
    div.classList.add("harbControl")

    props.map(ele=>{
        let button = document.createElement("div")
        button.classList.add("harb_button")

        button.classList.add(ele[0])
        button.innerText = ele[1]

        div.appendChild(button)
        panelBox[ele[0]] = button
    })

    return div
}