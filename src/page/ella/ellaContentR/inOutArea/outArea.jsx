import { useSelector } from "react-redux"
import { drawElla } from "../../ellaTrans";
import { useEffect, useRef } from "react";

export default function OutArea(){
    const canvasRef = useRef(null);

    const isOpen = useSelector((state)=>state.ella.isOpen);
    const hanText = useSelector((state)=>state.ella.hanText);
    const ellaText = useSelector((state)=>state.ella.ellaText);


    useEffect(()=>{
        drawElla(hanText,canvasRef.current);
    },[hanText])

    useEffect(()=>{
        drawElla(ellaText,canvasRef.current);
    },[ellaText])
    
    return <div className="outputArea" 
    style={{transition: "1000ms",transform:isOpen?"translate(0px, 0px)":"translate(0px, -117px)"}}
    >
        <div className="title">엘라어</div>
        <div className="output">
            <div className="canvasWrap">
                <canvas ref={canvasRef}></canvas>
            </div>
        </div>
    </div>
}