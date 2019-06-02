// Reto HackSpace Estructura de Datos de Spotify

class Genre {
  constructor(type) {
    this.type = type;
  }
}

class Author {
  constructor(name, nationality){
    this.name = name;
    this.nationality = nationality;
  }
}

class Song {
  constructor(title, length, genre, author){
    this.title = title;
    this.length = length;
    this.genre = new Genre(genre.type);
    this.author = new Author(author.name, author.nationality);
    this.status = false;
  }

  playSong() {
    this.status = true;
  }

  stopSong() {
    this.status = false;
  }

}

// Structures that common user handles
class Playlist {
  constructor(name, description, userId) {
    this.name = name;
    this.description = description;
    this.userId = userId;
    this.lastUsedPosition = 0;
    this.head = null;
    this.tail = null;
  }

  appendSong(song) {
    let node = new Node(song);

    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  removeSong(song) {
    let current = this.head;
    while( current ) {
      if( current.data === song ) {
        if( current == this.head && current == this.tail ) {
          this.head = null;
          this.tail = null;
        } else if ( current == this.head ) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if ( current == this.tail ) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
     }
     current = current.next;
    }
  }

  removeSongAt(position) {
    let current = this.head;
    let counter = 1;
    if( position == 0 ) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      while( current ) {
        current = current.next;
        if ( current == this.tail ) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else if( counter == position ) {
          current.prev.next = current.next;
          current.next.prev = current.prev;
          break;
        }
        counter++;
      }
    }
  }

  playSongInPlaylist(song) {
    let current = this.head;
    let counter = 0;
    while( current ) {
      if( current.data == song ) {
        song.playSong();
        return song;
      }
      current = current.next;
      counter++;
    }
  }

  playNextSong(song){
    let current = this.head;
    let counter = 0;
    while( current ) {
      if( current.data == song ) {
        song.stopSong();
        let nextSong = current.next.data;
        nextSong.playSong();
        return nextSong;
      }
      current = current.next;
      counter++;
    }
  }

  playPreviousSong(song){
    let current = this.head;
    let counter = 0;
    while( current ) {
      if( current.data == song ) {
        song.stopSong();
        let nextSong = current.prev.data;
        nextSong.playSong();
        return nextSong;
      }
      current = current.next;
      counter++;
    }
  }

}

class MyPlaylists {
  constructor(lists, userId){
    this.lists = lists;
    this.userId = userId;
  }

  createNewList(name, description){
    Spotifydb.lists.push(new Playlist(name, description));
  }

  getPlaylists(userId){
    return SpotifyDB.lists.getListByUserId(userId);
  }

  getPlaylist(listId){
    return SpotifyDB.lists.getListById();
  }
}


class Node {
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}


class User {
  constructor(name, email, pass, subscription, loggedIn){
    this.name = name;
    this.email = email;
    this.subscription = new Subscription(subscription.name);
    this.loggedIn = loggedIn;
  }

  createUser(name, email, subscription){
    SpotifyDB.users.push([name, email, subscription, false]);
  }

  loginUser(email){
    // after email validation and assuming a funciotn from the db
    let user = SpotifyDB.users.getByEmail(email);
    user.loggedIn = true;
    return user;
  }

  findUser(id) {
    let user = SpotifyDB.users.getByEmail(email);
    user.loggedIn = true;
    return user;
  }

  addSongToPlaylist(list, songData) {
    let list = SpotifyDB.lists.getListById(list.id);
    list.appendSong(songData);
  }

  removeSongFromPlaylist(listId, songId) {
    let list = SpotifyDB.lists.getListById(listId);
    list.removeSong(songData);
  }

  createPlaylist(name, description){
    MyPlaylists.createNewList(name, description);
  }
}


// ---------------------------------
class db {
    constructor(songs, lists, users, genres) {
        this.songs = songs;
        this.lists = lists;
        this.users = users;
        this.genres = genres;
    }
}

let SpotifyDB;

function Spotify () {
    return {
        init: function () {
            SpotifyDB = new db([]);
        },
        createNewUser: function(name, email, subscription){
          SpotifyDB.users.push(new User(name, email, subscription));
          User.loginUser(email);
        },
        loginUser: function(email){
          User.loginUser(email);
        },
        loadPlayLists: function(userId){
          MyPlaylists.getPlaylists(user.id);
        }
    };
}


let spotifyInstance = Spotify();

// initialize instance and db
spotifyInstance.init();

// login user
let currentUser = spotifyInstance.loginUser("carlos@user.com");

//load MyPlaylists
let myPlaylists = spotifyInstance.loadPlayLists(currentUser.id);

// perform some user actions
myUser.createPlaylist("Dev Music", "lalala");

// play song in Playlist
let currentList = myPlaylists.getPlaylist(listId);
let currentSong = currentList.playSongInPlaylist(song);

currentList.playNextSong(currentSong);
currentList.playPreviousSong(currentSong);

// after searching some song
myUser.addSongToPlaylist(selectedList, searchedSong);

// delete song from Playlist
myUser.removeSongFromPlaylist(selectedList, someSong);
