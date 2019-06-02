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
    // print(db)
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
const deleteById = argv =>{
    loadingDB()
    if(argv._[0]==='delete_by_id_artist') {
        let index_artist = db.artists.filter((art,index)=>{
            if(art.id===argv.id) return index
        })[0]
        let index_album = db.albums.filter((alb,index)=>{
            if(alb.idArtist===argv.id) return index
        })
        let index_song =db.songs.filter((so,index)=>{
            if(so.idAlbum===argv.id) return index
        })
        db.artists.splice(index_artist,1)
        
        index_album.forEach(item=>{
            db.albums.splice(item,1)
        })
        index_song.forEach(item=>{
            db.songs.splice(item,1)
        })
    }
    else if(argv._[0]==='delete_by_id_song'){
        let index_song =db.songs.filter((so,index)=>{
            if(so.id===argv.id) return index
        })[0]
        db.songs.splice(index_song,1)
    }
    else if(argv._[0]==='delete_by_id_album'){
        let index_album = db.albums.filter((alb,index)=>{
            if(alb.idArtist===argv.id) return index
        })[0]
        let index_song =db.songs.filter((so,index)=>{
            if(so.idAlbum===argv.id) return index
        })
        
        db.albums.splice(index_album,1)
        index_song.forEach(item=>{
            db.songs.splice(item,1)
        })
        
    }
    else if(argv._[0]==='delete_by_id_gn') {
        let index_ge = db.musical_genres.filter((g,index)=>{
            if(g.id===argv.id) return index
        })[0]
        let index_song =db.songs.filter((so,index)=>{
            if(so.idGenre===argv.id) return index
        })
        
        db.musical_genres.splice(index_ge,1)
        index_song.forEach(item=>{
            db.songs.splice(item,1)
        })
    }
    saveDB().then(console.log).catch(console.error)
}
// let e = f.buildEntity(yargs)
// db.artists.push(e)
// db.artists.push(e)
// create(yargs)
// deleteById(yargs)
// console.log(db.artists)
// toListOf(yargs)
// showById(yargs)
