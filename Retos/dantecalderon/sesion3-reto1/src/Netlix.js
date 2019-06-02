'use strict'

class Netflix {
  constructor(movieModel, serieModel) {
    this.movieModel = movieModel
    this.serieModel = serieModel
  }

  addMovie(movie) {
    this.movieModel.create(movie)
  }

  listMovies() {
    return this.movieModel.findAll()
  }

  addSerie(serie) {
    this.serieModel.create(serie)
  }

  listSeries() {
    this.serieModel.findAll()
  }
}

module.exports = Netflix
