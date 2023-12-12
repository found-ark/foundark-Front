import { useDispatch } from "react-redux";
import { addBlueCount,attack } from "../../../../reducer/harbrel";

export default function BlueInfoDiv({ list, infoText }) {
  //다음 파메 시간
  const dispatch = useDispatch();
  function onClick(){
    //blue+1
    dispatch(addBlueCount());
    //attack
    list.map((id) => {
      dispatch(attack({index:id,value:1}));
    });
  }
  return (
    <div className="blueRecommendWrap" onClick={onClick}>
      <div className="blueRecommendText">
        {infoText} : {list.join()}
      </div>
      <div className="blueRecommendButton default_button">파메 놓기</div>
    </div>
  );
}
