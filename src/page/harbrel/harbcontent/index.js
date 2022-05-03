import controller from "./controller"
import harbMap from "./map"

const blueScenario = [
    "파메 11 12",
    "파메 11 11 6",
    "파메 5 5 7 7",
    // "노메 12",
    "파메 11 11 6",
    // "찬미",
    "파메 7 7 12 1",
    // "노메 6",
    "파메 12 1 3",
    "파메 11 11 7 7",
    "파메 6 6 5",
    "파메 1 1 11 11",
    // "노메 12",
]

export default function harbContent(){
    let div = document.createElement("div")
    div.classList.add("harb")

    let mapVoid  = document.createElement("div")
    mapVoid.classList.add("harbCount")

    //배치를 위한 빈공간
    div.appendChild(mapVoid)
    //컨트롤러
    let [contDiv,panelBox,timerBox,infoBox] = controller()
    div.appendChild(contDiv)
    //맵
    let [mapDiv,mapBox] = harbMap()
    div.appendChild(mapDiv)
    
    //로직
    goAction(panelBox,mapBox,timerBox,infoBox)
    return div
}
function checkMap(mapBox,timerBox){
    //현재 남은 체력 확인

    let nextTime = timerBox["timeCheck"]()//다음 파메나오는 시간
    //지금 남은 파메들

    //우선순위
        //다음 파메 나오는시간미만으로 복구되는 녀석들
        //현재 체력 내림차순
        //노메 나오는 위치의 왼쪽 또는 오른쪽을 부수는 경우(예외의 경우)
        //언제 노메가 나오나?
            //그냥 예외로 따로 계산을 추가
            // 다음 노메가 12시면 11,11을 하고 나머지 1개는 체력 2이상인곳으로
            // 다음 노메가 6시면 7,7 하고 나머지 1개는 체력2 이상


    console.log("--------")
    console.log(mapBox[12](-1))
    console.log(mapBox[1](-1))
    console.log(mapBox[3](-1))
    console.log(mapBox[5](-1))
    console.log(mapBox[6](-1))
    console.log(mapBox[7](-1))
    console.log(mapBox[9](-1))
    console.log(mapBox[11](-1))
    console.log("+++")
    console.log(timerBox["timeCheck"]())
}
function goAction(panelBox,mapBox,timerBox,infoBox){
    //노랑 메테오
    let yellowCount = 0
    let blueCount = 0
    panelBox["yellow_meteo"].addEventListener("click",()=>{
        //총 4번 사용
        if(yellowCount%2===0){
            //아래
            if(yellowCount===0){
                atack([6,5,7,0],3,mapBox)
                atack([9,11,12,1,1],1,mapBox)
                timerBox["timeSet"](65)
            }else{
                atack([6,5,7,0],3,mapBox)
                timerBox["timeReSet"](20)
            }
            writeText(infoBox["blueWrite1"],blueScenario[blueCount])

        }else{
            //위
            atack([12,1,11,0],3,mapBox)
            writeText(infoBox["blueWrite1"],blueScenario[blueCount])
            timerBox["timeReSet"](20)
        }
        yellowCount+=1
    })
    //파랑 메테오
    panelBox["blue_meteo"].addEventListener("click",()=>{
        let nextBlue = blueScenario[blueCount]
        nextBlue = nextBlue.split(" ")
        nextBlue = nextBlue.slice(1)
        atack(nextBlue,1,mapBox)
        blueCount+=1
        writeText(infoBox["blueWrite1"],blueScenario[blueCount])
        checkMap(mapBox,timerBox)
    })

    //파랑 메테오 시간 리셋
    panelBox["blue_meteo_reset"].addEventListener("click",()=>{
        timerBox["timeReSet"](0)
    })

    //찬미(-10)
    panelBox["praise"].addEventListener("click",()=>{
        timerBox["timeReSet"](10)
    })

    //몽환(-20)
    panelBox["dream"].addEventListener("click",()=>{
        timerBox["timeReSet"](20)
    })
}
function writeText(writeBox,text){
    writeBox(text)
}

function atack(ids,dmg,mapBox){
    ids.map(id=>{
        mapBox[id](dmg)
    })
}