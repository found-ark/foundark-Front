import { useSelector } from "react-redux"

export default function OutArea(){
    const isOpen = useSelector((state)=>state.ella.isOpen);

    return <div className="outputArea" 
    style={{transition: "1000ms",transform:isOpen?"translate(0px, 0px)":"translate(0px, -117px)"}}
    >
        <div className="title">엘라어</div>
        <div className="output">
            <div className="canvasWrap">
                <canvas></canvas>
            </div>
        </div>
    </div>
}