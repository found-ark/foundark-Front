import { useSelector } from "react-redux"
import KeyboardContent from "./keyboardContent"

export default function Keyboard(){

    const isOpen = useSelector((state)=>state.ella.isOpen);


    return <div className="keyboardWindow">
        <div className="keyboardWrap" style={{
            transition : "1000ms",
            transform : isOpen?"translate(0px, -250px)":"translate(0px, 0px)"}}>
            <KeyboardContent/>
        </div>
    </div>
}