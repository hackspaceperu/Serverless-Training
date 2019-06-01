const models = require('../../models')

const listAutores={
  command: 'listAutores',
  describe: 'Listar todos los autores',
  handler() {
    const autores = models.autorModel.listAutores()
    autores.forEach((autor) => {
      console.log(autor)
    })
  }
}

const readAutor={
  command: 'readAutor',
  describe: 'Mostrar un autor',
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
    const autor = models.autorModel.readAutor(
      argv.nombres,
      argv.apellidos)
    if (autor) {
      console.log(autor)
    }
  }
}

const getAutorByID={
  command: 'getAutorByID',
  describe: 'Obtener autor por su ID',
  builder: {
    id: {
      describe: 'ID del autor',
      demandOption: true,
      type: 'number'
    }
  },
  handler(argv) {
    const autor = models.autorModel.getAutorByID(argv.id)
    if (autor) {
      console.log(autor)
    }
  }
}

module.exports={
  listAutores,
  readAutor,
  getAutorByID
}