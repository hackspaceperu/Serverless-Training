class PlayList
{
    /**
     * @param {String} title 
     */
    constructor(title)
    {
        this.title = title;
        this.songs = new Array;
    }

    /**
     * 
     * @param {Song} song 
     */
    addSong(song)
    {
        this.songs.push(song);
    }
}

module.exports = PlayList;