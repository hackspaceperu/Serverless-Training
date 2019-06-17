import {dbHackspace} from '../../../config/mongo'
import {Schema} from 'mongoose'


const socialApps = new Schema({
  name: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  }
})

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  fullName: {type: String, default: null},
  socialNetworks: [socialApps]
})

userSchema.pre('save', async function (next) {
  const user = this

  if (user.firstName&&user.lastName) {
      user.fullName = user.firstName + ' ' + user.lastName
  }
  next()
})

const Users = dbHackspace.model('Users', userSchema)

export default Users