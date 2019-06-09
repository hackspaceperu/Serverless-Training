const getTask = ({message, fail}) => {
    return new Promise((resolve, reject) => {
        const {success = 'All Success', error = 'Get Errors'} = message
        setTimeout(() => {
            if(!fail)
                resolve({sms: success})
            else 
                reject({sms: error})
        }, 2000)
    })
}

let message = {
    success: 'Hello World',
    error: 'Bye world'
}

getTask({message, fail: false})
    .then(({sms})=> console.log(`OK ==> ${sms}`))
    .catch(({sms})=> console.log(`ERROR ==> ${sms}`))