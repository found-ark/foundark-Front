export default function BlueInfoDiv({ list, infoText, action }) {
  //다음 파메 시간

  return (
    <div className="blueRecommendWrap" onClick={action}>
      <div className="blueRecommendText">
        {infoText} : {list.join()}
      </div>
      <div className="blueRecommendButton default_button">파메 놓기</div>
    </div>
  );
}
