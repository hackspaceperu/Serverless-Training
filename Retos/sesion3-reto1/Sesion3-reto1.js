//Clase de usuario de spotify
class User{
    constructor(id,name, lastName, email, password,profileImage, subscription,playlists){


        if(!playlists){
            playlists=[];
        }

        this.id=id;
        this.name=name;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.profileImage=profileImage;
        this.subscription=new Subscription(subscription.type,subscription.activationDate,subscription.expirationDate);
        this.playlists=playlists;

    }
    getName(){
        return this.name;
    }
}

//Clase de Artista
class Artist{
    constructor(idArtist,name,country,albums){
        if(!albums){
            albums=[];
            
        }


        this.idArtist=idArtist;
        this.name=name;
        this.country = country;
        this.albums=albums;

    }
}


class Album{

    constructor(id,name, releaseDate, genre,songs){
        this.id=id;
        this.name=name;
        this.releaseDate=releaseDate;
        this.genre=genre;
        this.songs=songs;
       
    }

  
}



class Song{
    constructor(id,name, urlMedia,tags){
        this.id=id;
        this.name=name;
        this.urlMedia=urlMedia;
        this.tags=tags;
    }
}


class PlayList{

    constructor(id,name,songs){
        this.id=id;
        this.name=name;
        this.songs=songs;
    }
}





//Clase de subscripción que puede tener un usuario
class Subscription{
    constructor(type,activationDate,expirationDate){
        this.type=type;
        this.activationDate=activationDate;
        this.expirationDate=expirationDate;
    }
}



let SpotifyDB;
let Users=[];
let Songs=[];
let Artists=[];

class db{
    constructor(users,artists){

        if(!artists){
            this.artists=artists;
        }else if(!users){
            this.users=users;
        }else{
            this.users=users;
            this.artists=artists;
        }


        
       
    }
}

function Spotify(){
    return{
        init:function(){
            SpotifyDB = new db([],[]);
        },
        addUser: function(id,name,lastName,email,password,profileImage, subscription,playlists){
            Users.push(new User(id,name,lastName,email, password,profileImage, new Subscription(subscription.type, subscription.activationDate,subscription.expirationDate),playlists))
        },
        addSong: function(id,name, urlMedia, tags){
           Songs.push(new Song(id,name,urlMedia,tags));
            
        },
        addArtist:function(id,name,country,albums){
            Artists.push(new Artist(id,name,country,albums));

        },
        addAlbum:function(idArtist,id,name, releaseDate, genre,songs){
            let index = Artists.findIndex(x => x.idArtist === idArtist);
            Artists[index].albums.push(new Album(id,name,releaseDate,genre,songs))
        },
        addSongToAlbum:function(idArtist,idAlbum,idSongs){
            let indexArtist = Artists.findIndex(x => x.idArtist === idArtist);
            let indexAlbum = Artists[indexArtist].albums.findIndex(x => x.id === idAlbum);

            let tempSong = Songs[Songs.findIndex(x => x.id === idSongs)];
            
            Artists[indexArtist].albums[indexAlbum].songs.push(new Song(tempSong.id,tempSong.name,tempSong.urlMedia,tempSong.tags));


        },
        addPlayList:function(idUser,idPlayList,name,songs){
            let indexUser = Users.findIndex(x=>x.id === idUser);
           
            Users[indexUser].playlists.push(new PlayList(idPlayList,name,songs));


        },

        updateDB: function(users,artists){

            for(let i=0; i<users.length;i++){
                let tempUser=users[i];
                SpotifyDB.users.push(tempUser);
            }

            for(let i=0; i<artists.length;i++){
                let tempArtist=artists[i];
                SpotifyDB.artists.push(tempArtist);
            }
            
        }
    }
}

let spotifyInstance = Spotify();
spotifyInstance.init();



//Artistas
spotifyInstance.addArtist(1,"Yola","Perú",[]);
spotifyInstance.addArtist(2,"Bad Bunny", "Puerto Rico",[]);


//Crear albumes relacionados con los artistas
spotifyInstance.addAlbum(1,1,"Infantiles 2018","01/06/19",["Infantil"],[]);
spotifyInstance.addAlbum(2,1,"x100 pre","01/06/19",["Trap", "Reggaeton"],[]);
spotifyInstance.addAlbum(2,2,"Second Album","01/06/19",["Trap"],[]);





//Canciones que se registran en spotify
spotifyInstance.addSong(1,"La cucaracha", "https://www.youtube.com/watch?v=HeoBvMNf3FQ", ["infantil", "alegre"]);
spotifyInstance.addSong(2,"El trensito","https://www.youtube.com/watch?v=ScnR-wOhj8U", ["infantil", "alegre"]);

spotifyInstance.addSong(3,"Mia","https://www.youtube.com/watch?v=OSUxrSe5GbI", ["chill", "alegre"]);

spotifyInstance.addSong(4,"Te bote","https://www.youtube.com/watch?v=9jI-z9QN6g8", ["chill", "reggaeton"]);


console.log(Songs);
//Asocio las canciones a los artistas/albunes

//canciones de Yola agregadas album
spotifyInstance.addSongToAlbum(1,1,1);//Se añade la cancion cucaracha/Intantiles/yola
spotifyInstance.addSongToAlbum(1,1,2);



//canciones de Bad Bunny agregadas al album
spotifyInstance.addSongToAlbum(2,1,3);
spotifyInstance.addSongToAlbum(2,2,4);

// Un usuario se registra en spotify
spotifyInstance.addUser(1,"Hugo","Deudor", "hufedebe@gmail.com", "hackspace","https://static.thenounproject.com/png/363633-200.png", new Subscription("free","01/06/19","02/06/19"),[]);



//Creamos un playlist para el usuario HUgo
spotifyInstance.addPlayList(1,1,"Musica para estudiar",[]);
spotifyInstance.addPlayList(1,2,"Musica para tonear",[]);




spotifyInstance.updateDB(Users,Artists);




let readData = JSON.stringify(SpotifyDB);
console.log(SpotifyDB);
console.log(readData);