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
 * */

// Codigo Referencia

class Autor {
    constructor(nombre, pais) {
        this.nombre = nombre;
        this.pais = pais;
    }
}

class Cancion {
    constructor(titulo, duracion, autor) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.autor = new Autor(autor.nombre, autor.pais);
    }
}

class db {
    constructor(canciones) {
        this.canciones = canciones;
    }
}

let SpotifyDB;

function Spotify () {
    return {
        init: function () {
            SpotifyDB = new db([]);
        },
        agregarCancion: function (titulo, duracion, autor) {
            SpotifyDB.canciones.push(new Cancion(titulo, duracion, autor));
        }
    }
}

let spotifyInstance = Spotify();

spotifyInstance.init();

spotifyInstance.agregarCancion('cancion uno', 4.3, {nombre: 'tanto', pais: 'tanto'});
spotifyInstance.agregarCancion('cancion dos', 4.3, {nombre: 'tanto', pais: 'tanto'});


console.log(SpotifyDB);