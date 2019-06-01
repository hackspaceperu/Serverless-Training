const yargs = require('yargs')

//Mutations
const autorMutations = require('./resolvers/mutations/autor')
const albumMutations = require('./resolvers/mutations/album')
const cancionMutations = require('./resolvers/mutations/cancion')
const usuarioMutations = require('./resolvers/mutations/usuario')
const cancionEscuchadaMutations = require('./resolvers/mutations/cancionEscuchada')
const listaReproduccionMutations = require('./resolvers/mutations/listaReproduccion')
const cancionListaReproduccionMutations = require('./resolvers/mutations/cancionListaReproduccion')

//Queries
const autorQueries = require('./resolvers/queries/autor')
const albumQueries = require('./resolvers/queries/album')
const cancionQueries = require('./resolvers/queries/cancion')
const usuarioQueries = require('./resolvers/queries/usuario')
const cancionEscuchadaQueries = require('./resolvers/queries/cancionEscuchada')
const listaReproduccionQueries = require('./resolvers/queries/listaReproduccion')
const cancionListaReproduccionQueries = require('./resolvers/queries/cancionListaReproduccion')

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
yargs.command(cancionMutations.addCancion)
yargs.command(cancionMutations.updateCancion)
yargs.command(cancionMutations.removeCancion)

yargs.command(cancionQueries.listCanciones)
yargs.command(cancionQueries.readCancion)
yargs.command(cancionQueries.getCancionByID)

//Usuario
yargs.command(usuarioMutations.addUsuario)
yargs.command(usuarioMutations.updateUsuario)
yargs.command(usuarioMutations.removeUsuario)

yargs.command(usuarioQueries.listUsuarios)
yargs.command(usuarioQueries.readUsuario)
yargs.command(usuarioQueries.getUsuarioByID)

//Cancion Escuchada
yargs.command(cancionEscuchadaMutations.addCancionEscuchada)
yargs.command(cancionEscuchadaMutations.removeCancionEscuchada)

yargs.command(cancionEscuchadaQueries.listCancionesEscuchadas)
yargs.command(cancionEscuchadaQueries.readCancionEscuchada)
yargs.command(cancionEscuchadaQueries.getCancionEscuchadaByID)

//Lista de Reproduccion
yargs.command(listaReproduccionMutations.addListaReproduccion)
yargs.command(listaReproduccionMutations.removeListaReproduccion)

yargs.command(listaReproduccionQueries.listListasReproduccion)
yargs.command(listaReproduccionQueries.readListaReproduccion)
yargs.command(listaReproduccionQueries.getListaReproduccionByID)

//Cancion de Lista de Reproduccion
yargs.command(cancionListaReproduccionMutations.addCancionListaReproduccion)
yargs.command(cancionListaReproduccionMutations.removeCancionListaReproduccion)

yargs.command(cancionListaReproduccionQueries.listCancionesListaReproduccion)
yargs.command(cancionListaReproduccionQueries.readCancionListaReproduccion)
yargs.command(cancionListaReproduccionQueries.getCancionListaReproduccionByID)

yargs.parse()