import {getEngrage,getTek,getAccCate,getGakCate,getDolCate} from "./util";
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
</div> 
<div class="acc abilgak">
    <p>돌</p>
    <div class="acc_info">
        <span class="acc_wrap antiq">
            <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Ability/Ability_21.png">
        </span>
        <span>
            <p>200G</p>
        </span>
    </div>
    <p>각성 기습 공속</p>
    <p>3 3 1</p>
</div>
<div class="acc abilgak">
    <p>기습의 대가</p>
    <div class="acc_info">
        <span class="acc_wrap hero">
            <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/All_Quest/All_Quest_01_153.png">
        </span>
        <span>
            <p>200G</p>
        </span>
    </div>
    <p>기습</p>
    <p>9</p>
</div>

*/
export function AkElement(data) {  
    let $akElement = ""
    let className = "acc";

    if(data.equip_type=="각인서" ||data.equip_type=="어빌리티스톤"){
        className+=" abilgak"
    }
    //engrave 각인  {'각성': 4, '원한': 3}
    //penalty 패널티각인 ('공격속도 감소', 1)

    //ability 특성 {'치명': 482, '특화': 442}
    
    $akElement= `
    <div class="${className}">
        <p><b>${data.name}</b></p>
        <div class="acc_info">
            <span class="acc_wrap ${data.equip_type=="각인서"?getGakCate(data.engrave):
            data.equip_type=="어빌리티스톤"?getDolCate(data.name):
            getAccCate(data.name)}">
                <img src="${data.img===""?"https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_3_175.png":data.img}">
            </span>
            <span>
                ${data.equip_type=="각인서"?"":
                data.equip_type=="어빌리티스톤"?"":getTek(data.ablilty)}
                <p>${data.price}G</p>
            </span>
        </div>
        ${getEngrage(data.engrave,data.penalty)}
    </div>
    `
    return $akElement
}
  