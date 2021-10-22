import {ResultWrap} from "../result/resultWrap"
import {test1} from "../api"
//탐색에 필요한 정보가져오기

//탐색 버튼 클릭시 전송하는 format

//전송하고 받는 부분

function show(){

}

export function GoSearch() {  

    let searchButton = document.querySelector(".search_button")

    let resultWrap = document.querySelector(".result_wrap")

    //select 가져오기
    // alert('선택된 옵션 value 값=' + test1.options[test1.selectedIndex].value);     // 옵션 value 값
    //mainSelect
    //mainSelectValue

    //mainSelectAbil
    //#mainSliderAbilValue
    
    let data = {"각인":{},"특성":{},"옵션":{"돌":{},"각인서":{}}}

    searchButton.addEventListener("click",()=>{
        data = {"각인":{},"특성":{},"옵션":{"돌":{},"각인서":{}}}//초기화
        //기본 각인 선택
        let selectK = document.querySelectorAll(".mainSelect");
        let selectV = document.querySelectorAll(".mainSelectValue");

        //기본 특성 선택
        let slideK = document.querySelectorAll(".mainSelectAbil");
        let slideV = document.querySelector("#mainSliderAbilValue");

        //--------옵션 여부
        let optionCheck = document.querySelector(".option_content");

        //옵션가격
        let optionPrice = document.querySelector("#OptionPriceSliderValue");

        //옵션 돌선택
        let optionDolCheck = document.querySelector(".dol_option_check");
        let optionDolK = document.querySelectorAll(".optionDolGakin");
        let optionDolV = document.querySelectorAll(".optionDolGakinValue");
        
        //옵션 각인서 선택
        let optionGakCheck = document.querySelector(".gak_option_check");
        let optionGakK = document.querySelectorAll(".optionGakGakin");
        let optionGakV = document.querySelectorAll(".optionGakGakinValue");

        //각인선택
        for(let i=0;i<selectK.length;i++){
            // console.log(selectK[i].options[selectK[i].selectedIndex].value)
            // console.log(selectV[i].options[selectV[i].selectedIndex].value)
            let key = selectK[i].options[selectK[i].selectedIndex].value
            let value = selectV[i].options[selectV[i].selectedIndex].value
            if(key!=="---"){
                if(data["각인"][key]===undefined){
                    if(value!=="-"){
                        data["각인"][key]=Number(value)
                    }
                }else{
                    console.log("값이 중복")
                }
            }
            
        }
        //특성값
        
        let slidValues = [Number(slideV.value),100-Number(slideV.value)]
        //특성 슬라이드
        for(let i=0;i<slideK.length;i++){
            // console.log(slideK[i].options[slideK[i].selectedIndex].value)
            let key = slideK[i].options[slideK[i].selectedIndex].value;
            if(key!=="---"){
                if(data["특성"][key]===undefined){
                    data["특성"][key]=Number(slidValues[i])
                }else{
                    console.log("특성 값이 중복")
                }
            }
        }
        

        
        //옵션

        if(!optionCheck.classList.contains("close")){
            //효율
            data["옵션"]["가격"]=Number(optionPrice.value)
            //돌 고정
            if(optionDolCheck.checked){
                for(let i=0;i<optionDolK.length;i++){
                    // console.log(selectK[i].options[selectK[i].selectedIndex].value)
                    // console.log(selectV[i].options[selectV[i].selectedIndex].value)
                    let key = optionDolK[i].options[optionDolK[i].selectedIndex].value
                    let value = optionDolV[i].options[optionDolV[i].selectedIndex].value
                    if(key!=="---"){
                        if(data["옵션"]["돌"][key]===undefined){
                            if(value!=="-"){
                                data["옵션"]["돌"][key]=Number(value)
                            }
                        }else{
                            console.log("값이 중복")
                        }
                    }
                }
            }

            //각인서 고정
            
            if(optionGakCheck.checked){
                for(let i=0;i<optionGakK.length;i++){
                    // console.log(selectK[i].options[selectK[i].selectedIndex].value)
                    // console.log(selectV[i].options[selectV[i].selectedIndex].value)
                    let key = optionGakK[i].options[optionGakK[i].selectedIndex].value
                    let value = optionGakV[i].options[optionGakV[i].selectedIndex].value
                    if(key!=="---"){
                        if(data["옵션"]["각인서"][key]===undefined){
                            if(value!=="-"){
                                data["옵션"]["각인서"][key]=Number(value)
                            }
                        }else{
                            console.log("값이 중복")
                        }
                    }
                }
            }
        }
        console.log(data)
        test1(data).then((res)=>{
            resultWrap.innerHTML= ``
            ResultWrap(resultWrap,res)
        })
    })
    


}
  