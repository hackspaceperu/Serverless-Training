const Db = require("./Db.js");
const ArtistFactory = require("./ArtistFactory.js");

class ArtistDao{
    constructor(){
        this.artistDb = new Db();
        this.artistFactory = new ArtistFactory();
    }
    persistArtist(artistType, params){
        const artist = this.artistFactory.createArtist(artistType, params);
        this.artistDb.items.push(artist);
    }
}

module.exports = ArtistDao;