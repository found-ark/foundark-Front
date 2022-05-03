   
export default function InfoDiv(){
   //안내 메시지
   let div = document.createElement("div")
   div.classList.add("info")

    //다음 파랑 메티오 안깨질 위치
    let blueDiv1 = document.createElement("div")
    blueDiv1.classList.add("blue1")

    //노메가 곧일때 파랑 메테오 위치
    let blueDiv2 = document.createElement("div")
    blueDiv2.classList.add("blue2")


    div.appendChild(blueDiv1)
    div.appendChild(blueDiv2)

    let infoBox = {}

    infoBox["blueWrite1"] = (text)=>{
        blueDiv1.innerText = text
    }
    infoBox["blueWrite2"] = (text)=>{
        blueDiv1.innerText = text
    }
   return [div,infoBox]
}

