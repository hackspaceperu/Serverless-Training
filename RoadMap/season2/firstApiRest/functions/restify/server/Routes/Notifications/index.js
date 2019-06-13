import { Success, NotFound, InternalServerError } from '../../Responses/Messages'
import {NotFoundException} from '../../Responses/Exceptions'

const RR = require('restify-router')

const router = new RR.Router()

router.get('/test', async (req, res)=>{
    try {
        const data = {
            xiaomi: 'Good!',
            huawei: 'I miss you baby',
            google: 'i love you'
        }
        Success(res, 'Todo Ok', data)
    } catch (exception) {
        if(exception instanceof NotFoundException){
            NotFound(res, exception.message)
        } else{
            InternalServerError(res, exception.message)
        }
    }
})

export default router