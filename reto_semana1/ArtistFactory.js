const Band = require("./Band.js");
const Singer = require("./Singer.js");

class ArtistFactory{
    constructor(){}
    createArtist(artistType, params){
        let singer = null;
        if(artistType === 'singer'){
            singer = new Singer(params.id, params.country, params.songs, params.firstName, params.lastName);
        }else if(artistType === 'band'){
            singer = new Band(params.id, params.country, params.songs, params.name);
        }
        return singer;
    }
}

module.exports = ArtistFactory;