export function TransText(){
    this.hangles = [[]]
    this.draw = undefined
    this.clearText = ()=>{
        this.hangles=[[]]
        this.draw(this.hangles)
    }
    this.setDraw = (job)=>{
        this.draw = job
    }
    this.addHangle = (input)=>{
        //한글만
        this.hangles[this.hangles.length-1].push(input)
        // //캔버스 입력
        this.draw(this.hangles)
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
        this.draw(this.hangles)
    }
    this.gethangles=()=>{
        return this.hangles
    }
}