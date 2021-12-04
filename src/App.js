import {optionToggle} from'./option/optionToggle' 
import {GoSearch} from "./search/goSearch"
import {CrawlTime} from "./result/crawlTime"
import { rangeSlider } from './range';
import { initSelectActivate } from './activateSelect';
import { addGakSelect } from './search/gakEvent';
import { classSelectEvent } from './search/classSelect';

export class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target; //app이 들어옴
    initSelectActivate()//선택 활성화 함수
    rangeSlider()//슬라이더밑 퍼센트 표시 함수
    //크롤 시간 확인
    CrawlTime(document.querySelector(".update_time"))
    //option 영역
    let optionButton = document.querySelector(".option_button")
    let optionContent = document.querySelector(".option_content")
    optionToggle({"$button":optionButton,"$target":optionContent})

    //찾기

    GoSearch()

    //추가버튼
    addGakSelect(document.querySelector(".add_gakin .add_gakin_button"))

    //직업 선택 이벤트
    classSelectEvent()
  }
}
