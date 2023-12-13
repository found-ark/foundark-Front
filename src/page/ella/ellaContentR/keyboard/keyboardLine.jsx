import Key from "./key"

export default function KeyboardLine({line}){

    return <div className="keyboardLine">
        {line.forEach((ele)=>
            <Key key={ele}/>
        )}
    </div>

}
