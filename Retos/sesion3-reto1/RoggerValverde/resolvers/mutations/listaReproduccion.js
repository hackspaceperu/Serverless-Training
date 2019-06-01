const models = require('../../models')

const addListaReproduccion={
  command: 'addListaReproduccion',
  desc: 'Agrega una nueva lista de reproduccion',
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
    const listaReproduccion = models.listaReproduccionModel.addListaReproduccion(
      argv.nombre,
      argv.correoUsuario)
    if (listaReproduccion) {
      console.log(listaReproduccion)
    }
  }
}

const removeListaReproduccion={
  command: 'removeListaReproduccion',
  describe: 'Remueve una lista de reproduccion',
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
    models.listaReproduccionModel.removeListaReproduccion(
      argv.nombre,
      argv.correoUsuario)
  }
}

module.exports={
  addListaReproduccion,
  removeListaReproduccion
}