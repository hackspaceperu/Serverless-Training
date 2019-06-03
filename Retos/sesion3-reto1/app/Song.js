class Song
{
    /**
     * 
     * @param {Artist} artist 
     * @param {Album} album 
     * @param {String} title 
     * @param {Number} durationInSeconds 
     */
    constructor(artist, album, title, durationInSeconds)
    {
        this.artist = artist;
        this.album = album;
        this.title = title;
        this.durationInSeconds = durationInSeconds;
    }
}

module.exports = Song;