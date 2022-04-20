export function rangeSlider(){
    let slider = document.querySelectorAll('.slidecontainer');
    let range = document.querySelectorAll('.slider');
    let value = document.querySelectorAll('.slider_value');
      
    slider.forEach((ele,i)=>{
        ele.addEventListener("change",()=>{
            value[i].innerHTML = `${Number(range[i].value)}%`
        })
    });
  };
  