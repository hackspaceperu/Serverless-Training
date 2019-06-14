import {dbHackspace} from '../../../config/mongo'
import {Schema} from 'mongoose'


const socialApps = new Schema({
    name: {type: String, default: null},
    description: {type: String, default: null}
})

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    fullName: {type: String, default: null},
    socialNetworks: [socialApps]
})


const Users = dbHackspace.model('Users', userSchema)

export default Users