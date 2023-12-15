import { useDispatch, useSelector } from "react-redux"
import { open } from "../../../reducer/ella";

export default function ConvertButton(){
    const dispatch = useDispatch();
    const isOpen = useSelector((state)=>state.ella.isOpen);

    function onClick(){

        dispatch(open());
        //textarea삭제
        //textArea.value = ""
        //저장된 한글 삭제, 캔버스 리셋
        //transText.clearText()

    }

    return <div className="convert">
        <div className="convertButton" onClick={onClick}>
            {isOpen?
                "엘라어 → 한글"
            :
                "한글 → 엘라어"
            }
        </div>
    </div>
}