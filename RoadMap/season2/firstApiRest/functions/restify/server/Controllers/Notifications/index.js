import Users from '../../../../../backing/services/Mongo/Models/Users'

class Notifications {
    async getUsers({skip = 1, limit = 10}){
        await Users.find().limit(limit).skip(skip).lean()
    }
    async getUsersById({id}){
        let response = await Users.findById(id).lean()
        return response
    }
}

export {Notifications}