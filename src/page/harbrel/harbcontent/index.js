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
    let [contDiv,panelBox,timerBox] = controller()
    div.appendChild(contDiv)
    //맵
    let [mapDiv,mapBox] = harbMap()
    div.appendChild(mapDiv)
    
    //로직
    goAction(panelBox,mapBox,timerBox)
    return div
}
function checkMap(){

}
function goAction(panelBox,mapBox,timerBox){
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
            }else{
                atack([6,5,7,0],3,mapBox)
            }
            writeText(timerBox,blueScenario[blueCount])
            //yellowCount가 0이면 시작
            //-65초
            if(yellowCount===0){
                timerBox["timeSet"](65)
            }


        }else{
            //위
            atack([12,1,11,0],3,mapBox)
            writeText(timerBox,blueScenario[blueCount])
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
        writeText(timerBox,blueScenario[blueCount])
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
function writeText(timerBox,text){
    timerBox["write"](text)
}

function atack(ids,dmg,mapBox){
    ids.map(id=>{
        mapBox[id](dmg)
    })
}