'use strict'

class Netflix {
  constructor(movieModel, serieModel) {
    this.movieModel = movieModel
    this.serieModel = serieModel
  }

  addMovie(movie) {
    this.movieModel.create(movie)
  }

  deleteMovieByTitle(title) {
    this.movieModel.deleteByField('title', title)
  }

  listMovies() {
    return this.movieModel.findAll()
  }

  addSerie(serie) {
    this.serieModel.create(serie)
  }

  deleteSerieByTitle(title) {
    this.serieModel.deleteByField('title', title)
  }

  listSeries() {
    return this.serieModel.findAll()
  }
}

module.exports = Netflix
