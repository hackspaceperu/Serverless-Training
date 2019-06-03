/**
 *
 * Conceptos para revisar:
 *
 * Factory Pattern
 * ES6 Classes
 * JS Modules
 *
 * Objetivo del Reto: Crear estructuras de datos con sus respectivos CRUD para simular un backend de Spotify o Netflix.
 *
 * La cantidad y complejidad de las estructuras de datos es libre.
 *
 */

const spotify = require('./bootstrap/app');
const data = require('./data.json');

spotify.createUser('dimacros');

data.forEach(song => {
    spotify.createSong(song);
});

const dimacros = spotify.findUserByUsername('dimacros');

dimacros.addPlayList('Rock');
dimacros.addPlayList('Electro');
dimacros.addPlayList('Salsa');

dimacros.myPlayList('Rock').addSong(
    spotify.findSongByTitle('Los Malaventurados lo lloran')
);

console.log(dimacros);