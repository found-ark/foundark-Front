//api 용
let baseurl = "http://localhost:5000"

export async function test1(data){
    let res = await fetch("http://localhost:5000/test/b",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'same-origin',
        mode:"cors",
        body: JSON.stringify(data)
      })
    let response = await res.json()
    // console.log(response)
    // console.log(JSON.stringify(response))
    return response
}

export async function getTime(data){
  let res = await fetch("http://localhost:5000/test/time",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'same-origin',
      mode:"cors",
    })
  let response = await res.json()
  // console.log(response)
  // console.log(JSON.stringify(response))
  return response
}