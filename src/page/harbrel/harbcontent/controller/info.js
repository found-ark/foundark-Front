   
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

    infoBox["blueWrite1"] = (list,action=undefined)=>{
        //초기화
        blueDiv1.innerHTML = ''

        if(list.length>0){
            blueDiv1.appendChild(blueInfoDiv(list,action,"안부서지는 위치 추천 "))
        }
    }
    infoBox["blueWrite2"] = (list,action=undefined)=>{
        //초기화
        blueDiv2.innerHTML = ''

        if(list.length>0){
            blueDiv2.appendChild(blueInfoDiv(list,action,"하나 버리는 위치 추천 "))
        }
    }
   return [div,infoBox]
}

function blueInfoDiv(list,action,infoText){
    let div = document.createElement("div")
    div.className = "blueRecommendWrap"

    let text = document.createElement("div")
    text.className = "blueRecommendText"
    text.innerText = `${infoText} : ${list.join()}`

    let button = document.createElement("div")
    button.className = "blueRecommendButton"
    button.classList.add("default_button")
    button.innerText = "파메 놓기"

    div.appendChild(text)
    div.appendChild(button)
    button.addEventListener("click",action)

    return div
}