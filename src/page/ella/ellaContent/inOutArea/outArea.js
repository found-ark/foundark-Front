export default function OutArea(){
    let div = document.createElement("div")
    div.className = "outputArea"

    //제목
    let title = document.createElement("div")
    title.className = "title"
    title.innerText="엘라어"

    //출력 영역
    let content = document.createElement("div")
    content.className = "output"


    
    let canvas  = document.createElement("canvas")
    content.appendChild(canvas)

    div.appendChild(title)
    div.appendChild(content)
    return [div,canvas]
}