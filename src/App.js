import {OptionB} from'./optionB' 
import {GoSearch} from "./goSearch"
export class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target; //app이 들어옴

    //option 영역
    let optionButton = document.querySelector(".option_button")
    let optionContent = document.querySelector(".option_content")
    new OptionB({"$button":optionButton,"$target":optionContent})

    //찾기

    GoSearch()
  }
}
