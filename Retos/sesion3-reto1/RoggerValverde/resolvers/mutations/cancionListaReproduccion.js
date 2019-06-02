const models = require('../../models')

const addCancionListaReproduccion={
  command: 'addCancionListaReproduccion',
  desc: 'Agrega una nueva cancion a una lista de reproduccion',
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
    const cancionListaReproduccion = models.cancionListaReproduccionModel.addCancionListaReproduccion(
      argv.idListaReproduccion,
      argv.idCancion)
    if (cancionListaReproduccion) {
      console.log(cancionListaReproduccion)
    }
  }
}

const removeCancionListaReproduccion={
  command: 'removeCancionListaReproduccion',
  describe: 'Remueve una cancion de una lista de reproduccion',
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
    models.cancionListaReproduccionModel.removeCancionListaReproduccion(
      argv.idListaReproduccion,
      argv.idCancion)
  }
}

module.exports={
  addCancionListaReproduccion,
  removeCancionListaReproduccion
}