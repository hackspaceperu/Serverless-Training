const {Autor} = require('./autores')
const {Album} = require('./albumes')

const autorModel = new Autor('./db/autores.json');
const albumModel = new Album('./db/albumes.json',autorModel);

module.exports={
  autorModel,
  albumModel
}