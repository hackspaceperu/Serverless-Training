const Entity =require('./Entity')
module.exports= class MusicalGenre extends Entity{
    constructor({id,type}){
        super({id})
        this.type=type
    }
}