const fs = require('fs'),
    colors = require('colors'),
    {yargs} = require('../config/yargs'),
    FactoryEntity = require('./FactoryEntity'),
    pathDB ='./database/spotifyDB.json',
    factoryEntity = new FactoryEntity(),
    print = console.log
let db = {}
const loadingDB = ()=>{
    try{
        db = require(pathDB)
    }catch{
        db = {"artists":[],"albums":[],"songs":[],"musical_genres":[]}
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

const create = argv=>{
    loadingDB()
    let entity = factoryEntity.buildEntity(argv)
    if(argv._[0]==='create_artist') db.artists.push(entity)
    if(argv._[0]==='create_musical_genre') db.musical_genres.push(entity)
    if(argv._[0]==='create_album') db.albums.push(entity)
    if(argv._[0]==='create_song') db.songs.push(entity)
    saveDB().then(data=>print(entity)).catch(console.error)
}
// loadingDB()
// create(yargs)
const toListOf=argv=>{
    loadingDB()
    if(argv._[0]==='to_list_artists') return print(db.artists)
    if(argv._[0]==='to_list_songs') return print(db.songs)
    if(argv._[0]==='to_list_albums') return print(db.albums)
    if(argv._[0]==='to_list_gs') return print(db.musical_genres)
}
const showById = argv =>{
    loadingDB()
    if(argv._[0]==='show_artist_by_id') return print(db.artists.filter(art=>art.id===argv.id))
    if(argv._[0]==='show_song_by_id') return print(db.songs.filter(s=>s.id===argv.id))
    if(argv._[0]==='show_album_by_id') return print(db.albums.filter(al=>al.id===argv.id))
    if(argv._[0]==='show_genre_by_id') return print(db.musical_genres.filter(m=>m.id===argv.id))
}
// let e = f.buildEntity(yargs)
// db.artists.push(e)
// db.artists.push(e)

// console.log(db.artists)
// toListOf(yargs)
showById(yargs)

