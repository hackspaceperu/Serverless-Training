const models = require('../../models')

const addCancionEscuchada={
  command: 'addCancionEscuchada',
  desc: 'Agrega una nueva cancion escuchada',
  builder: {
    correoUsuario: {
      describe: 'Correo del usuario de la cancion escuchada',
      demandOption: true,
      type: 'string'
    },
    idCancion: {
      describe: 'ID de la cancion de la cancion escuchada',
      demandOption: true,
      type: 'number'
    },
    fecha: {
      describe: 'Fecha de la cancion escuchada',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const cancionEscuchada = models.cancionEscuchadaModel.addCancionEscuchada(
      argv.correoUsuario,
      argv.idCancion,
      argv.fecha)
    if (cancionEscuchada) {
      console.log(cancionEscuchada)
    }
  }
}

const removeCancionEscuchada={
  command: 'removeCancionEscuchada',
  describe: 'Remueve una cancion escuchada',
  builder: {
    correoUsuario: {
      describe: 'Correo del usuario de la cancion escuchada',
      demandOption: true,
      type: 'string'
    },
    idCancion: {
      describe: 'ID de la cancion de la cancion escuchada',
      demandOption: true,
      type: 'number'
    },
    fecha: {
      describe: 'Fecha de la cancion escuchada',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    models.cancionEscuchadaModel.removeCancionEscuchada(
      argv.correoUsuario,
      argv.idCancion,
      argv.fecha)
  }
}

module.exports={
  addCancionEscuchada,
  removeCancionEscuchada
}