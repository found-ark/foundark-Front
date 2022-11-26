import harbSector from "./sector"

export default function harbLine(hps,ids,mapBox){
    let div = document.createElement("div")
    div.classList.add("harbLine")


    ids.map((id,index)=>{
        let [sec,action] = harbSector(hps[index])
        mapBox[id] = action
        div.appendChild(sec)
    })

    return div
}