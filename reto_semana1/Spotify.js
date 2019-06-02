const ArtistDao = require("./ArtistDao.js");
const Song = require("./Song.js");

class Spotify{
    constructor(){
        this.artistDao = new ArtistDao();
        this.stackArtist = [];
    }
    init(){
        console.log("Welcome to Spotify ...");
    }
    
    createSomeArtists(){
        console.log("Creating and persisting some artists");
        let artist1Params = {
            id: 1,
            country: 'England',
            name: 'Oasis',
            songs: []
        };
        artist1Params.songs.push(new Song(1, 'Supersonic'));
        artist1Params.songs.push(new Song(2, 'Bring it on down'));
        this.artistDao.persistArtist('band', artist1Params);

        let artist2Params = {
            id: 2,
            country: 'Peru',
            firstName: 'Pedro',
            lastName: 'Suarez',
            songs: []
        };
        artist2Params.songs.push(new Song(3, 'Los globos del cielo'));
        artist2Params.songs.push(new Song(4, 'Cuando pienses en volver'));
        this.artistDao.persistArtist('singer', artist2Params);
    }

    play(){
        console.log("Querying persisted artists..");
        this.stackArtist = this.artistDao.artistDb.items;
        console.log("Done");

        for( let artist of this.stackArtist ){
            console.log(`Current Artist: ${artist.getName()}`);
            for(let song of artist.songs){
                console.log(`Now playing ${song.name}`);
            }
        }
    }
}

module.exports = Spotify;