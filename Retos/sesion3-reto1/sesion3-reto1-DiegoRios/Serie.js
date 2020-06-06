module.exports = class Serie {
    constructor(title, genre, general_desc, raiting, restriction, seasons = [], audios, subtitles) {
        this.title = title;
        this.genre = genre;
        this.general_desc = general_desc;
        this.raiting = raiting;
        this.restriction = restriction;
        this.seasons = seasons;
        this.audios = audios;
        this.subtitles = subtitles;
    }
}