const Artist = require('./Artist'),
    Album = require('./Album'),
    MusicalEntity = require('./MusicalGenre'),
    Song = require('./Song')

module.exports =class FactoryEntity{
    buildEntity(argv){
        //logica
        if(argv._[0]==='create_artist') return new Artist({id:argv.id,dni:argv.dni,name:argv.name,email:argv.email})
        if(argv._[0]==='create_musical_genre') return new MusicalEntity({id:argv.id,type:argv.type})
        if(argv._[0]==='create_album') return new Album({id:argv.id,title:argv.title,date:argv.date,idArtist:argv.id_artist})
        if(argv._[0]==='create_song') return new Song({id:argv.id,idGenre:argv.id_genre,idAlbum:argv.id_album,date:argv.date,title:argv.title})
        else return null
    }
}