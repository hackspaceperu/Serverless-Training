const {yargs} = require('../config/yargs')
// import colors from 'colors'
const factory = require('./FactoryEntity')
let f = new factory()
let e = f.buildEntity(yargs)
console.log(e)