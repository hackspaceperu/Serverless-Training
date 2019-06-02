const fs = require('fs'),
    colors = require('colors'),
    {yargs} = require('../config/yargs'),
    factory = require('./FactoryEntity'),
    pathDB ='./database/spotifyDB.json'
let db = {}
const loadingDB = ()=>{
    try{
        db = require(pathDB)
    }catch{
        db = {}
    }
}
const saveDB = ()=>{
    return new Promise((resolve,reject)=>{
        let data =JSON.stringify(db)
        fs.writeFile('src/database/spotifyDB.json',data,err=>{
            if(err) return reject(err)
            return resolve(data)
        })
    })
}

loadingDB()
let f = new factory()
let e = f.buildEntity(yargs)
db.artists.push(e)
db.artists.push(e)
saveDB().then(console.log).catch(console.error)
console.log(db.artists)




// const create = (argv)=>{
//     loadingDB()

// }