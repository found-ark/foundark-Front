
export class OptionB {  
    constructor({ $button,$target }) {
      console.log("고고")
      this.$optionButton = $button; 
      console.log("fefe") 
      this.$optionWrap = $target;  
      console.log("고고2")
      console.log(this.$optionButton)
      console.log(this.$optionWrap)

      //optionWrap에 클릭 이벤트 넣기
      this.$optionButton.addEventListener("click",()=>{
        console.log("?")
        this.$optionWrap.classList.toggle('close')

      })
    }
  
    setState() {
    }
  
    render() {
    }
  }
  