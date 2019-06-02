const argv = require('yargs')

const id = {
    alias:'i',
    demand:true
}
const to_list = {}
const by_id ={id}

const create_artist={
    id:{
        alias:'i',
        demand:true
    }
    ,
    name:{
        demand:true,
        alias:'n'
    },
    email:{
        demand:true,
        alias:'e'
    },
    dni:{
        demand:true,
        alias:'d'
    }
}


const create_musical_genre={
    id,
    type:{
        demand:true,
        alias:'t'
    }
}
const create_album={
    id,
    title:{
        demand:true,
        alias:'t',
    },
    date:{
        demand:true,
        alias:'d'
    },
    id_artist:{
        demand:true,
        alias:'a'
    }
}

const create_song={
    id,
    id_genre:{
        demand:true,
        alias:'g'
    },
    id_album:{
        demand:true,
        alias:'a'
    },
    date:{
        demand:true,
        alias:'d'
    },
    title:{
        demand:true,
        alias:'t'
    }
}

const yargs = argv.command('create_artist','Creacion de un artista',create_artist)
                .command('create_musical_genre','Creacion de un genero musical',create_musical_genre)
                .command('create_album','Creacion de un album',create_album)
                .command('create_song','Creacion de una cancion',create_song)
                .command('to_list_artists','Listar artistas',to_list)
                .command('show_artist_by_id','Mostrar artista por id',by_id)
                .command('to_list_songs','Listar canciones',to_list)
                .command('show_song_by_id','Mostrar cancion por id',by_id)
                .command('to_list_albums','Listar albumes',to_list)
                .command('show_album_by_id','Mostrar album por id',by_id)
                .command('to_list_gs','Listar generos',to_list)
                .command('show_genre_by_id','Mostrar genero por id',by_id)
                .command('delete_by_id_song','Eliminar cancion por id',by_id)
                .command('delete_by_id_artist','Eliminar artista por id',by_id)
                .command('delete_by_id_album','Eliminar album por id',by_id)
                .command('delete_by_id_gn','Eliminar genero por id',by_id)
                .help()
                .argv

module.exports= {
    yargs
}