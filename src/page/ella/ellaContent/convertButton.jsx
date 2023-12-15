import { useDispatch, useSelector } from "react-redux"
import { open, clear } from "../../../reducer/ella";

export default function ConvertButton(){
    const dispatch = useDispatch();
    const isOpen = useSelector((state)=>state.ella.isOpen);

    function onClick(){

        dispatch(open());
        dispatch(clear());
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