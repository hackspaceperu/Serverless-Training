import { Success, NotFound, InternalServerError } from '../../Responses/Messages'
import {NotFoundException} from '../../Responses/Exceptions'

import {UsersController} from '../../Controllers/Users'
//import sendSMS from donde este
const users = new UsersController()

const RR = require('restify-router')

const router = new RR.Router()

router.post('/',async(req,res)=>{
  try{
      const user=await users.createUser(req.body)
        Success(res,'Success Response',user)
    }catch(exeption){
      if(exception instanceof NotFoundException)
          NotFound(res,exception.message)
        else
            InternalServerError(res,exception.message)
    }
})

export default router
