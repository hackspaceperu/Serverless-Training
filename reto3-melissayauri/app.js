/****** PILAS ******/
class Spotify{
    constructor(){
        this.elements = [];
    }
    // agregando elementos a la pila
    addSongs(song){
        this.elements.push(song);
        return this.elements;
    }
    // quitar el ultimo elemento de la parte superior y a parte lo regresa
    lastSong(){
        return this.elements.pop();
    }
    // mostrando el elemento de la parte superior
    topSong(){
        return this.elements[this.elements.length-1]
    }
    // Validar si hay al menos una canción
    // false = 0 elementos
    validateSong(){
        return this.elements.length>0;
    }
    deleteSongs(){
        this.elements= [];
    }
    sizeSongs(){
        return this.elements.length;
    }
}

const spotify = new Spotify();
console.log(spotify.sizeSongs());
if(!spotify.validateSong()){
    spotify.addSongs('la incondicional-Prince Royce');
    spotify.addSongs('Mientes tan bien-Sin Bandera');
    spotify.addSongs('Baby-Nicky Jam');
    console.log(spotify.elements)
    // muestra n° 3 al incorporan 3 canciones
    console.log(spotify.sizeSongs());
     // quita la última canción y lo muestra
    let nickyJam = spotify.lastSong();
     console.log(nickyJam)
    //ahora muestra el elemento quedo en la parte superior
    console.log(spotify.topSong());
    // ahora eliminaremos todas las canciones
    spotify.deleteSongs();
    // validaremos que no exista ninguna canción
    console.log(spotify.validateSong());
}