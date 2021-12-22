import {Job,mkJobmodal} from "./search/job"
import { mkEngModal,addEngButton } from "./search/engrave";
import { observ } from "./observ";
import {abilCheck} from "./option/ability"
import {receipeCheck} from "./option/receipe"
import { rangeSlider } from "./range";
import {initImg} from "./imageloader"

export class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target; //app이 들어옴
    let Data = new observ()
    //이미지 불러오기
    initImg()

    //모달 내용 생성
    mkJobmodal(Data)//직업
    mkEngModal(Data)//각인

    Job(Data)//메인화면 직업 선택 부분
    addEngButton()//각인 추가
    
    //옵션
    abilCheck()//어빌리티 체크 유무
    receipeCheck(Data)//각인서 체크

    //슬라이더 퍼센트
    rangeSlider()

    
  }
}
