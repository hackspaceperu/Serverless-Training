const mongoose = require('mongoose')

import { params } from './params'

const { mongo:{host:{hackspce}} } = params

const dbHackspace = mongoose.createConnection(hackspce, { useNewUrlParser: true })

export { dbHackspace }
