const yargs = require('yargs')
const models = require('./models')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'addAutor',
  describe: 'Add a new autor',
  builder: {
    nombres: {
      describe: 'Nombre del autor',
      demandOption: true,
      type: 'string'
    },
    apellidos: {
      describe: 'Apellidos del autor',
      demandOption: true,
      type: 'string'
    },
    nacionalidad: {
      describe: 'Nacionalidad del autor',
      //demandOption: false,
      type: 'string'
    }
  },
  handler(argv) {
    models.autorModel.addAutor(argv.nombres, argv.apellidos, argv.nacionalidad)
  }
})

// Create remove command
yargs.command({
  command: 'removeAutor',
  describe: 'Remove an autor',
  builder: {
    nombres: {
      describe: 'Nombre del autor',
      demandOption: true,
      type: 'string'
    },
    apellidos: {
      describe: 'Apellidos del autor',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    models.autorModel.removeAutor(argv.nombres, argv.apellidos)
  }
})

// Create list command
yargs.command({
  command: 'listAutores',
  describe: 'List your autores',
  handler() {
    models.autorModel.listAutores()
  }
})

// Create read command
yargs.command({
  command: 'readAutor',
  describe: 'Read an autor',
  builder: {
    nombres: {
      describe: 'Nombre del autor',
      demandOption: true,
      type: 'string'
    },
    apellidos: {
      describe: 'Apellidos del autor',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    models.autorModel.readAutor(argv.nombres, argv.apellidos)
  }
})

// Create update command
yargs.command({
  command: 'updateAutor',
  describe: 'Update an autor nacionalidad',
  builder: {
    nombres: {
      describe: 'Nombre del autor',
      demandOption: true,
      type: 'string'
    },
    apellidos: {
      describe: 'Apellidos del autor',
      demandOption: true,
      type: 'string'
    },
    nacionalidad: {
      describe: 'Nacionalidad del autor',
      //demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    models.autorModel.updateAutor(argv.nombres, argv.apellidos, argv.nacionalidad)
  }
})

yargs.parse()