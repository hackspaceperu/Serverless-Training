import {Entity} from './Entity'

export class Artist extends Entity{
    constructor({id,dni,name,email}){
        super({id})
        this.name=name
        this.email=email
        this.dni=dni
    }
}

// $ npm run dev src/model/Artist.js