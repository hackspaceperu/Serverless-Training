module.exports = class Song {
    constructor({title, album, time, genre, like_number, dislike_number, image, upload_date}) {
        this.title = title;
        this.album = album;
        this.time = time;
        this.genre = genre;
        this.like_number = like_number;
        this.dislike_number = dislike_number;
        this.image = image;
        this.upload_date = upload_date;
    }
};
