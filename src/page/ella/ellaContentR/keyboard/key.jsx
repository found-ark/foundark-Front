import EllaKey from "./ellaKey"

const ellaPos = {
    'ㄱ':[[0,0]],
    'ㄴ':[[-88,0]],
    'ㄷ':[[-200,0]],
    'ㄹ':[[-300,0]],
    'ㅁ':[[-400,0]],
    'ㅂ':[[-500,0]],
    'ㅅ':[[-606,0]],
    'ㅇ':[[-700,0]],
    'ㅈ':[[-800,0]],
    'ㅊ':[[-914,0]],
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
    'ㅜ':[[-606,-200]],
    'ㅠ':[[-700,-200]],
    'ㅡ':[[-808,-200]],
    'ㅣ':[[-916,-200]],
    'ㅐ':[[0,-200],[-900,-200]],
    'ㅔ':[[-200,-200],[-900,-200]],

    //특별 키
    '줄바꿈':[[-700,-900]],
    '삭제':[[-800,-900]],
    '리셋':[[-908,-908]],
}

export default function Key({key}){

    const imgSize = [1000,1000]//가로, 세로
    //위 엘라어 부분
    
    function onClick(){
        if(key==="줄바꿈"){
            // transText.newLine()
            alert("줄바꿈")
        }else if(key==="삭제"){
            // transText.delHangle()
            alert("삭제")
        }else if(key==="리셋"){
            // transText.clearText()
            alert("리셋")
        }else{
            // transText.addHangle(key)
            alert("한글입력")
        }
    }

    return <div className="keySingle" onClick={onClick}>
        <div className="ellaWrap" alt={key}>
        {
        (ellaPos[key].length==1)?
            <EllaKey imgPose={ellaPos[key][0]} imgSize={imgSize} scale={0.5}/>
        :
            <>
                <EllaKey imgPose={ellaPos[key][0]} imgSize={imgSize} scale={0.5}/>
                <EllaKey imgPose={ellaPos[key][1]} imgSize={imgSize} scale={0.5}/>
            </>
        }
        </div>
        <div className="han">
            <span>{key}</span>
        </div>
    </div>

}
