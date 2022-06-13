const ellaPos = {
    'ㄱ':[[0,0]],
    'ㄴ':[[-100,0]],
    'ㄷ':[[-200,0]],
    'ㄹ':[[-300,0]],
    'ㅁ':[[-400,0]],
    'ㅂ':[[-500,0]],
    'ㅅ':[[-600,0]],
    'ㅇ':[[-700,0]],
    'ㅈ':[[-800,0]],
    'ㅊ':[[-900,0]],
    'ㅋ':[[0,-100]],
    'ㅌ':[[-100,-100]],
    'ㅍ':[[-200,-100]],
    'ㅎ':[[-300,-100]],
    'ㅏ':[[0,-200]],
    'ㅑ':[[-100,-200]],
    'ㅓ':[[-200,-200]],
    'ㅕ':[[-300,-200]],
    'ㅗ':[[-400,-200]],
    'ㅛ':[[-500,-200]],
    'ㅜ':[[-600,-200]],
    'ㅠ':[[-700,-200]],
    'ㅡ':[[-800,-200]],
    'ㅣ':[[-900,-200]],
    'ㅐ':[[0,-200],[-900,-200]],
    'ㅔ':[[-200,-200],[-900,-200]],
}

export default function KeyboardContent(transText){
    let div = document.createElement("div")
    //https://kr.object.ncloudstorage.com/deokisys/image/ella2.png
    div.className="keyboard"

    //1번줄 ㅂㅈㄷㄱㅅㅛㅕㅑ
    let line1Content = ["ㅂ","ㅈ","ㄷ","ㄱ","ㅅ","ㅛ","ㅕ","ㅑ"]
    let line1 = document.createElement("div")
    line1.className = "keyboardLine"
    line1Content.forEach(ele=>{
        line1.appendChild(keySingle(ele,transText))
    })
    

    //2번줄 ㅁㄴㅇㄹㅎㅗㅓㅏㅣ
    let line2Content = ["ㅁ","ㄴ","ㅇ","ㄹ","ㅎ","ㅗ","ㅓ","ㅏ","ㅣ"]
    let line2 = document.createElement("div")
    line2.className = "keyboardLine"
    line2Content.forEach(ele=>{
        line2.appendChild(keySingle(ele,transText))
    })

    //3번줄 ㅋㅌㅊㅍㅠㅜㅡ
    let line3Content = ["ㅋ","ㅌ","ㅊ","ㅍ","ㅠ","ㅜ","ㅡ"]
    let line3 = document.createElement("div")
    line3.className = "keyboardLine"
    line3Content.forEach(ele=>{
        line3.appendChild(keySingle(ele,transText))
    })

    div.appendChild(line1)
    div.appendChild(line2) 
    div.appendChild(line3)
    return div
}

function keySingle(char,transText){
    let div = document.createElement("div")
    div.className = "keySingle"
    let imgSize = [985,398]//가로, 세로
    //위 엘라어 부분
    let ella = document.createElement("div")
    ella.className = "ellaWrap"
    ella.alt = char
    if(ellaPos[char].length==1){
        let center = ellaKey(ellaPos[char][0],imgSize,0.5)
        ella.appendChild(center)
    }else{
        let left = ellaKey(ellaPos[char][0],imgSize,0.5)
        let right = ellaKey(ellaPos[char][1],imgSize,0.5)
        ella.appendChild(right)
        ella.appendChild(left)
    }
    //아래 한글 부분
    
    let han = document.createElement("div")
    han.className = "han"
    han.innerHTML = `<span>${char}</span>`

    div.appendChild(ella)
    div.appendChild(han)

    //이벤트 적용
    div.addEventListener("click",()=>{
        transText.addHangle(char)
    })
    return div
}

function ellaKey(imgPose,imgSize,scale){
    let div = document.createElement("div")
    div.className="ellaKey"
    div.style.backgroundImage= "url('https://kr.object.ncloudstorage.com/deokisys/image/ella2.png')"
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundPosition = `${imgPose[0]*scale}px ${imgPose[1]*scale}px`
    div.style.backgroundSize = `${imgSize[0]*scale}px ${imgSize[1]*scale}px`
    return div

}