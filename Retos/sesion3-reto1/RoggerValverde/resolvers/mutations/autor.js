const models = require('../../models')

const addAutor={
  command: 'addAutor',
  desc: 'Agrega un nuevo autor',
  builder: {
    nombres: {
      describe: 'Nombres del autor',
      demandOption: true,
      type: 'string'
    },
    apellidos: {
      describe: 'Apellidos del autor',
      demandOption: true,
      type: 'string'
    },
    correo: {
      describe: 'Nacionalidad del autor',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const autor = models.autorModel.addAutor(
      argv.nombres,
      argv.apellidos,
      argv.nacionalidad)
    if (autor) {
      console.log(autor)
    }
  }
}

const updateAutor={
  command: 'updateAutor',
  describe: 'Actualiza la nacionalidad de un autor',
  builder: {
    nombres: {
      describe: 'Nombres del autor',
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
    const autor = models.autorModel.updateAutor(
      argv.nombres,
      argv.apellidos,
      argv.nacionalidad)
    if (autor) {
      console.log(autor)
    }
  }
}

const removeAutor={
  command: 'removeAutor',
  describe: 'Remueve un autor',
  builder: {
    nombres: {
      describe: 'Nombres del autor',
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
    models.autorModel.removeAutor(
      argv.nombres,
      argv.apellidos)
  }
}

module.exports={
  addAutor,
  updateAutor,
  removeAutor
}