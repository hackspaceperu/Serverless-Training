'use strict'

const DB = require('../db')

class Model {
  constructor(config) {
    this.db = new DB()
    this.collectionName = config['collection']
    this.db.createCollectionIfNotExists(this.collectionName)
  }

  create(item) {
    this.db.getCollection(this.collectionName).push(item)
  }

  findById(id) {
    return this.db
      .getCollection(this.collectionName)
      .find(item => item['id'] === id)
  }

  findAll() {
    return this.db.getCollection(this.collectionName)
  }

  deleteByField(field, value) {
    const collection = this.findAll().filter(item => item[field] !== value)
    return this.db.updateCollection(this.collectionName, collection)
  }
}

module.exports = Model
