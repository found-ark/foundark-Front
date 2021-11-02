import {optionToggle} from'./option/optionToggle' 
import {GoSearch} from "./search/goSearch"
import {CrawlTime} from "./result/crawlTime"
import { rangeSlider } from './range';
export class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target; //app이 들어옴
    rangeSlider()
    //크롤 시간 확인
    CrawlTime(document.querySelector(".update_time"))
    //option 영역
    let optionButton = document.querySelector(".option_button")
    let optionContent = document.querySelector(".option_content")
    optionToggle({"$button":optionButton,"$target":optionContent})

    //찾기

    GoSearch()
  }
}
