import { Success, NotFound, InternalServerError } from '../../Responses/Messages'
import {NotFoundException} from '../../Responses/Exceptions'

import {Notifications} from '../../Controllers/Notifications'
import {sendNotifications} from '../../../../../backing/services/Amazon/sns'
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

// todo es conceptualmente funcional :v
// si pasa algo, mande su pull request

export default router