const models = require('../../models')

const listCanciones={
  command: 'listCanciones',
  describe: 'Listar todos las canciones',
  handler() {
    const canciones = models.cancionModel.listCanciones()
    canciones.forEach((cancion) => {
      console.log(cancion)
    })
  }
}

const readCancion={
  command: 'readCancion',
  describe: 'Mostrar una cancion',
  builder: {
    nombre: {
      describe: 'Nombre de la cancion',
      demandOption: true,
      type: 'string'
    },
    nombresAutor: {
      describe: 'Nombres del autor de la cancion',
      demandOption: true,
      type: 'string'
    },
    apellidosAutor: {
      describe: 'Apellidos del autor de la cancion',
      demandOption: true,
      type: 'string'
    },
    nombreAlbum: {
      describe: 'Nombre del album de la cancion',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const cancion = models.cancionModel.readCancion(
      argv.nombre,
      argv.nombresAutor,
      argv.apellidosAutor,
      argv.nombreAlbum)
    if (cancion) {
      console.log(cancion)
    }
  }
}

const getCancionByID={
  command: 'getCancionByID',
  describe: 'Obtener cancion por su ID',
  builder: {
    id: {
      describe: 'ID del album',
      demandOption: true,
      type: 'number'
    }
  },
  handler(argv) {
    const cancion = models.cancionModel.getCancionByID(
      argv.id)
    if (cancion) {
      console.log(cancion)
    }
  }
}

module.exports={
  listCanciones,
  readCancion,
  getCancionByID
}