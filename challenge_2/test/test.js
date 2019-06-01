import {hola} from './test_2'
let m = process.argv[2].split('=')[1]
hola('sda')
// npm run dev test/test  s=23

// class Entity{
//     constructor({id}){
//         this.id=id
//     }
// }
// class Artist extends Entity{
//     constructor({id,name}){
//         super({id})
//         this.name=name
//     }
// }
// class Song extends Entity{
//     constructor({id,title}){
//         super({id})
//         this.title=title
//     }
// }
// class Factory {
//     getEntity(type){
//         if(type===undefined) return null
//         if(type==='songs') return new Song({id:1,title:'asd'})
//         if(type==='artist') return new Artist({id:1,name:'asd'})
//     }
// }
// let e = new Entity({id:2})
// let a = new Artist({id:2,name:'thom'})
// console.log(e.id);
// console.log(a.id);