const argv = require('yargs')

const id = {
    alias:'i',
    demand:true
}

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
                .help()
                .argv

module.exports= {
    yargs
}