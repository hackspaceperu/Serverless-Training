const doTaskWithoutErrorHandling = (err, otherTask) =>{
    if(err){
        console.error(`Check this: ${err}`)
    }
    return otherTask
}
//
const doTaskWithErrorHandling = (err, otherTask)=>{
    if(err){
        throw new Error(`Check this: ${err}`)
    }
    return otherTask
}