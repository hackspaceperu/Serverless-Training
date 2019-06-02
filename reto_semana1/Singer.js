const Artist = require('./Artist.js');
class Singer extends Artist{

    constructor(id, country, songs, firstname, lastName){
        super(id, country, songs);
        this.firstname = firstname;
        this.lastName = lastName;
    }
    getName(){
        return (this.firstname + ' ' + this.lastName);
    }
}
module.exports = Singer;