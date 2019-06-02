'use strict'

const Model = require('./Model')

class SerieModel extends Model {
  constructor() {
    super({ collection: 'Series' })
  }
}

module.exports = SerieModel
