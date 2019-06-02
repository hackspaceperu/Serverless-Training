class Song{
    constructor(title,duration,author){
        this.title=title
        this.duration = duration
        this.author=new author(author.name,author.pais)
    }
}
class DB{
    constructor(songs){
        this.songs=songs
    }
}
let SpotifyDB
function spotify(){
    return {
        init(){
            SpotifyDB=new DB([])
        },
        addSong(title,duration,author){
            SpotifyDB.songs.push(new Song(title,duration,author))
        }
    }
}
//agregar editar eliminar mostrar -- agregar a discografia
// agregar discografia a autor

let spotifyInstance = spotify()

spotifyInstance.init()
spotifyInstance.addSong('Cancion 1',4.3,{nombre:'asd',pais:'tango'})

console.log(SpotifyDB);


// 12 de la noche el sabado