import {Job} from "./search/job"
import { observ } from "./observ";

export class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target; //app이 들어옴
    let Data = new observ()
    Job(Data)
  }
}
