import {dummyGetTime,request} from "../../../api"

export function CrawlTime() {
    let target = document.querySelector(".update_time")
    if(process.env.DUMMY==='true'){
        console.log("더미 시간 사용")
        dummyGetTime(process.env.API_IP+"test/time").then(res=>{
            target.innerHTML = `업데이트 시간 ${res.time}`
        })
    }else{
        request("GET",process.env.API_IP+"test/time").then(res=>{
            if(res.error){
                target.innerHTML = `업데이트 시간 정보 없음`
            }else{
                target.innerHTML = `업데이트 시간 ${res.time}`
            }
            
        })
    }
    
}
