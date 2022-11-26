import {initHarbImg} from '../imageloader'
import harbContent from './harbcontent';
export default class App {
  $target = null;
  data = [];

  constructor($target) {
    console.log("하브렐계산기")
  }
  init(){
    let wrap = document.querySelector(".content")
    wrap.innerHTML = ''
    //타이틀 및 이미지 생성
    initHarbImg()

    //맵 생성
    wrap.appendChild(harbContent())

  }
  render(){
      this.init()
  }
}
