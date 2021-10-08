import {getEngrage,getTek,getAccCate} from "./util";
/* <div class="acc">
    <p><b>타락한 마력의 귀걸이</b></p>
    <div class="acc_info">
        <span class="acc_wrap antiq">
            <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_109.png">
        </span>
        <span>
            <p>특:121 치:121</p>
            <p>200G</p>
        </span>
    </div>
    <p>각성 기습 공속</p>
    <p>3 3 1</p>
</div> */
export function AkElement(data) {  
    let $akElement = document.createElement("div");
    $akElement.className = "acc";

    //engrave 각인  {'각성': 4, '원한': 3}
    //penalty 패널티각인 ('공격속도 감소', 1)

    //ability 특성 {'치명': 482, '특화': 442}

    
    $akElement.innerHTML = `
        <p><b>${data.name}</b></p>
        <div class="acc_info">
            <span class="acc_wrap ${getAccCate(data.name)}">
                <img src="${data.img}">
            </span>
            <span>
                ${getTek(data.ablilty)}
                <p>${data.price}G</p>
            </span>
        </div>
        ${getEngrage(data.engrave,data.penalty)}
    `
    return $akElement
}
  