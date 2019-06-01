const models = require('../../models')

const addAlbum={
  command: 'addAlbum',
  desc: 'Agrega un nuevo album',
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
    },
    fechaLanzamiento: {
      describe: 'Fecha de lanzamiento del album',
      type: 'string'
    }
  },
  handler(argv) {
    const album = models.albumModel.addAlbum(
      argv.nombre,
      argv.nombresAutor,
      argv.apellidosAutor,
      argv.fechaLanzamiento)
    if (album) {
      console.log(album)
    }
  }
}

const updateAlbum={
  command: 'updateAlbum',
  describe: 'Actualiza la fecha de lanzamiento de un album',
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
    },
    fechaLanzamiento: {
      describe: 'Fecha de lanzamiento del album',
      //demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const album = models.albumModel.updateAlbum(
      argv.nombre,
      argv.nombresAutor,
      argv.apellidosAutor,
      argv.fechaLanzamiento)
    if (album) {
      console.log(album)
    }
  }
}

const removeAlbum={
  command: 'removeAlbum',
  describe: 'Remueve un album',
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
    models.albumModel.removeAlbum(
      argv.nombre,
      argv.nombresAutor,
      argv.apellidosAutor)
  }
}

module.exports={
  addAlbum,
  updateAlbum,
  removeAlbum
}