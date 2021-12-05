import {Job,mkJobmodal} from "./search/job"
import { mkEngModal,addEngButton } from "./search/engrave";
import { observ } from "./observ";

export class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target; //app이 들어옴
    let Data = new observ()
    //모달 내용 생성
    mkJobmodal(Data)//직업
    mkEngModal(Data)//각인

    Job(Data)//메인화면 직업 선택 부분
    addEngButton()//각인 추가
  }
}
