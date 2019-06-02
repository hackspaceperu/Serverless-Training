/**
 *
 * Conceptos para revisar:
 *
 * Factory Pattern
 * ES6 Classes
 * JS Modules
 *
 * Objetivo del Reto: Crear estructuras de datos con sus respectivos CRUD para simular un backend de Spotify o Netflix.
 * La cantidad y complejidad de las estructuras de datos es libre.
 *
 * */

// Codigo Referencia

class Artista {
    constructor(nombre, pais) {
        this.nombre = nombre;
        this.pais = pais;
    }
}

class Cancion {
    constructor(titulo, duracion, artista, album, favorito) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.artista = new Artista(artista.nombre, artista.pais);
        this.album = new Album(album.titulo);
        this.favorito = favorito || false;
    }
}

class Album {
    constructor(titulo, cover, ano, artista) {
        this.titulo = titulo;
        this.cover = cover;
        this.ano = ano;
        this.artista = artista
    }
}

class Playlists {
    constructor(titulo, cover, author) {
        this.titulo = titulo;
        this.cover = cover;
        this.author = author;
    }
}

class db {
    constructor(canciones, albumes, playlists) {
        this.canciones = [];
        this.albumes = [];
        this.playlists = [];
    }
}

let SpotifyDB;

function Spotify () {
    return {
        init: function () {
            SpotifyDB = new db([]);
        },
        agregarCancion: function (titulo, duracion, artista, album, favorito) {
            SpotifyDB.canciones.push(new Cancion(titulo, duracion, artista, album, favorito));
        },
        agregarAlbum: function (titulo, cover, ano, artista) {
            SpotifyDB.albumes.push(new Album(titulo, cover, ano, artista));
        },
        agregarPlaylists: function (titulo, cover, author) {
            SpotifyDB.playlists.push(new Album(titulo, cover, author));
        }
        
    }
}

let spotifyInstance = Spotify();

spotifyInstance.init();

// Agregando Canciones
spotifyInstance.agregarCancion('La Cupula', 5.35, {nombre: 'Violadores del Verso', pais: 'España'}, {titulo: 'Doble Vida', cover: 'url01.jpg', ano: '2003'}, true);
spotifyInstance.agregarCancion('You Would Know', 4.17, {nombre: 'Queens of Stone Age', pais: 'USA'}, {titulo: 'QOTSA', cover: 'url02.jpg', ano: '1998'}, );
spotifyInstance.agregarCancion('I work while you are sleeping', 3.23, {nombre: 'Mount Camel', pais: 'USA'}, {titulo: 'Mount Camel', cover: 'url03.jpg', ano: '2010'}, );
spotifyInstance.agregarCancion('Souljackert Part I', 3.13, {nombre: 'Eels', pais: 'USA'}, {titulo: 'Meet the Eels', cover: 'url04.jpg', ano: '2008'}, );


// Agregar Album
spotifyInstance.agregarAlbum('QOTSA', 'url02.jpg', '1998', {nombre: 'Queens of Stone Age', pais: 'USA'} );

// Agregar Playlist
spotifyInstance.agregarPlaylists('Mostreo para Codear', 'urlMostreo.jpg', 'Luis Diaz Venero');


console.log((JSON.stringify(SpotifyDB, null, 2)));