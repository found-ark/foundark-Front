import {initHarbImg} from '../imageloader'
export default class App {
  $target = null;
  data = [];

  constructor($target) {
    console.log("하브렐계산기")
  }
  init(){
    let wrap = document.querySelector(".content")
    wrap.innerHTML = ''
    initHarbImg()
  }
  render(){
      this.init()
  }
}
