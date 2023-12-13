import EllaContent from "./ellaContent";
import {initEllaImg} from '../imageloader'

export default class App {
  $target = null;
  data = [];

  constructor($target) {
    console.log("엘라어")
  }
  init(){
    let wrap = document.querySelector(".content")
    wrap.innerHTML = ''
    //타이틀 및 이미지 생성
    initEllaImg()
    wrap.appendChild(EllaContent())

  }
  render(){
      this.init()
  }
}
