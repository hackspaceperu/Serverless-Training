const Entity =require('./Entity')

module.exports= class Song extends Entity{
    constructor({id,idGenre,idAlbum,date,title}){
        super({id})
        this.idGenre=idGenre
        this.idAlbum=idAlbum
        this.date=date
        this.title=title
    }
}