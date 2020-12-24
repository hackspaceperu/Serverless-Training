class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

class Song {
    constructor(category, author, title) {
        this.category = category;
        this.author = author;
        this.title = title;
    }
}

class Playlist {
    constructor(title) {
        this.title = title;
        this.playlist = {};
    }
}

Playlist.prototype.add = function (id, playlist) {
    this.playlist[id] = playlist;
}

Playlist.prototype.remove = function (id) {
    delete this.playlist[id];
}

let s = new Song('cat1', 'Author1', 'title1');
let t = new Song('cat2', 'Author2', 'title2');

let r = new Playlist('miscelanea');

r.add(12, s);
r.add(15, t);
r.remove(12);
console.log(r);
