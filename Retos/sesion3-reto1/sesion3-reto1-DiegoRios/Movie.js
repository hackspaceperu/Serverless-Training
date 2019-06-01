module.exports = class Movie {
    constructor(title, genre, actors, general_desc, raiting, length, year, restriction, audios, subtitles) {
        this.title = title;
        this.genre = genre;
        this.actors = actors;
        this.general_desc = general_desc;
        this.raiting = raiting;
        this.length = length;
        this.year = year;
        this.restriction = restriction;
        this.audios = audios;
        this.subtitles = subtitles;
    }
}