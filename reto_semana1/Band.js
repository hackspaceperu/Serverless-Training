const Artist = require('./Artist.js');
class Band extends Artist{

    constructor(id, country, songs, name){
        super(id, country, songs);
        this.name = name;
    }
    getName(){
        return this.name;
    }

}

module.exports = Band;