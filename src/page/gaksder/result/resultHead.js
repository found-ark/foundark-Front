export function ResultHead(){
    let head = document.createElement("div")
    head.className = "result_element_head"
    head.innerHTML = `<div class="result_summary_head">
                        <p><b>요약</b></p>
                    </div>
                    <div class="acc_head">
                        <p><b>목걸이</b></p>
                    </div>
                    <div class="acc_head">
                        <p><b>귀걸이</b></p>
                    </div>
                    <div class="acc_head">
                        <p><b>귀걸이</b></p>
                    </div>
                    <div class="acc_head">
                        <p><b>반지</b></p>
                    </div>
                    <div class="acc_head">
                        <p><b>반지</b></p>
                    </div>
                    <div class="acc_abil_head">
                        <p><b>각인서</b></p>
                    </div>
                    <div class="acc_abil_head">
                        <p><b>각인서</b></p>
                    </div>
                    <div class="acc_abil_head">
                        <p><b>돌</b></p>
                    </div>`
    return head;
}