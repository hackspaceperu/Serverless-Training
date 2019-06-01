const Entity =require('./Entity')
module.exports= class Album extends Entity{
    constructor({id,title,date,idArtist}){
        super({id})
        this.title=title
        this.date=date
        this.idArtist=idArtist
    }
}
