if (!global._babelPolyfill) {
   require('babel-polyfill');
}

import {NotFoundException} from '../functions/example/server/Responses/Exceptions'
import {Success,Forbidden,InternalServerError,NotFound} from '../functions/example/server/Responses/Messages'

const freeAccess = [
  'mydominio',
  'mydominio2'
]

const headers = {
  Accept: 'application/json',
    'Content-Type': 'application/json',
//    'Access-Control-Allow-Origin': stateOrigin ? host : freeAccess[0],
    'Access-Control-Allow-Credentials': false,
    'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Origin'
}

const verifyCors = (origin) => {
  if (freeAccess.includes(origin)) {
    headers['Access-Control-Allow-Origin']=origin
    return true
    // freeAccess.includes(freeAcc => {
    //   if (!stateOrigin && host.match(freeAcc)) {
    //     result= true
    //   } 
    // })

  }
  headers['Access-Control-Allow-Origin']=freeAccess[0]
  return false
}


const p = () => new Promise((resolve, reject)=> resolve({message: 'Primer mensaje'}))

export const hello = async (event,context) => {
  context.callbackWaitsForEmptyEventLoop = false
  const origin = event.headers.Origin || event.headers.origin
  if(!verifyCors(origin)) return Forbidden(headers, {})
  try {
    let data = await p()
    return Success(headers, data)
  }catch (exception) {
    if(exception instanceof NotFoundException){
        NotFound(headers)
    } else{
        InternalServerError(headers)
    }
  }
};

/*const resolveResponse = (data = {}, statusCode = 404)=>{
  return {
      statusCode,
      headers,
      body: JSON.stringify(data)
  }
}*/