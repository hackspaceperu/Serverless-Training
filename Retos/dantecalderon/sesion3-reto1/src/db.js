'use strict'

let instance = null

class DB {
  constructor() {
    if (!instance) {
      instance = this
    }
    this.data = {} // Donde se almacenaran todos las colecciones
    return instance
  }

  createCollectionIfNotExists(name) {
    if (!this._collectionExists(name)) {
      this.data[name] = []
    }
  }

  getCollection(name) {
    this.createCollectionIfNotExists(name)
    return this.data[name]
  }

  updateCollection(name, data) {
    this.createCollectionIfNotExists(name)
    return (this.data[name] = data)
  }

  listCollections() {
    return this.data
  }

  _collectionExists(name) {
    return this.data[name] !== undefined
  }
}

module.exports = DB
