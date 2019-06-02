/*
 * Inicio
 * Nombre: Diego Damián
 * Correo: diegoaarondv@gmail.com 
 */

//Clase - Autor
class Autor {
    constructor(nombre, paisOrigen, fechaNacimiento) {
        this.nombre = nombre;
        this.paisOrigen = paisOrigen;
        this. fechaNacimiento = fechaNacimiento;
    }

    getNombre () {
        return this.nombre;
    }

    getPaisOrigen () {
        return this.paisOrigen;
    }

    getFechaNacimiento () {
        return this.fechaNacimiento;
    }

    setNombre (nombre) {
        this.nombre = nombre; 
    }

    setPaisOrigen (paisOrigen) {
        this.paisOrigen = paisOrigen;
    }

    setFechaNacimiento (fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

}

let autoresT = [];

function agregarAutor (autor) {
    autoresT.push(autor);
}

function verAutoresTotales () {
    return autoresT;
}

function eliminarCancion (nombreAutor) {
    cancionesT.filter( item.nombre == nombreAutor);
}

//Clase - Cancion
class Cancion {
    constructor(titulo, autores, tiempoDuracion, album, generoMusical) {
        this.titulo = titulo;
        this.autores = autores;
        this.tiempoDuracion = tiempoDuracion;
        this.generoMusical = generoMusical;
        this.album = album;
        this.numeroReproducciones = 0;
        this.likes = 0;
        this.disLikes = 0;
    }

    getTitulo () {
        return this.titulo;
    }

    getautores () {
        return this.autores;
    }

    getTiempoDuracion () {
        return this.tiempoDuracion;
    }

    getGeneroMusical () {
        return this.generoMusical;
    }

    getAlbum () {
        return this.album;
    }

    getNumeroReproducciones () {
        return this.numeroReproducciones;
    }

    getLikes () {
        return this.likes;
    }

    getDisLikes () {
        return this.disLikes;
    }

    setTitulo (titulo) {
        this.titulo = titulo;
    }

    setautores (autores) {
        this.autores = autores;
    }

    setGeneroMusical (generoMusical) {
        this.generoMusical = generoMusical;
    }

    setAlbum (album) {
        this.album = album;
    }

}

let cancionesT = [];

function agregarCancion (cancion) {
    cancionesT.push(cancion);
}

function verCancionesTotales () {
    return cancionesT;
}

function eliminarCancion (nombreCancion) {
    cancionesT.filter( item.nombre == nombreCancion);
}

//Clase - Album
class Album {
    constructor(titulo, autores, canciones, fechaLanzamiento, generoMusical) {
        this.titulo = titulo;
        this.autores = autores;
        this.canciones = canciones;
        this.fechaLanzamiento = fechaLanzamiento;
        this.generoMusical = generoMusical;
        this.numeroReproducciones = 0;
        this.likes = 0;
        this.disLikes = 0;
    }

    getTitulo () {
        return this.titulo;
    }

    getautores () {
        return this.autores;
    }

    getCanciones () {
        return this.canciones;
    }

    getFechaLanzamiento () {
        return this.fechaLanzamiento;
    }

    getGeneroMusical () {
        return this.generoMusical;
    }

    setTitulo (titulo) {
        this.titulo = titulo;
    }

    setGeneroMusical (generoMusical) {
        this.generoMusical = generoMusical;
    }

}

let albunesT = [];

function agregarAlbum (album) {
    albunesT.push(album);
}

function verAutoresTotales () {
    return albunesT;
}

function eliminarAlbum (tituloAlbum) {
    cancionesT.filter( item.titulo == tituloAlbum);
}

//Clase - Suscripcion 
class Suscripcion {
    constructor (tipoSuscripcion, precio) {
        this.tipoSuscripcion = tipoSuscripcion;
        this.precio = precio;
    }

    getTipoSuscripcion () {
        return this.tipoSuscripcion;
    }

    getPrecio () {
        return this.precio;
    }

    setTipoSuscripcion (tipoSuscripcion) {
        this.tipoSuscripcion = tipoSuscripcion;
    }

    setPrecio (precio) {
        this.precio = precio;
    }

}

let suscripcionesT = [];

//Clase - ListaReproduccion
class ListaReproduccion {
    constructor (nombreLista, canciones) {
        this.nombreLista = nombreLista;
        this.canciones = canciones;
        this.numeroReproducciones = 0;
        this.numeroSeguidores = 0;
    }

    getNombreLista () {
        return this.nombreLista;
    }

    getCanciones () {
        return this.canciones;
    }

    getNumeroReproducciones () {
        return this.numeroReproducciones;
    }

    getNumeroSeguidores () {
        return this.numeroSeguidores;
    }

    setNombreLista(nombreLista) {
        this.nombreLista = nombreLista;
    }

    setCanciones (canciones) {
        this.canciones = [...canciones];
    }

}

let listasReproduccionT = [];


cancion1 = new Cancion("cancion1", "autor1", 3.3, "albun1", "electronica");

agregarCancion(cancion1);

console.log(cancionesT);