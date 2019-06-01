const models = require('../../models')

const listAlbumes={
  command: 'listAlbumes',
  describe: 'Listar todos los albumes',
  handler() {
    const albumes = models.albumModel.listAlbumes()
    albumes.forEach((album) => {
      console.log(album)
    })
  }
}

const readAlbum={
  command: 'readAlbum',
  describe: 'Mostrar un album',
  builder: {
    nombre: {
      describe: 'Nombre del album',
      demandOption: true,
      type: 'string'
    },
    nombresAutor: {
      describe: 'Nombres del autor del album',
      demandOption: true,
      type: 'string'
    },
    apellidosAutor: {
      describe: 'Apellidos del autor del album',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const autor = models.autorModel.readAutor(
      argv.nombre,
      argv.nombresAutor,
      argv.apellidosAutor)
    if (autor) {
      console.log(autor)
    }
  }
}

const getAlbumByID={
  command: 'getAlbumByID',
  describe: 'Obtener album por su ID',
  builder: {
    id: {
      describe: 'ID del album',
      demandOption: true,
      type: 'number'
    }
  },
  handler(argv) {
    const album = models.albumModel.getAlbumByID(
      argv.id)
    if (album) {
      console.log(album)
    }
  }
}

module.exports={
  listAlbumes,
  readAlbum,
  getAlbumByID
}