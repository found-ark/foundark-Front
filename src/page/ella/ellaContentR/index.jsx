import Explain from './explain'
import Keyboard from './keyboard'
import InOutArea from './inOutArea'
import ConvertButton from "./convertButton"
import { TransText } from '../TransText'
import { drawElla,sepHan2Str } from '../ellaTrans'


function EllaContent1(){
    // let wrap = document.createElement("div")
    // wrap.className = "ella"

    // let [convertButtonDiv, button] = ConvertButton()
    // let [inOutArea,inputArea,outputArea,textArea,textArea2,canvas] = InOutArea()

    let transText = new TransText() //번역되는 한글 저장용
    transText.setJob((input)=>{drawElla(input,canvas)})
    transText.setJob((input)=>{sepHan2Str(input,textArea2)})
    let [keyboardWindow,keyboard] = Keyboard(transText)

    return wrap
}

export default function EllaContent(){
    return <div className='ella'>
        <InOutArea/>
        <ConvertButton/>
        <Explain/>
        <Keyboard/>
    </div>
}