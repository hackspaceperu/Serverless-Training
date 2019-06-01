import argv from 'yargs'

const optns = {
    description:{
        demand:true,
        alias:'d'
    }
}

argv.command('create_artist','Creacion de un artista',optns)
    .command('create_musical_genre','Creacion de un genero musical',optns)
    .command('create_album','Creacion de un genero musical',optns)
    .command('create_song','Creacion de un genero musical',optns)
    .help()
    .argv

module.exports = argv