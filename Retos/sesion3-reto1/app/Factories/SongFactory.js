const Artist = require("../Artist");
const Album = require("../Album");
const Song = require("../Song");

class SongFactory
{
    create({artist: { name: artistName}, album: { title: albumTitle}, title, durationInSeconds})
    {
        const artist = new Artist(artistName);
        const album = new Album(albumTitle);
        
        return new Song(artist, album, title, durationInSeconds);
    }
}

module.exports = SongFactory;