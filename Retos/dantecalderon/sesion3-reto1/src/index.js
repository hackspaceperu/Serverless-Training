'use strict'

const DB = require('./db')
const Netlix = require('./Netlix')
const MovieModel = require('./models/MovieModel')
const SerieModel = require('./models/SerieModel')
const Movie = require('./Movie')
const Serie = require('./Serie')
const { log } = require('./utils')

function main() {
  const db = new DB() // Para listar toda la base de datos

  const movieModel = new MovieModel()
  const serieModel = new SerieModel()

  const netflix = new Netlix(movieModel, serieModel)

  netflix.addMovie(new Movie('Back to the future', ['A', 'B', 'C']))
  log('Step 1 Movies= ', netflix.listMovies())
  // [ Movie { title: 'Back to the future', cast: [ 'A', 'B', 'C' ] } ]

  netflix.addMovie(new Movie('Avatar', ['N', 'H']))
  log('Step 2 Movies= ', netflix.listMovies())
  // [ Movie { title: 'Back to the future', cast: [ 'A', 'B', 'C' ] }, Movie { title: 'Avatar', cast: [ 'N', 'H' ] } ]

  netflix.deleteMovieByTitle('Avatar')
  log('Step 3 Movies= ', netflix.listMovies())
  // [ Movie { title: 'Back to the future', cast: [ 'A', 'B', 'C' ] } ]

  netflix.addSerie(new Serie('12 Monkeys', ['J'], 3))
  log('Step 4 Series= ', netflix.listSeries())

  serieModel.deleteByField('title', '12 Monkeys')
  log('Step 5 Series= ', netflix.listSeries())

  log('Step 6 Database= ', db.listCollections())
}

main()
