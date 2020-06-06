let Movie = require('./Movie.js');
let Serie = require('./Movie.js');
let Season = require('./Season.js');
let Episode = require('./Episode.js');

class db {
    constructor(movies = [], series = []) {
        this.movies = movies;
        this.series = series;
    }
}

// Películas

// creando películas
let movie1 = new Movie();
movie1 = {
    title: 'Click',
    genre: 'Comedia',
    actors: ['Monica', 'Chandler', 'Ross', 'Phoebe', 'Rachel', 'Joey'],
    general_desc: 'Serie de comedia',
    raiting: '10/10',
    length: 20,
    year: 2000,
    restriction: '13+',
    audios: ['English', 'Español'],
    subtitles: ['English', 'Español']
}

let movie2 = new Movie();
movie2 = {
    title: 'Safari',
    genre: 'Accion',
    actors: ['Monica', 'Chandler', 'Ross', 'Phoebe', 'Rachel', 'Joey'],
    general_desc: 'Película de acción',
    raiting: '10/10',
    length: 20,
    year: 2000,
    restriction: '13+',
    audios: ['English', 'Español'],
    subtitles: ['English', 'Español']
}

// Series

// creando serie
let s1 = new Serie();
s1 = {
    title: 'Friends',
    genre: 'Accion',
    raiting: '10/10',
    restriction: '13+',
    seasons: [],
    audios: ['English', 'Español'],
    subtitles: ['English', 'Español']
}

// creando temporadas
let s1t1 = new Season(1, 2000, []);

// creando episodios 
let s1t1e1 = new Episode('They are back', 'Regresaron de la muerte para cobrar venganza. Los Hamilton no saben lo que les espera.', 45);
let s1t1e2 = new Episode('Under the moonligth', 'La espera de Emily se hace larga, pero valdrá la pena. ', 38);

// agregar temporada a serie
function addSeasonToSerie(seasonObject, serie){
    let seasonNumber = seasonObject.number;
    // chequear si episodio ya existe
    if(serie.seasons.find( season => season.number == seasonNumber) === seasonObject){
        return;
    } else {
        serie.seasons.push(seasonObject);
    }
}
addSeasonToSerie(s1t1, s1);
addSeasonToSerie(s1t1, s1);

// agregar episodio a temporada
function addEpisodesToSeason (episodes = [], seasonNumber, serie){
    serie.seasons.find(season => season.number == seasonNumber).episodes.push(episodes);
}

addEpisodesToSeason([s1t1e1, s1t1e2], 1, s1);
/* console.log(s1); */

let NetflixDB

function Netflix() {
    return {
        init: function () {
            NetflixDB = new db([]);
        },
        addMovie: function (movie) {
            NetflixDB.movies.push(movie);
        },
        addSerie: function (serie) {
            NetflixDB.series.push(serie);
        }
    }
}

let netflix = Netflix();



netflix.init();



netflix.addMovie(movie1);
netflix.addMovie(movie2);
netflix.addSerie(s1);


console.log(NetflixDB);