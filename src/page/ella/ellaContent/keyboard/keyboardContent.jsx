import KeyboardLine from "./keyboardLine"

export default function KeyboardContent(){

    //1번줄 ㅂㅈㄷㄱㅅㅛㅕㅑ
    const line1Content = ["ㅂ","ㅈ","ㄷ","ㄱ","ㅅ","ㅛ","ㅕ","ㅑ","삭제"]
   
    //2번줄 ㅁㄴㅇㄹㅎㅗㅓㅏㅣ
    const line2Content = ["ㅁ","ㄴ","ㅇ","ㄹ","ㅎ","ㅗ","ㅓ","ㅏ","ㅣ","줄바꿈"]

    //3번줄 ㅋㅌㅊㅍㅠㅜㅡ
    const line3Content = ["ㅋ","ㅌ","ㅊ","ㅍ","ㅠ","ㅜ","ㅡ","리셋"]

    return <div className="keyboard">
        <KeyboardLine line={line1Content}/>
        <KeyboardLine line={line2Content}/>
        <KeyboardLine line={line3Content}/>
    </div>
}