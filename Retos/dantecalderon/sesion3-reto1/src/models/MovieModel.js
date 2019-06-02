'use strict'

const Model = require('./Model')

class MovieModel extends Model {
  constructor() {
    super({ collection: 'Movies' })
  }
}

module.exports = MovieModel
