const models = require('../../models')

const addCancion={
  command: 'addCancion',
  desc: 'Agrega una nueva cancion',
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
    },
    duracion: {
      describe: 'Duración de la cancion en segundos',
      type: 'number'
    },
    genero: {
      describe: 'Genero de la cancion',
      type: 'string'
    }
  },
  handler(argv) {
    const cancion = models.cancionModel.addCancion(
      argv.nombre,
      argv.nombresAutor,
      argv.apellidosAutor,
      argv.nombreAlbum,
      argv.duracion,
      argv.genero)
    if (cancion) {
      console.log(cancion)
    }
  }
}

const updateCancion={
  command: 'updateCancion',
  describe: 'Actualiza la duracion y el genero de una cancion',
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
    },
    duracion: {
      describe: 'Duración de la cancion en segundos',
      type: 'number'
    },
    genero: {
      describe: 'Genero de la cancion',
      type: 'string'
    }
  },
  handler(argv) {
    const cancion = models.cancionModel.updateCancion(
      argv.nombre,
      argv.nombresAutor,
      argv.apellidosAutor,
      argv.nombreAlbum,
      argv.duracion,
      argv.genero)
    if (cancion) {
      console.log(cancion)
    }
  }
}

const removeCancion={
  command: 'removeCancion',
  describe: 'Remueve una cancion',
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
    models.cancionModel.removeCancion(
      argv.nombre,
      argv.nombresAutor,
      argv.apellidosAutor,
      argv.nombreAlbum)
  }
}

module.exports={
  addCancion,
  updateCancion,
  removeCancion
}