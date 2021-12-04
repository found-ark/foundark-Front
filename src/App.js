import {Job,mkJobmodal} from "./search/job"
import { observ } from "./observ";

export class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target; //app이 들어옴
    let Data = new observ()
    mkJobmodal(Data)//모달 내용 생성
    Job(Data)//메인화면 직업 선택 부분
  }
}
