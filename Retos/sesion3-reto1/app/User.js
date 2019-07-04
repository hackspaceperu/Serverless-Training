const PlayList = require("./PlayList");

class User
{
    /**
     * @param {String} username 
     */
    constructor(username)
    {
        this.username = username;
        this.playLists = new Array;
    }

    /**
     * @param {String} title 
     */
    addPlayList(title)
    {
        this.playLists.push(new PlayList(title));
    }

    /**
     * @param {String} title 
     */
    myPlayList(title)
    {
        return this.playLists.find(playList => playList.title === title);
    }

    myPlayLists()
    {
        return this.playLists;
    }
}

module.exports = User;