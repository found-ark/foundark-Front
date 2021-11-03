
export function optionToggle({ $button,$target }) {  
  let $optionButton = $button; 
  let $optionWrap = $target;  
  let isOpen = !$optionWrap.classList.contains("close")
  //optionWrap에 클릭 이벤트 넣기
  $optionButton.addEventListener("click",()=>{
    if(isOpen){//toggle이 작동을 안함
      $optionWrap.classList.add('close')
      isOpen = false
    }else{
      $optionWrap.classList.remove('close')
      isOpen = true
    }

  })
}
  