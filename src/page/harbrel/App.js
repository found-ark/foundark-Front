export default class App {
  $target = null;
  data = [];

  constructor($target) {
    console.log("하브렐계산기")
  }
  init(){
    let content = `
    <div class="harb">
      <div class="harbCount">
      </div>
      <div class="harbContent">
      </div>
      <div class="harbMap">
        <div class="harbLine">
          <div class="harbSec">
            <div class="text">
              test
            </div>
          </div>
          <div class="harbSec">
            <div class="text">
              test
            </div>
          </div>
          <div class="harbSec">
            <div class="text">
              test
            </div>
          </div>
        </div>
        <div class="harbLine">
          <div class="harbSec">
            <div class="text">
              test
            </div>
          </div>
          <div class="harbSec">
            <div class="text">
              test
            </div>
          </div>
          <div class="harbSec">
            <div class="text">
              test
            </div>
          </div>
        </div>
        <div class="harbLine">
          <div class="harbSec">
            <div class="text">
              test
            </div>
          </div>
          <div class="harbSec">
            <div class="text">
              test
            </div>
          </div>
          <div class="harbSec">
            <div class="text">
              test
            </div>
          </div>
        </div>
      </div>
    </div>
    `

    let wrap = document.querySelector(".content")
    wrap.innerHTML = ''
    wrap.innerHTML = content
  }
  render(){
      this.init()
  }
}
