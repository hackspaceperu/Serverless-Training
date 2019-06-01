import {Entity} from './Entity'
export class Album extends Entity{
    constructor({id,title,date,idArtist}){
        super({id})
        this.id=id
        this.title=title
        this.date=date
        this.idArtist=idArtist
    }
}
