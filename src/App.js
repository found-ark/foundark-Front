import {OptionB} from'./option/optionB' 
import {GoSearch} from "./search/goSearch"
import {CrawlTime} from "./result/crawlTime"

export class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target; //app이 들어옴
    //크롤 시간 확인
    CrawlTime(document.querySelector(".update_time"))
    //option 영역
    let optionButton = document.querySelector(".option_button")
    let optionContent = document.querySelector(".option_content")
    new OptionB({"$button":optionButton,"$target":optionContent})

    //찾기

    GoSearch()
  }
}
