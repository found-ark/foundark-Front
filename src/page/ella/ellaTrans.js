import Hangul from 'hangul-js'


const ellaSingle = {
    'ㄱ':[[0,0,100,100]],
    'ㄲ':[[0,0,100,100],[0,0,100,100]],
    'ㄴ':[[100,0,100,100]],
    'ㄷ':[[200,0,100,100]],
    'ㄸ':[[200,0,100,100],[200,0,100,100]],
    'ㄹ':[[300,0,100,100]],
    'ㅁ':[[400,0,100,100]],
    'ㅂ':[[500,0,100,100]],
    'ㅃ':[[500,0,100,100],[500,0,100,100]],
    'ㅅ':[[600,0,100,100]],
    'ㅆ':[[600,0,100,100],[600,0,100,100]],
    'ㅇ':[[700,0,100,100]],
    'ㅈ':[[800,0,100,100]],
    'ㅉ':[[800,0,100,100],[800,0,100,100]],
    'ㅊ':[[900,0,100,100]],

    'ㅋ':[[0,100,100,100]],
    'ㅌ':[[100,100,100,100]],
    'ㅍ':[[200,100,100,100]],
    'ㅎ':[[300,100,100,100]],

    'ㅏ':[[0,200,100,100]],
    'ㅐ':[[0,200,100,100],[900,200,100,100]],
    'ㅑ':[[100,200,100,100]],
    'ㅒ':[[100,200,100,100],[900,200,100,100]],
    'ㅓ':[[200,200,100,100]],
    'ㅔ':[[200,200,100,100],[900,200,100,100]],
    'ㅕ':[[300,200,100,100]],
    'ㅖ':[[300,200,100,100],[900,200,100,100]],
    'ㅗ':[[400,200,100,100]],
    'ㅛ':[[500,200,100,100]],
    'ㅜ':[[600,200,100,100]],
    'ㅠ':[[700,200,100,100]],
    'ㅡ':[[800,200,100,100]],
    'ㅣ':[[900,200,100,100]],
}
/**
 * 엘라어 번역 한글->엘라
 * 모든 텍스트에 대해 자음,모음으로 분리후 통째로 번역 진행
 * @param {*} input 한글로 입력
 * @param {*} canvas 출력되는 canvas
 */
export function ellaTrans(input,canvas){
    //https://kr.object.ncloudstorage.com/deokisys/image/ella1.png
    //https://kr.object.ncloudstorage.com/deokisys/image/ella2.png

    // 엘라어 이미지 불러오기
    let ellaImg = new Image()
    ellaImg.src = "https://kr.object.ncloudstorage.com/deokisys/image/ella2.png"

    // 입력 글자 가져오기
    input = input.replace(/ /g,"")//빈칸제거 
    let inputs = input.split("\n")//줄바꿈 단위로 진행

    //canvas 그리기 객체
    const ctx = canvas.getContext("2d");

    //canvas현재 위치
    let curX = 0 
    let curY = 0
    let drawWidth = 50
    let drawHeight = 50
    ellaImg.onload = ()=>{
        //줄 단위로 번역 시작
        inputs.forEach((line,i)=>{
            let lineDis = Hangul.disassemble(line); 
            //순서 뒤집기
            lineDis.reverse()
            lineDis.forEach(word=>{
                let ellaPoses = ellaSingle[word]
                ellaPoses.forEach(pose=>{
                    let [imgX,imgY,imgWidth,imgHeight] = pose
                    ctx.drawImage(ellaImg,imgX,imgY,imgWidth,imgHeight,curX,curY,drawWidth,drawHeight)
                    curX+=drawWidth
                })
            })
            curX=0
            curY+=drawHeight
        })
    }
}
