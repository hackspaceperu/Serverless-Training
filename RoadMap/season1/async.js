const getTask = ({message, fail}) => {
    return new Promise((resolve, reject) => {
        const {success = 'All Success', error = 'Get Errors'} = message
        setTimeout(() => {
            if(!fail)
                resolve({success})
            else 
                reject({error})
        }, 2000)
    })
}

let message = {
    success: 'Hello World',
    error: 'Bye world'
}

async function fetchTask(params){
    try {
        Task = await getTask(params)
        return console.log(task)

    } catch (error) {
        console.log(error)
    }
}

fetchTask({message, fail: false})

