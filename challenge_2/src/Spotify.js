const {
    create,
    deleteById,
    showById,
    toListOf} = require('./crud'),
    {yargs} = require('../config/yargs')

let command = yargs._[0]
if(command.startsWith('create')) return create(yargs)
if(command.startsWith('to_list')) return toListOf(yargs)
if(command.startsWith('delete')) return deleteById(yargs)
if(command.startsWith('show')) return showById(yargs)
else return console.log('Comando desconocido')