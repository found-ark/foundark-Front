import {dummyData,dummyTime} from "./dummy"

//error 핸들링
let handleError = function (err) {
  console.log(err)
  return {error:true};
};
//api 용
export async function request(method,url,data=undefined){
  let headers = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'same-origin',
    mode:"cors",
  }
  if(data){
    headers["body"] = JSON.stringify(data)
  }

  let response = await fetch(url,headers)
  .then((res)=>{
    if(res.status===200){
      return res.json()
    }else{
      throw `error status ${res.status}`
    }
  }).catch(handleError)
  return response
}


export async function dummyGetData(){
  
  let response = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(dummyData)
    }, 10);
  })

  return response
}

export async function dummyGetTime(){
  let response = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(dummyTime)
    }, 10);
  })
  return response
}