const Autor = require('./Autor'),
        Album = require('./Album')
class  Cancion {
    constructor (titulo, duracion ,autor, album) {
        this.titulo = titulo
        this.duracion = duracion
        this.autor =  new Autor (autor.name, autor.pais)
        this.album = new Album (album.name, album.fecha)
    }

}

module.exports = Cancion