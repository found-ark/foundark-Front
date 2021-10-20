import {ResultWrap} from "./resultWrap"
import {test1} from "./api"
//탐색에 필요한 정보가져오기

//탐색 버튼 클릭시 전송하는 format

//전송하고 받는 부분

function show(){

}

export function GoSearch() {  

    let searchButton = document.querySelector(".search_button")

    let resultWrap = document.querySelector(".result_wrap")
    searchButton.addEventListener("click",()=>{

        console.log("test")
        test1().then((res)=>{
            ResultWrap(resultWrap,res)
        })
    })
    


}
  