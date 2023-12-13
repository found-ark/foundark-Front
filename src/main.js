import Gaksder from'./page/gaksder/App' 
import Harbrel from'./page/harbrel/App' 
import Ella from'./page/ella/App' 

//네비게이션 확인
function naviActive(gaksder,harbrel,ella){
    let navi = document.querySelectorAll(".navi_content .navi_button")

    navi.forEach((ele,i)=>{
        let check = ele.getAttribute("value")
        let page = undefined
        if(check==="gak"){
            page = gaksder
        }else if(check==="harb"){
            page = harbrel
        }else if(check==="ella"){
            page = ella
        }
        ele.addEventListener("click",()=>{
            //페이지 변환
            page.render()
            if(!ele.classList.contains("selected")){
                ele.classList.add("selected")
            }
            //그외 다른 버튼들 비활성화
            navi.forEach((ele,j)=>{
                if(i!=j){
                    ele.classList.remove("selected")
                }
            })
        })
    })
}

window.onload = function(){
    let gaksder = new Gaksder(document.querySelector(".wrap"));
    let harbrel = new Harbrel(document.querySelector(".wrap"));
    let ella = new Ella(document.querySelector(".wrap"));

    harbrel.render()//초기 각스더
    naviActive(gaksder,harbrel,ella)
}