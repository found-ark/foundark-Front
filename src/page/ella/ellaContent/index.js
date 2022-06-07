import Explain from './explain'
import Keyboard from './keyboard'
import InOutArea from './inOutArea'

export default function EllaContent(){
    let wrap = document.createElement("div")
    wrap.className = "ella"

    
    wrap.appendChild(InOutArea())
    wrap.appendChild(Keyboard())
    wrap.appendChild(Explain())

    return wrap
}