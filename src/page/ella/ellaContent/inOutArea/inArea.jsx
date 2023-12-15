import { useEffect } from "react";
import { Str2sepHan,sepHan2Str } from "../../ellaTrans"
import { useDispatch, useSelector } from "react-redux"
import { hanInput, hanTextInput, setTimer } from "../../../../reducer/ella";


export default function InArea(){

    const isOpen = useSelector((state)=>state.ella.isOpen);
    const ellaText = useSelector((state)=>state.ella.ellaText);
    const hanTextStr = useSelector((state)=>state.ella.hanTextStr);
    const timer = useSelector((state)=>state.ella.timer);


    const dispatch = useDispatch();

    useEffect(()=>{

    },[isOpen])

    useEffect(()=>{
        //입력
        if(timer!==null){
            clearTimeout(timer)
        }
        //canvas?
        dispatch(setTimer({timer:setTimeout(function(){
            dispatch(hanInput({value:Str2sepHan(hanTextStr)}));
        }, 1000)}))

    },[hanTextStr])

    function input(e){
        dispatch(hanTextInput({value:e.target.value}));
    }

    return <div className="inputArea" 
    style={{transition: "1000ms",transform:isOpen?"translate(0px, 0px)":"translate(0px, 167px)"}}
    >
        <div className="title">한글</div>
        <div className="input">
            <textarea onChange={input} style={{display:isOpen?"block":"none"}} value={hanTextStr}></textarea>
            <div className="textArea2" style={{display:isOpen?"none":"block"}}>{sepHan2Str(ellaText)}</div>
        </div>
    </div>
}