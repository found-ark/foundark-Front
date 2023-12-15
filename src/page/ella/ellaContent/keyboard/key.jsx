import { useDispatch } from "react-redux"
import EllaKey from "./ellaKey"
import { ellaInputAdd, ellaInputClear, ellaInputDel, ellaInputNewline } from "../../../../reducer/ella";

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

export default function Key({value}){
    
    const dispatch = useDispatch();
    

    const imgSize = [1000,1000]//가로, 세로
    //위 엘라어 부분
    
    function onClick(){
        if(value==="줄바꿈"){
            // transText.newLine()
            console.log("줄바꿈")
            dispatch(ellaInputNewline());
        }else if(value==="삭제"){
            // transText.delHangle()
            console.log("삭제")
            dispatch(ellaInputDel());
        }else if(value==="리셋"){
            // transText.clearText()
            console.log("리셋")
            dispatch(ellaInputClear());
        }else{
            // transText.addHangle(key)
            console.log("한글입력"+value)
            dispatch(ellaInputAdd({value:value}));

            //textarea에 출력;
            //sepHan2Str(value);
            //엘라어 출력;
        }
    }

    return <div className="keySingle" onClick={onClick}>
        <div className="ellaWrap" alt={value}>
        {
        (ellaPos[value].length==1)?
            <EllaKey imgPose={ellaPos[value][0]} imgSize={imgSize} scale={0.5}/>
        :
            <>
                <EllaKey imgPose={ellaPos[value][0]} imgSize={imgSize} scale={0.5}/>
                <EllaKey imgPose={ellaPos[value][1]} imgSize={imgSize} scale={0.5}/>
            </>
        }
        </div>
        <div className="han">
            <span>{value}</span>
        </div>
    </div>

}
