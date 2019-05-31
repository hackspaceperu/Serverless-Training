const {Autor} = require('./autores')

const autorModel = new Autor('./db/autores.json');

module.exports={
  autorModel
}