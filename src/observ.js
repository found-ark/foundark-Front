export function observ(){
    this.job = "버서커"
    this.jobList = []
    this.getJob = ()=>{
        return this.job
    }
    this.setJob = (altjob)=>{
        this.job = altjob
        this.jobList.forEach((ele)=>{
            ele()
        })
    }
    this.subJob = (func)=>{
        this.jobList.push(func)
    }
}