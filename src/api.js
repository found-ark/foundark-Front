//api 용
let baseurl = "http://localhost:5000"

export async function test1(){
    let res = await fetch("http://localhost:5000/test/b",{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'same-origin',
        mode:"cors"
      })
    let response = await res.json()
    // console.log(response)
    // console.log(JSON.stringify(response))
    return response
}