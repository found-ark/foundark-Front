import { useState } from "react";
import {Str2sepHan,drawElla } from "../../ellaTrans"
import { useSelector } from "react-redux"

export default function InArea(){

    const [timer,setTimer] = useState(null);
    const isOpen = useSelector((state)=>state.ella.isOpen);

    function input(e){
        const value = e.target.value;
        //입력
        if(timer!==null){
            clearTimeout(timer)
        }
        //canvas?
        setTimer(setTimeout(function(){
            console.log("작성하자!")
            // drawElla(Str2sepHan(value),canvas)
        }, 1000));
    }

    return <div className="inputArea" style={{transition: "1000ms",transform:isOpen?"translate(0px, 0px)":"translate(0px, 167px)"}}>
        <div className="title">한글</div>
        <div className="input" style={{display:"none"}}>
            <textarea onInput={input}></textarea>
            <div className="textArea2"></div>
        </div>
    </div>
}