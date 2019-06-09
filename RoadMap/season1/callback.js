let messages = {
    alert: 'Sirenas por el mundo',
    error: 'GG',
    success: 'Ok',
    timeout: {
        pre: 'Starting...',
        final: 'Finally...'
    }
}

const getTimes = ()=>{
    console.log('Starting Times at:', (new Date()).toLocaleString('es-PE'))
    let response = {}
    setTimeout(()=>{
        response = {message: 'Finish Time'}
    }, 2000)
    return response
}

console.log(getTimes())

const getTask = callback => {
    console.log(messages.timeout.pre)
    setTimeout(()=>{(callback({message: messages.timeout.final}))}, 2000)
}


getTask(Task=>{
    console.log(Task.message)
})