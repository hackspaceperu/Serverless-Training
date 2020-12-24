const Song = require ("./Song");

module.exports = class Album {
    getNumberOfLikes(){
        let number = 0;
        for (let s in this.song)
        {
            number+=this.song[s].like_number;
        }

        return number;
    }
    addSong(song){
        this.song.push(song);
        this.like_number = this.getNumberOfLikes();
    }
    deleteSong(song){
        let index = this.song.indexOf(song);
        this.song.splice(index,1);
        this.like_number = this.getNumberOfLikes();
    }
    addAuthor(author){
        this.author.push(author);
    }
    deleteAuthor(author){
        let index = this.song.indexOf(author);
        this.author.splice(index,1);
    }
    constructor({name, author,time, genre, dislike_number, image, upload_date, song}) {
        this.name = name;
        this.author = Array.from(author);
        this.time = time;
        this.genre = genre;
        this.song = Array.from(song);
        this.like_number = this.getNumberOfLikes();
        this.dislike_number = dislike_number;
        this.image = image;
        this.upload_date = upload_date;

    }
};
