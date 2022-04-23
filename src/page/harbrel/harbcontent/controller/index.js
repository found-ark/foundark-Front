import control from "./control"
{/* <div class="harbContent">
        <div class="text">

        </div>
        <div class="harbControler">
            <div class="harbControl">
                <div class="harb_button yellow_meteo">
                    노랑 메테오
                </div>
            </div>
            <div class="harbControl">
                <div class="harb_button blue_meteo">
                    파랑 메테오
                </div>
                <div class="harb_button blue_meteo_fail">
                    파랑 메테오 리셋
                </div>
            </div>
            <div class="harbControl">
                <div class="harb_button praise">
                    찬미
                </div>
            </div>
            <div class="harbControl">
                <div class="harb_button dream">
                    몽환
                </div>
                <div class="harb_button dream">
                    몽환 실패
                </div>
            </div>
            
        </div>
    </div> */}

export default function harbController(){
    let div = document.createElement("div")
    div.classList.add("harbContent")

    //출력 영역
    let textDiv = document.createElement("div")
    textDiv.classList.add("text")
    div.appendChild(textDiv)

    //컨트롤러 영역
    let harbControl = document.createElement("div")
    harbControl.classList.add("harbControler")


    harbControl.appendChild(control([["yellow_meteo","노랑 메테오"]]))
    harbControl.appendChild(control([["blue_meteo","파랑 메테오"],["blue_meteo_fail","파랑 메테오 리셋"]]))
    harbControl.appendChild(control([["praise","찬미"]]))
    harbControl.appendChild(control([["dream","몽환"]]))


    div.appendChild(harbControl)
    

    return div
}