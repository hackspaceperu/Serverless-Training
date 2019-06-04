let a = [];

let comparacion = "11" == "11";

console.log(comparacion);

console.log(typeof a);

class cancion {

    constructor(titulo, duracion, autor) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.autor = autor;
    }
}

let nuevaCancion = new cancion('cancion uno', 6, 'autor uno');

console.log(nuevaCancion);

class db {
    constructor(canciones) {
        this.canciones = canciones;
    }
}

let SpotifyDB = new db([]);

SpotifyDB.canciones.push(new Cancion)