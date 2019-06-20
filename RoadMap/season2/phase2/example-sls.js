const freeAccess = [
  'domain1',
  'domain2'
]


const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': stateOrigin ? host : freeAccess[0],
    'Access-Control-Allow-Credentials': false,
    'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Origin'
}


const p = () => new Promise((resolve, reject)=> resolve({message: 'El mundo es bonito'}))

const resolveResponse = (data = {}, statusCode = 404)=>{
    return {
        statusCode,
        headers,
        body: JSON.stringify(data)
    }
}


const verifyCors = (host) => {

    if (host) {
    freeAccess.forEach(freeAccess => {
      if (!stateOrigin && host.match(freeAccess)) {
        return true
      } else {
        return false
      }
    })
  }
}
export const hello = async (event) => {
  context.callbackWaitsForEmptyEventLoop = false
  const host = event.headers.Origin || event.headers.origin
  if(!verifyCors(host)) resolveResponse({}, 401)
    try {
        let data = await p()
        resolveResponse(data, 200)
    } catch (error) {
        resolveResponse(error.message, 404)
    }
};
