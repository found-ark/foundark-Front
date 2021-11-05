import { selectElement } from "./selectElement"
import { delGakSelect } from "./gakEvent"
import { selectActivateEvent } from "../activateSelect"

export function gakSelectElement(){
    let gakin = document.createElement("div")

    gakin.className="gakin"
    gakin.innerHTML=`
    <div class="minus_gakin">
        
    </div>
    <div class="select_form">
        ${selectElement("mainSelect")}
    </div>
    <div class="gak_checkbox_wrap">
        1<input type="radio" name="gak5" class="gak_check" value="5" disabled>
        2<input type="radio" name="gak5" class="gak_check" value="10" disabled>
        3<input type="radio" name="gak5" class="gak_check" vlaue="15" disabled>
    </div>
`

    gakin.firstElementChild.appendChild(minbutton(gakin))
    selectActivateEvent(gakin,"INPUT")
    return gakin
}

function minbutton(delElement){
    let minbutton = document.createElement("div")
    minbutton.className = "minus_gakin_button"
    minbutton.innerHTML="-"
    delGakSelect(minbutton,delElement)
    return minbutton
}