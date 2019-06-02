const models = require('../../models')

const listCancionesListaReproduccion={
  command: 'listCancionesListaReproduccion',
  describe: 'Listar todas las canciones de listas de reproduccion',
  handler() {
    const cancionesListaReproduccion = models.cancionListaReproduccionModel.listCancionesListaReproduccion()
    cancionesListaReproduccion.forEach((cancionListaReproduccion) => {
      console.log(cancionListaReproduccion)
    })
  }
}

const readCancionListaReproduccion={
  command: 'readCancionListaReproduccion',
  describe: 'Mostrar una cancion de una lista de reproduccion',
  builder: {
    idListaReproduccion: {
      describe: 'ID de la lista de reproduccion',
      demandOption: true,
      type: 'number'
    },
    idCancion: {
      describe: 'ID de la cancion',
      demandOption: true,
      type: 'number'
    }
  },
  handler(argv) {
    const cancionListaReproduccion = models.cancionListaReproduccionModel.readCancionListaReproduccion(
      argv.idListaReproduccion,
      argv.idCancion)
    if (cancionListaReproduccion) {
      console.log(cancionListaReproduccion)
    }
  }
}

const getCancionListaReproduccionByID={
  command: 'getCancionListaReproduccionByID',
  describe: 'Obtener cancion de una lista de reproduccion por su ID',
  builder: {
    id: {
      describe: 'ID de la cancion de una lista de reproduccion',
      demandOption: true,
      type: 'number'
    }
  },
  handler(argv) {
    const cancionListaReproduccion = models.cancionListaReproduccionModel.getCancionListaReproduccionByID(
      argv.id)
    if (cancionListaReproduccion) {
      console.log(cancionListaReproduccion)
    }
  }
}

module.exports={
  listCancionesListaReproduccion,
  readCancionListaReproduccion,
  getCancionListaReproduccionByID
}