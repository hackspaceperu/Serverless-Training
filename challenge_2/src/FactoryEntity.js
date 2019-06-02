const Artist = require('./Artist'),
    Album = require('./Album'),
    MusicalEntity = require('./MusicalGenre'),
    Song = require('./Song')

module.exports =class FactoryEntity{
    get entity(argv){
        //logica
        if(argv._[0]==='create_artist') return new Artist({id:argv.id,dni:argv.dni,name:argv.name,email:argv.email})
        if(argv._[0]==='create_musical_genre') return new MusicalEntity({id:argv.id,type:argv.type})
        if(argv._[0]==='create_album') return new Album({})
        if(argv._[0]==='create_song') return new Song({})
    }
}