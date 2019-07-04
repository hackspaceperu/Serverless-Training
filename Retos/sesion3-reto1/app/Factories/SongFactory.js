const Artist = require("../Artist");
const Album = require("../Album");
const Song = require("../Song");

class SongFactory
{
    create({artistData, albumData, title, durationInSeconds})
    {
        const artist = new Artist(artistData);
        const album = new Album(albumData);
        
        return new Song(artist, album, title, durationInSeconds);
    }
}

module.exports = SongFactory;