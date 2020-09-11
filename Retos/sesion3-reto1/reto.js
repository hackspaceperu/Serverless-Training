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
 **/

// Codigo Referencia

class Pais {
    constructor(continente, idioma, nombre) {
        this.continente = continente;
        this.idioma = idioma;
        this.nombre = nombre;
    }
}

class Autor {
    constructor(apellidosNombres, pais) {
        this.nombre = apellidosNombres;
        this.pais = new Pais(pais.continente, pais.idioma, pais.nombre);
    }
}

class Cancion {
    constructor(titulo, duracion, idioma, autor, genero, album) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.idioma = idioma;
        this.autor = new Autor(autor.idAutor, autor.nombre, autor.pais);
        this.genero = new Genero(genero.clasificacion, genero.nombre);
        this.album = new Album(album.idAlbum, album.nombre, album.fechaCreacion, album.cancion);
    }
}

class Album {
    constructor(nombre, fechaCreacion){
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion;
    }
}

class Genero {
    constructor(clasificacion, nombre){
        this.clasificacion = clasificacion;
        this.nombre = nombre;
    }
}

function DB() {
    return {
        canciones: [],
        paises: [],
        autores: [],
        albums: [],
        generos: []
    }
}

let SpotifyDB;

function Spotify () {
    return {
        init: function () {
            SpotifyDB = new DB();
        },
        agregarCancion: function (titulo, duracion, idioma, autor, genero, album) {
            SpotifyDB.canciones.push(new Cancion(titulo, duracion, idioma, autor, genero, album));
        },
        agregarPais: function (continente, idioma, nombre) {
            SpotifyDB.paises.push(new Pais(continente, idioma, nombre));
        },
        agregarAutor: function (apellidosNombres, pais) {
            SpotityDB.autores.push(new Autor(apellidosNombres, pais));
        },
        agregarAlbum: function(nombre, fechaCreacion) {
            SpotifyDB.albums.push(new Album(nombre, fechaCreacion));
        },
        agregarGenero: function(clasificacion, nombre) {
            SpotifyDB.generos.push(new Genero(clasificacion, nombre));
        }
    }
}

let spotifyInstance = Spotify();

spotifyInstance.init();

spotifyInstance.agregarGenero("clasificacion de prueba", "nombre de prueba");
spotifyInstance.agregarGenero("clasificacion de prueba 2", "nombre de prueba 2");
spotifyInstance.agregarGenero("clasificacion de prueba 3", "nombre de prueba 3");
spotifyInstance.agregarGenero("clasificacion de prueba 4", "nombre de prueba 4");
spotifyInstance.agregarAlbum("nombre de prueba 1", "fechaCreacion de prueba 1");
spotifyInstance.agregarAlbum("nombre de prueba 2", "fechaCreacion de prueba 2");
spotifyInstance.agregarAlbum("nombre de prueba 3", "fechaCreacion de prueba 3");
spotifyInstance.agregarAlbum("nombre de prueba 4", "fechaCreacion de prueba 4");
spotifyInstance.agregarAlbum("nombre de prueba 5", "fechaCreacion de prueba 5");

console.log(SpotifyDB);  