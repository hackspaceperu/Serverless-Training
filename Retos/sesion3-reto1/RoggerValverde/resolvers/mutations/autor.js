const models = require('../../models')

const addAutor={
  command: 'addAutor',
  desc: 'Add a new autor',
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
      type: 'string'
    }
  },
  handler(argv) {
    const autor = models.autorModel.addAutor(argv.nombres, argv.apellidos, argv.nacionalidad)
    if (autor) {
      console.log(autor)
    }
  }
}

const updateAutor={
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
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const autor = models.autorModel.updateAutor(argv.nombres, argv.apellidos, argv.nacionalidad)
    if (autor) {
      console.log(autor)
    }
  }
}

const removeAutor={
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
}

module.exports={
  addAutor,
  updateAutor,
  removeAutor
}