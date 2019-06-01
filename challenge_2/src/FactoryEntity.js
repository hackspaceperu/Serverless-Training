const Artist = require('./Artist'),
    Album = require('./Album'),
    MusicalEntity = require('./MusicalGenre'),
    Song = require('./Song')

module.exports =class FactoryEntity{
    get entity(argv){
        //logica
        if(argv._[0]==='create_artist') return new Artist({})
        
    }
}