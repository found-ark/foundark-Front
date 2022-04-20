import {emblem} from "../util"
/**
 * 직업 영역
 * 클릭시 새로운 직업 선택가능
 */
export function Job(Data){
    let jobdiv = document.querySelector(".job")

    jobdiv.addEventListener("click",()=>{//직업 변경 창 오픈 = 모달 오픈
        jobModalToggle()
    })

    showJob(Data)
}

/**
 * 메인 직업 엠블럼 출력 부분
 */
function showJob(Data){
    let jobdiv = document.querySelector(".job")
    jobdiv.innerHTML=""
    jobdiv.appendChild(mkJobContent(Data.getJob()))
}

function jobModalToggle(){
    let modal = document.querySelector("#job_modal")
    modal.classList.toggle("modal_close")
}

/**
 * 직업 선택 모달내부에 선택 버튼 생성
 */
export function mkJobmodal(Data){
    let modal = document.querySelector("#job_modal .modal_window .modal_content")

    //닫기 활성화
    let close = document.querySelector("#job_modal .close")
    close.addEventListener("click",()=>{
        jobModalToggle()
    })
    //초기화
    modal.innerHTML = ``
    //입력
    modal.appendChild(mkJob("전사 계열",["디스트로이어","워로드","버서커","홀리나이트"],Data))
    modal.appendChild(mkJob("무도가 계열",["배틀마스터","인파이터","기공사","창술사","스트라이커"],Data))
    modal.appendChild(mkJob("헌터 계열",["데빌헌터","블래스터","호크아이","스카우터","건슬링어"],Data))
    modal.appendChild(mkJob("마법사 계열",["바드","서머너","아르카나","소서리스"],Data))
    modal.appendChild(mkJob("암살자 계열",["블레이드","데모닉","리퍼"],Data))

}
function mkJob(title,jobs,Data){
    let job = document.createElement("div")
    job.className="job"

    let titlediv = document.createElement("div")
    titlediv.className = "job_title"
    titlediv.appendChild(document.createTextNode(title))

    let jobcontents = document.createElement("div")
    jobcontents.className="job_contents"
    jobs.forEach((ele)=>{
        jobcontents.appendChild(mkJobContent(ele,Data))
    })

    job.appendChild(titlediv)
    job.appendChild(jobcontents)

    return job
}
function mkJobContent(jobName,Data=undefined){
    let content = document.createElement("div")
    content.className="job_content"

    content.innerHTML = `
    <div class="job_img">
        <img src = "${emblem[jobName]}">
    </div>
    <span> ${jobName} </span>`

    //해당 직업 클릭시
    //모달 닫기
    //해당 직업선택 작동
    if(Data!==undefined){
        content.addEventListener('click',()=>{
            Data.setJob(jobName)//해당 직업 선택
            jobModalToggle()//모달 닫기
            showJob(Data)//선택한 직업으로 메인 출력
        })
    }
    return content
}
