'use strict'

const DB = require('./db')
const Netlix = require('./Netlix')
const MovieModel = require('./models/MovieModel')
const SerieModel = require('./models/SerieModel')
const Movie = require('./Movie')
const Serie = require('./Serie')

function main() {
  const db = new DB() // Para listar toda la base de datos

  const movieModel = new MovieModel()
  const serieModel = new SerieModel()

  const netflix = new Netlix(movieModel, serieModel)

  // Add Movie
  netflix.addMovie(new Movie('Back to the future', ['A', 'B', 'C']))
  netflix.addMovie(new Movie('Avatar', ['N', 'H']))
  netflix.addMovie(new Movie('The Avengers', ['N', 'H']))

  netflix.addSerie(new Serie('12 Monkeys', ['J'], 3))
  netflix.addSerie(new Serie('Black Mirror', ['J'], 3))

  serieModel.deleteByField('title', 'Black Mirror')

  console.log(netflix.listMovies())

  console.log(db.listCollections())
}

main()
