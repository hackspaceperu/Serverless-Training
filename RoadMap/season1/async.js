let message = {
    success: 'Hello World',
    error: 'Bye world'
}

const getTask = ({message, fail}) => {
    return new Promise((resolve, reject) => {
        const {success = 'All Success', error = 'Get Errors'} = message
        setTimeout(() => {
            if(fail)
                reject({error})
            else 
                resolve({success})
        }, 2000)
    })
}

async function fetchTask(params){
    try {
        Task = await getTask(params)
        return console.log(Task)

    } catch (error) {
        console.log(error)
    }
}

fetchTask({message, fail: true})

