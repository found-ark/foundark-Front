export function TransText(){
    this.hangles = [[]]
    this.jobs = []
    this.clearText = ()=>{
        this.hangles=[[]]
        this.goJob()
    }
    this.setJob = (job)=>{
        this.jobs.push(job)
    }
    this.goJob = ()=>{
        this.jobs.forEach(ele=>{
            ele(this.hangles)
        })
    }
    this.addHangle = (input)=>{
        //한글만
        this.hangles[this.hangles.length-1].push(input)
        // //캔버스 입력
        this.goJob()
    }
    this.newLine = ()=>{
        this.hangles.push([])
    }
    this.delHangle = ()=>{
        if(this.hangles[this.hangles.length-1].pop()===undefined){
            if(this.hangles.length>1){
                //현재 줄 삭제
                this.hangles.pop()
                //다음줄 한글자 삭제
                this.hangles[this.hangles.length-1].pop()
            }
        }
        this.goJob()
    }
    this.gethangles=()=>{
        return this.hangles
    }
}