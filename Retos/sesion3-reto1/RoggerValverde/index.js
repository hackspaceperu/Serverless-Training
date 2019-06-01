const yargs = require('yargs')
const models = require('./models')
const chalk = require('chalk')

// Customize yargs version
//yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'addAutor',
  desc: 'Add a new autor',
  builder: {
    nombres: {
      describe: 'Nombre del autor',
      demandOption: true,
      type: 'string'
    },
    apellidos: {
      describe: 'Apellidos del autor',
      demandOption: true,
      type: 'string'
    },
    nacionalidad: {
      describe: 'Nacionalidad del autor',
      type: 'string'
    }
  },
  handler(argv) {
    const autor = models.autorModel.addAutor(argv.nombres, argv.apellidos, argv.nacionalidad)
    if (autor) {
      //console.log(chalk.green.inverse('New autor added!'))
      console.log(autor)
    }/*else {
      console.log(chalk.red.inverse('Autor already in!'))
    }*/
  }
})

// Create update command
yargs.command({
  command: 'updateAutor',
  describe: 'Update an autor nacionalidad',
  builder: {
    nombres: {
      describe: 'Nombre del autor',
      demandOption: true,
      type: 'string'
    },
    apellidos: {
      describe: 'Apellidos del autor',
      demandOption: true,
      type: 'string'
    },
    nacionalidad: {
      describe: 'Nacionalidad del autor',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const autor = models.autorModel.updateAutor(argv.nombres, argv.apellidos, argv.nacionalidad)
    if (autor) {
      //console.log(chalk.green.inverse('Autor updated!'))
      console.log(autor)
    }/*else {
      console.log(chalk.red.inverse('Autor not found!'))
    }*/
  }
})

// Create remove command
yargs.command({
  command: 'removeAutor',
  describe: 'Remove an autor',
  builder: {
    nombres: {
      describe: 'Nombre del autor',
      demandOption: true,
      type: 'string'
    },
    apellidos: {
      describe: 'Apellidos del autor',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    models.autorModel.removeAutor(argv.nombres, argv.apellidos)
  }
})

// Create list command
yargs.command({
  command: 'listAutores',
  describe: 'List your autores',
  handler() {
    const autores = models.autorModel.listAutores()
    autores.forEach((autor) => {
      console.log(autor)
    })
  }
})

// Create read command
yargs.command({
  command: 'readAutor',
  describe: 'Read an autor',
  builder: {
    nombres: {
      describe: 'Nombre del autor',
      demandOption: true,
      type: 'string'
    },
    apellidos: {
      describe: 'Apellidos del autor',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const autor = models.autorModel.readAutor(argv.nombres, argv.apellidos)
    if (autor) {
      console.log(autor)
    } /*else {
      console.log(chalk.red.inverse('Autor not found!'))
    }*/
  }
})

// Create add command
yargs.command({
  command: 'addAlbum',
  desc: 'Add a new album',
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
    const album = models.albumModel.addAlbum(argv.nombre,argv.nombresAutor, argv.apellidosAutor, argv.fechaLanzamiento)
    if (album) {
      //console.log(chalk.green.inverse('New album added!'))
      console.log(album)
    }/*else {
      console.log(chalk.red.inverse('Album already in!'))
    }*/
  }
})

// Create update command
yargs.command({
  command: 'updateAlbum',
  describe: 'Update an album fecha de lanzamiento',
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
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    const album = models.albumModel.updateAlbum(argv.nombre,argv.nombresAutor, argv.apellidosAutor, argv.fechaLanzamiento)
    if (album) {
      //console.log(chalk.green.inverse('Album updated!'))
      console.log(album)
    }/*else {
      console.log(chalk.red.inverse('Album not found!'))
    }*/
  }
})

// Create remove command
yargs.command({
  command: 'removeAlbum',
  describe: 'Remove an album',
  builder: {
    nombres: {
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
    models.albumModel.removeAlbum(argv.nombre,argv.nombresAutor, argv.apellidosAutor)
  }
})

// Create list command
yargs.command({
  command: 'listAlbumes',
  describe: 'List your albumes',
  handler() {
    const albumes = models.albumModel.listAlbumes()
    albumes.forEach((album) => {
      console.log(album)
    })
  }
})

// Create read command
yargs.command({
  command: 'readAlbum',
  describe: 'Read an album',
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
    const autor = models.autorModel.readAutor(argv.nombre,argv.nombresAutor, argv.apellidosAutor)
    if (autor) {
      console.log(autor)
    } /*else {
      console.log(chalk.red.inverse('Autor not found!'))
    }*/
  }
})

// Create add command
yargs.command({
  command: 'addCancion',
  desc: 'Add a new cancion',
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
      describe: 'Duración de la cancion',
      type: 'integer'
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
      //console.log(chalk.green.inverse('New album added!'))
      console.log(cancion)
    }/*else {
      console.log(chalk.red.inverse('Album already in!'))
    }*/
  }
})

yargs.parse()