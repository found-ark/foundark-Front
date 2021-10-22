import {getTime} from "../api"

export function CrawlTime(target) {  
    getTime().then(res=>{
        target.innerHTML = `업데이트 시간 ${res.time}`
    })
}
  