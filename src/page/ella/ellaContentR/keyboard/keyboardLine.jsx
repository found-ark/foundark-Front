import Key from "./key"

export default function KeyboardLine({line}){

    return <div className="keyboardLine">
        {line.map((ele)=>
            <Key key={ele} value={ele}/>
        )}
    </div>

}
