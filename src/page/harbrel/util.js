/**
 * 초를 분으로 표시
 * @param {*} sec 
 */
export function sec2time(sec){
    let min = parseInt(sec/60)
    sec = sec%60
    if(min<10){
        min = "0"+min
    }
    if(sec<10){
        sec = "0"+sec
    }
    return min+":"+sec

}