import { Success, NotFound, InternalServerError } from '../../Responses/Messages'
import {NotFoundException} from '../../Responses/Exceptions'

import {Notifications} from '../../Controllers/Notifications'
import {
    sendNotifications,
    sendSMS
} from '../../../../../backing/services/Amazon/sns'

const notify = new Notifications()

const RR = require('restify-router')

const router = new RR.Router()

router.get('/massive', async (req, res)=>{
    try {
        let usersNotify = await notify.getUsers({limit: 10})
        sendNotifications(usersNotify)
        Success(res, 'Todo Ok', data)
    } catch (exception) {
        if(exception instanceof NotFoundException){
            NotFound(res, exception.message)
        } else{
            InternalServerError(res, exception.message)
        }
    }
})

router.get('/SMS',async(req,res)=>{
    try{
        const Message='Te lo envio desde el inframundo @nickname xd'
        const PhoneNumber='+51949989175'
        const results=await sendSMS(Message,PhoneNumber)
        Success(res,'Success Response',results)
    }catch(exeption){
        if(exception instanceof NotFoundException)
            NotFound(res,exception.message)
        else
            InternalServerError(res,exception.message)
    }
})

router.get('/test',(req,res)=>{
    try{
        const data={
            xiaomi:'good',
            huawei: 'I miss you',
            google:'I love you'
        }
        Success(res,'Success Response',data)
    }catch(exeption){
        if(exception instanceof NotFoundException)
            NotFound(res,exception.message)
        else
            InternalServerError(res,exception.message)
    }
})
// todo es conceptualmente funcional :v
// si pasa algo, mande su pull request

export default router