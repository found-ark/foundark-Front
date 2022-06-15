import Explain from './explain'
import Keyboard from './keyboard'
import InOutArea from './inOutArea'
import ConvertButton from "./convertButton"
import { TransText } from '../TransText'
import { drawElla,sepHan2Str } from '../ellaTrans'


export default function EllaContent(){
    let wrap = document.createElement("div")
    wrap.className = "ella"

    let [convertButtonDiv, button] = ConvertButton()
    let [inOutArea,inputArea,outputArea,textArea,textArea2,canvas] = InOutArea()

    let transText = new TransText() //번역되는 한글 저장용
    transText.setJob((input)=>{drawElla(input,canvas)})
    transText.setJob((input)=>{sepHan2Str(input,textArea2)})
    let [keyboardWindow,keyboard] = Keyboard(transText)

    button.addEventListener("click",(e)=>{
        //textarea삭제
        textArea.value = ""
        //저장된 한글 삭제, 캔버스 리셋
        transText.clearText()

        //HtE , EtH
        if(e.target.classList.contains("HtE")){
            //엘라어->한글 모드일때
            e.target.classList.replace("HtE","EtH")
            e.target.innerText = "한글->엘라어"

            //키보드 열기
            keyboard.style.transition = "1000ms"
            keyboard.style.transform = "translate(0px, 0px)"

            //한글,엘라어 위치 변경
            inputArea.style.transition = "1000ms"
            inputArea.style.transform = "translate(0px, 167px)"

            outputArea.style.transition = "1000ms"
            outputArea.style.transform = "translate(0px, -117px)"

            //텍스트 영역 잠그기
            textArea.style.display = "none"
            textArea2.style.display = ""
        }else{
            //한글->엘라어 모드일때
            e.target.classList.replace("EtH","HtE")
            e.target.innerText = "엘라어->한글"

            //키보드 닫기
            keyboard.style.transition = "1000ms"
            keyboard.style.transform = "translate(0px, -250px)"

            //한글,엘라어 위치 변경
            inputArea.style.transition = "1000ms"
            inputArea.style.transform = "translate(0px, 0px)"
            outputArea.style.transition = "1000ms"
            outputArea.style.transform = "translate(0px, 0px)"

            //텍스트 영역 열기
            textArea.style.display = ""
            textArea2.style.display = "none"
        }

        
        

        

    })
    wrap.appendChild(inOutArea)
    wrap.appendChild(convertButtonDiv)
    wrap.appendChild(keyboardWindow)
    wrap.appendChild(Explain())

    return wrap
}