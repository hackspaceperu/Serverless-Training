module.exports = class Spotify {
    constructor(album, user) {
        this.album = Array.from(album);
        this.user = Array.from(user);
    }
    addAlbum(newAlbum) {
        if(this.album.indexOf(newAlbum) === -1)
            this.album.push(newAlbum);
    }
    getAlbum(albumName) {
        return this.album.find(elemento => elemento.name === albumName) || null;
    }
    deleteAlbum(album) {
        let index = this.album.indexOf(album);
        if(this.album.indexOf(album) !== -1)
            this.album.splice(index,1);
    }
    addUser(newUser) {
        let exist = this.user.find(elemento=>elemento.username === newUser.username);
        if(!exist)
            this.user.push(newUser);
    }
};
