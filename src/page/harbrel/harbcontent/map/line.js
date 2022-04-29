import harbSector from "./sector"

export default function harbLine(texts){
    let div = document.createElement("div")
    div.classList.add("harbLine")


    texts.map(ele=>{
        div.appendChild(harbSector(ele))
    })

    return div
}