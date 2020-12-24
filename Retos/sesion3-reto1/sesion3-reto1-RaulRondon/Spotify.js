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
        return this.album.find(element => element.name === albumName) || null;
    }
    deleteAlbum(albumName) {
        let album = this.getAlbum(albumName);
        if(album!==null)
            this.album.splice(this.album.indexOf(album),1);
    }
    addUser(newUser) {
        let exist = this.user.find(elemento=>elemento.username === newUser.username);
        if(!exist)
            this.user.push(newUser);
    }
    getUser(username) {
        return this.user.find(element => element.username === username) || null;
    }
    deleteUser(username) {
        let user  = this.getUser(username);
        if(user!==null)
            this.user.splice(this.user.indexOf(user),1);
    }
};
