import Users from '../../../../../backing/services/Mongo/Models/Users'

class UsersController {
  async createUser(args){
    const user = new Users({...args})
    try {
      await user.save()
      return user
    } catch (e) {
      throw new Error(e)
    }
  }
}

export {UsersController}