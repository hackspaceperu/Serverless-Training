import {Entity} from './Entity'
export class MusicalGenre extends Entity{
    constructor({id,type}){
        super({id})
        this.type=type
    }
}