const {Autor} = require('./autores')
const {Album} = require('./albumes')
const {Cancion} = require('./canciones')
const {Usuario} = require('./usuarios')

const crcNum=997

const autorModel = new Autor(crcNum,'./db/autores.json');
const albumModel = new Album(crcNum,'./db/albumes.json',autorModel);
const cancionModel = new Cancion(crcNum,'./db/canciones.json',autorModel,albumModel)
const usuarioModel = new Usuario(crcNum,'./db/usuarios.json');

module.exports={
  autorModel,
  albumModel,
  cancionModel,
  usuarioModel
}