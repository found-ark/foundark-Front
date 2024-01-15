import Explain from './explain'
import Keyboard from './keyboard'
import InOutArea from './inOutArea'
import ConvertButton from "./convertButton"

export default function EllaContent(){
    return <div className='ella'>
        <InOutArea/>
        <ConvertButton/>
        <Keyboard/>
        <Explain/>
    </div>
}