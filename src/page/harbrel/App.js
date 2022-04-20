export default class App {
  $target = null;
  data = [];

  constructor($target) {
    console.log("하브렐계산기")
  }
  init(){
    let content = `준비중`

    let wrap = document.querySelector(".content")
    wrap.innerHTML = ''
    wrap.innerHTML = content
  }
  render(){
      this.init()
  }
}
