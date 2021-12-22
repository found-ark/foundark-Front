import pluswhite from "./assets/plus.png"
import plusblack from "./assets/plusb.png"
import minuswhite from "./assets/minus.png"
import minusblack from "./assets/minusb.png"

export function initImg(){
    //white plus
    let wp = document.querySelectorAll(".plus_white")
    wp.forEach(ele=>{
        ele.appendChild(mkImg("plus_white"))
    })
    //black plus
    let bp = document.querySelectorAll(".plus_black")
    bp.forEach(ele=>{
        ele.appendChild(mkImg("plus_black"))
    })
    //black minus
    let bm = document.querySelectorAll(".minus_black")
    bm.forEach(ele=>{
        ele.appendChild(mkImg("minus_black"))
    })
}

function mkImg(imgsrc){
    let img = document.createElement("img")
    img.src = getSrc(imgsrc)
    return img
}

/**
 * plus_white, minus_white, plus_black, minus_black 있음
 * @param {*} imgsrc 
 * @returns 
 */
export function getSrc(imgsrc){
    let src = undefined
    switch(imgsrc){
        case 'plus_white':
            src = pluswhite
            break;
        case 'minus_white':
            src = minuswhite
            break;
        case 'plus_black':
            src = plusblack
            break;
        case 'minus_black':
            src = minusblack
            break;
    }
    return src
}