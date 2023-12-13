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

    //캔버스 감싸기
    let wrap = document.createElement("div")
    wrap.className = "canvasWrap"

    
    let canvas  = document.createElement("canvas")
    wrap.appendChild(canvas)
    content.appendChild(wrap)

    div.appendChild(title)
    div.appendChild(content)
    return [div,canvas]
}