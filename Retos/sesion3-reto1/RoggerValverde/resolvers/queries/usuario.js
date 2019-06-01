const models = require('../../models')

const listUsuarios={
  command: 'listUsuarios',
  describe: 'Listar todos los usuarios',
  handler() {
    const usuarios = models.usuarioModel.listUsuarios()
    usuarios.forEach((usuario) => {
      console.log(usuario)
    })
  }
}

const readUsuario={
  command: 'readUsuario',
  describe: 'Mostrar un usuario',
  builder: {
    correo: {
      describe: 'Correo del usuario',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const usuario = models.usuarioModel.readUsuario(
      argv.correo)
    if (usuario) {
      console.log(usuario)
    }
  }
}

const getUsuarioByID={
  command: 'getUsuarioByID',
  describe: 'Obtener usuario por su ID',
  builder: {
    id: {
      describe: 'ID del usuario',
      demandOption: true,
      type: 'number'
    }
  },
  handler(argv) {
    const usuario = models.usuarioModel.getUsuarioByID(argv.id)
    if (usuario) {
      console.log(usuario)
    }
  }
}

module.exports={
  listUsuarios,
  readUsuario,
  getUsuarioByID
}