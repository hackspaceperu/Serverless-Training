const yargs = require('yargs')
const models = require('./models')
const chalk = require('chalk')

//Mutations
const autorMutations = require('./resolvers/mutations/autor')
const albumMutations = require('./resolvers/mutations/album')

//Queries
const autorQueries = require('./resolvers/queries/autor')
const albumQueries = require('./resolvers/queries/album')

// Customize yargs version
//yargs.version('1.1.0')

//Autor
yargs.command(autorMutations.addAutor)
yargs.command(autorMutations.updateAutor)
yargs.command(autorMutations.removeAutor)

yargs.command(autorQueries.listAutores)
yargs.command(autorQueries.readAutor)
yargs.command(autorQueries.getAutorByID)

//Album
yargs.command(albumMutations.addAlbum)
yargs.command(albumMutations.updateAlbum)
yargs.command(albumMutations.removeAlbum)

yargs.command(albumQueries.listAlbumes)
yargs.command(albumQueries.readAlbum)
yargs.command(albumQueries.getAlbumByID)

//Cancion
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