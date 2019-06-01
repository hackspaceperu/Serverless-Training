const models = require('../../models')

const addUsuario={
  command: 'addUsuario',
  desc: 'Agrega un nuevo usuario',
  builder: {
    nombres: {
      describe: 'Nombre del usuario',
      demandOption: true,
      type: 'string'
    },
    apellidos: {
      describe: 'Apellidos del usuario',
      demandOption: true,
      type: 'string'
    },
    correo: {
      describe: 'Correo del usuario',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const usuario = models.usuarioModel.addUsuario(
      argv.nombres,
      argv.apellidos,
      argv.correo)
    if (usuario) {
      console.log(usuario)
    }
  }
}

const updateUsuario={
  command: 'updateUsuario',
  describe: 'Actualiza los nombres y los apellidos de un usuario',
  builder: {
    nombres: {
      describe: 'Nombres del usuario',
      demandOption: true,
      type: 'string'
    },
    apellidos: {
      describe: 'Apellidos del usuario',
      demandOption: true,
      type: 'string'
    },
    correo: {
      describe: 'Correo del usuario',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const usuario = models.usuarioModel.updateUsuario(
      argv.nombres,
      argv.apellidos,
      argv.correo)
    if (usuario) {
      console.log(usuario)
    }
  }
}

const removeUsuario={
  command: 'removeUsuario',
  describe: 'Remueve un usuario',
  builder: {
    correo: {
      describe: 'Correo del usuario',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    models.usuarioModel.removeUsuario(
      argv.correo)
  }
}

module.exports={
  addUsuario,
  updateUsuario,
  removeUsuario
}