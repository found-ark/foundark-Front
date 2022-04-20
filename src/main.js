import Gaksder from'./page/gaksder/App' 
import Harbrel from'./page/harbrel/App' 

//네비게이션 확인
function naviActive(gaksder,harbrel){
    let navi = document.querySelectorAll(".navi_content .navi_button")
    console.log(navi)

    navi.forEach((ele,i)=>{
        let check = ele.getAttribute("value")
        let page = undefined
        if(check==="gak"){
            page = gaksder
        }else if(check==="harb"){
            page = harbrel
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

    gaksder.render()
    naviActive(gaksder,harbrel)
}