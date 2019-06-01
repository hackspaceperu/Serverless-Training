const models = require('../../models')

const listCancionesEscuchadas={
  command: 'listCancionesEscuchadas',
  describe: 'Listar todos las canciones escuchadas',
  handler() {
    const cancionesEscuchadas = models.cancionEscuchadaModel.listCancionesEscuchadas()
    cancionesEscuchadas.forEach((cancionEscuchada) => {
      console.log(cancionEscuchada)
    })
  }
}

const readCancionEscuchada={
  command: 'readCancionEscuchada',
  describe: 'Mostrar una cancion escuchada',
  builder: {
    correoUsuario: {
      describe: 'Correo del usuario de la cancion escuchada',
      demandOption: true,
      type: 'string'
    },
    idCancion: {
      describe: 'ID de la cancion de la cancion escuchada',
      demandOption: true,
      type: 'string'
    },
    fecha: {
      describe: 'Fecha de la cancion escuchada',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const cancionEscuchada = models.cancionEscuchadaModel.readCancionEscuchada(
      argv.correoUsuario,
      argv.idCancion,
      argv.fecha)
    if (cancionEscuchada) {
      console.log(cancionEscuchada)
    }
  }
}

const getCancionEscuchadaByID={
  command: 'getCancionEscuchadaByID',
  describe: 'Obtener cancion escuchada por su ID',
  builder: {
    id: {
      describe: 'ID de la cancion escuchada',
      demandOption: true,
      type: 'number'
    }
  },
  handler(argv) {
    const cancionEscuchada = models.cancionEscuchadaModel.getCancionEscuchadaByID(
      argv.id)
    if (cancionEscuchada) {
      console.log(cancionEscuchada)
    }
  }
}

module.exports={
  listCancionesEscuchadas,
  readCancionEscuchada,
  getCancionEscuchadaByID
}