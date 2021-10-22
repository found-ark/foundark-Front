//api 용
export async function test1(data){
  console.log()
    let res = await fetch(process.env.IP+"test/b",{
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

export async function getTime(){
  let res = await fetch(process.env.IP+"test/time",{
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