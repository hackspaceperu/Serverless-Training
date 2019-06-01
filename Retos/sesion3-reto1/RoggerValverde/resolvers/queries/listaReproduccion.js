const models = require('../../models')

const listListasReproduccion={
  command: 'listListasReproduccion',
  describe: 'Listar todas las listas de reproduccion',
  handler() {
    const listasReproduccion = models.listaReproduccionModel.listListasReproduccion()
    listasReproduccion.forEach((listaReproduccion) => {
      console.log(listaReproduccion)
    })
  }
}

const readListaReproduccion={
  command: 'readListaReproduccion',
  describe: 'Mostrar una lista de reproduccion',
  builder: {
    nombre: {
      describe: 'Nombre de la lista de reproduccion',
      demandOption: true,
      type: 'string'
    },
    correoUsuario: {
      describe: 'Correo del usuario de la lista de reproduccion',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const listaReproduccion = models.listaReproduccionModel.readListaReproduccion(
      argv.nombre,
      argv.correoUsuario)
    if (listaReproduccion) {
      console.log(listaReproduccion)
    }
  }
}

const getListaReproduccionByID={
  command: 'getListaReproduccionByID',
  describe: 'Obtener lista de reproduccion por su ID',
  builder: {
    id: {
      describe: 'ID de la lista de reproduccion',
      demandOption: true,
      type: 'number'
    }
  },
  handler(argv) {
    const listaReproduccion = models.listaReproduccionModel.getListaReproduccionByID(
      argv.id)
    if (listaReproduccion) {
      console.log(listaReproduccion)
    }
  }
}

module.exports={
  listListasReproduccion,
  readListaReproduccion,
  getListaReproduccionByID
}