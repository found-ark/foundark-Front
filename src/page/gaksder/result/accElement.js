import {getAccCate,getGakCate,getDolCate,Abbreviation} from "../util";
export function AccElement(data) {  
    let accElement = document.createElement("div")
    accElement.classList.add("acc")
    if(data.equip_type=="각인서" ||data.equip_type=="어빌리티스톤"){
        accElement.classList.add("abilgak")
    }
    //engrave 각인  {'각성': 4, '원한': 3}
    //penalty 패널티각인 ('공격속도 감소', 1)
    //ability 특성 {'치명': 482, '특화': 442}
    accElement.innerHTML= `
        <p><b>${data.name}</b></p>
        <div class="acc_info">
            <span class="acc_wrap ${data.equip_type=="각인서"?getGakCate(data.engrave):
            data.equip_type=="어빌리티스톤"?getDolCate(data.name):
            getAccCate(data.name)}">
                <img src="${data.img===""?"https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_3_175.png":data.img}">
            </span>
            <span>
                <p>${data.time}</p>
                <p>품질:${data.quality}</p>
            </span>
        </div>
        <div class="engrave_info">
            ${getAbil(data.ability)}
            ${getEngPen(data.engrave,data.penalty)}
        </div>
        <p>${data.price}G</p>
    `
    return accElement
}
  

function getAbil(abil){
    if(abil==={}) return ''
    let result = `<span>`;
    Object.keys(abil).forEach(ele=>{
        result+=`<p>${ele}:${abil[ele]}</p>`
    })
    result+=`</span>`
    return result
}
function getEngPen(eng,pen){
    let result = `<span>`;
    Object.keys(eng).forEach(ele=>{
        result+=`<p>${Abbreviation[ele]} ${eng[ele]}</p>`
    })
    if(pen!=={}){
        Object.keys(pen).forEach(ele=>{
            result+=`<p>${Abbreviation[ele]} ${pen[ele]}</p>`
        })
    }
    result+=`</span>`
    return result
}