export function observ(){
    this.job = "버서커"

    this.getJob = ()=>{
        return this.job
    }
    this.setJob = (altjob)=>{
        this.job = altjob
    }
}