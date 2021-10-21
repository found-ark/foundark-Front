
export class OptionB {  
    constructor({ $button,$target }) {
      this.$optionButton = $button; 
      this.$optionWrap = $target;  
      //optionWrap에 클릭 이벤트 넣기
      this.$optionButton.addEventListener("click",()=>{
        this.$optionWrap.classList.toggle('close')

      })
    }
  
    setState() {
    }
  
    render() {
    }
  }
  