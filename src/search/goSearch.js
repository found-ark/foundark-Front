import {ResultWrap} from "../result/resultWrap"
import {dummyGetData,request} from "../api"

export function searchButton(){
    let searchButton = document.querySelector(".search_button")
    searchButton.addEventListener("click",()=>{
        let data = getValues()
        if(data[0]){
            mkResult(data)
        }
    })
}
function getValues(){
    
    let data = {"각인":{},"특성":{},"옵션":{"어빌리티스톤":{},"각인서":{}}}//초기화

    // 선택된 각인 확인
    let engraveNames = document.querySelectorAll(".engrave_list .engrave span")
    let engraveValues = document.querySelectorAll(".engrave_list .engrave .value")
    if(engraveNames.length === 0){
        alert("각인이 하나도 없습니다.")
        return [false];
    }
    engraveNames.forEach((ele,i)=>{
        if(data["각인"][ele.textContent.trim()]!==undefined){
            console.log("중복 각인")
        }
        data["각인"][ele.textContent.trim()] = engraveValues[i].textContent
    })
    
    // 특성 비율확인
    let slideK = document.querySelectorAll(".mainSelectAbil");
    let slideV = document.querySelector("#mainSliderAbilValue");
    let slidValues = [Number(slideV.value),100-Number(slideV.value)]
    for(let i=0;i<slideK.length;i++){
        // console.log(slideK[i].options[slideK[i].selectedIndex].value)
        let key = slideK[i].options[slideK[i].selectedIndex].value;
        if(key!=="---"){
            if(data["특성"][key]===undefined){
                data["특성"][key]=Number(slidValues[i])
            }else{
                alert("특성값이 중복됐습니다.")
                return [false];
            }
        }else{
            alert("특성을 선택 해주세요")
            return [false];
        }
    }

    // 옵션 가격
    let optionPrice = document.querySelector("#OptionPriceSliderValue");
    data["옵션"]["가격"]=Number(optionPrice.value)

    // 옵션 어빌리티 스톤
    // 어빌리티 스톤 체크 확인
    let abilCheck = document.querySelector(".abil_checkbox")

    if(abilCheck.checked){
        let engravesAbilNames = document.querySelectorAll(".abil_engrave_wrap .engrave span")
        let engravesAbilValues = document.querySelectorAll(".abil_engrave_wrap .engrave .value")    
        engravesAbilNames.forEach((ele,i)=>{
            if(data["옵션"]["어빌리티스톤"][ele.textContent.trim()]!==undefined){
                console.log("중복 각인")
            }
            data["옵션"]["어빌리티스톤"][ele.textContent.trim()] = engravesAbilValues[i].textContent
        })
    }
    
    // 옵션 각인서
    let receipeCheck = document.querySelector(".receipe_checkbox")

    if(receipeCheck.checked){
        let engravesReceipeNames = document.querySelectorAll(".receipe_engrave_wrap .engrave span")
        let engravesReceipeValues = document.querySelectorAll(".receipe_engrave_wrap .engrave .value")
        engravesReceipeNames.forEach((ele,i)=>{
            if(data["옵션"]["각인서"][ele.textContent.trim()]!==undefined){
                console.log("중복 각인")
            }
            data["옵션"]["각인서"][ele.textContent.trim()] = engravesReceipeValues[i].textContent
        })
    }
    
    return [true,data]
}

function mkResult(data){
    let resultWrap = document.querySelector(".result_wrap")
    if(process.env.DUMMY==='true'){
        console.log("더미 데이터 사용")
        dummyGetData().then((res)=>{
            resultWrap.innerHTML= ``
            ResultWrap(resultWrap,res)
        })
    }else{
        request("POST",process.env.API_IP+"test/b",data[1]).then(res=>{
            resultWrap.innerHTML= ``
            ResultWrap(resultWrap,res)
        })
    }
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
        let selectV = document.querySelectorAll(".gak_checkbox_wrap");

        console.log(selectK)
        console.log(selectV)
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
        let optionGakV = document.querySelectorAll(".gakinseo_checkbox_wrap");

        //각인선택
        for(let i=0;i<selectK.length;i++){
            // console.log(selectK[i].options[selectK[i].selectedIndex].value)
            // console.log(selectV[i].options[selectV[i].selectedIndex].value)
            let key = selectK[i].options[selectK[i].selectedIndex].value
            let radioCheck = selectV[i].querySelector("input:checked")
            if(radioCheck!==null){
                let value = radioCheck.value
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
                    let radioCheck = optionGakV[i].querySelector("input:checked")
                    if(radioCheck!==null){
                        let value = radioCheck.value
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
        }
        console.log(data)
        test1(data).then((res)=>{
            resultWrap.innerHTML= ``
            ResultWrap(resultWrap,res)
        })
    })
    


}
  