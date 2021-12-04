import {emblem} from "../util"
{/* <div class="select_form">
<select name="" id="">
    <option>버서커</option>
    <option>디스트로이어</option>
    <option>워로드</option>
    <option>홀리나이트</option>
    <option>아르카나</option>
    <option>서머너</option>
    <option>바드</option>
    <option>소서리스</option>
    <option>배틀마스터</option>
    <option>인파이터</option>
    <option>기공사</option>
    <option>창술사</option>
    <option>스트라이커</option>
    <option>블레이드</option>
    <option>데모닉</option>
    <option>리퍼</option>
    <option>호크아이</option>
    <option>데빌헌터</option>
    <option>블래스터</option>
    <option>스카우터</option>
    <option>건슬링어</option>
</select>
</div> */}
/**
 * 직업 영역
 * 클릭시 새로운 직업 선택가능
 */
export function Job(Data){
    let jobdiv = document.querySelector(".job")
    
    jobdiv.addEventListener("click",()=>{//직업 변경 창 오픈 = 모달 오픈
        
    })


}

/**
 * 직업 선택 모달내부에 선택 버튼 생성
 */
export function mkJobmodal(Data){
    let modal = document.querySelector("#job_modal .modal_window .modal_content")

    
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
        })
    }
    return content
}


{/* <div class="job">
                    <div class="job_title">
                        무도가 클래스
                    </div>
                    <div class="job_contents">
                        <div class="job_content">
                            <div class="job_img">
                            <img src = "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/emblem_infighter.png">
                            </div>
                            <span> 인파이터 </span>
                        </div>
                        <div class="job_content">
                            <div class="job_img">
                            <img src = "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/emblem_soulmaster.png">
                            </div>
                            <span> 기공사 </span>
                        </div>
                        <div class="job_content">
                            <div class="job_img">
                            <img src = "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/emblem_lancemaster.png">
                            </div>
                            <span> 창술사 </span>
                        </div>
                        <div class="job_content">
                            <div class="job_img">
                            <img src = "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/emblem_battlemaster.png">
                            </div>
                            <span> 배틀마스터 </span>
                        </div>
                        
                        <div class="job_content">
                            <div class="job_img">
                            <img src = "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/emblem_striker.png">
                            </div>
                            <span> 스트라이커 </span>
                        </div>
                    </div>
                </div> */}