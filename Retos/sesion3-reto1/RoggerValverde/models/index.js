const {Autor} = require('./autores')
const {Album} = require('./albumes')
const {Cancion} = require('./canciones')
const {Usuario} = require('./usuarios')
const {CancionEscuchada} = require('./cancionesEscuchadas')
const {ListaReproduccion} = require('./listasReproduccion')
const {CancionListaReproduccion} = require('./cancionesListaReproduccion')

const crcNum=997

const autorModel = new Autor(crcNum,'./db/autores.json')
const albumModel = new Album(crcNum,'./db/albumes.json',autorModel)
const cancionModel = new Cancion(crcNum,'./db/canciones.json',autorModel,albumModel)
const usuarioModel = new Usuario(crcNum,'./db/usuarios.json')
const cancionEscuchadaModel = new CancionEscuchada(crcNum,'./db/cancionesEscuchadas.json',usuarioModel,cancionModel)
const listaReproduccionModel = new ListaReproduccion(crcNum,'./db/listasReproduccion.json',usuarioModel)
const cancionListaReproduccionModel = new CancionListaReproduccion(crcNum,'./db/cancionesListaReproduccion.json',listaReproduccionModel,cancionModel)

module.exports={
  autorModel,
  albumModel,
  cancionModel,
  usuarioModel,
  cancionEscuchadaModel,
  listaReproduccionModel,
  cancionListaReproduccionModel
}