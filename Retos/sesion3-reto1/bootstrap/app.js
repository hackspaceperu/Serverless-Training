const SongFactory = require("../app/Factories/SongFactory");
const UserFactory = require("../app/Factories/UserFactory");

class Spotify
{
    /**
     * @param {SongFactory} songFactory 
     * @param {UserFactory} UserFactory 
     */
    constructor(songFactory, userFactory)
    {
        this.songFactory = songFactory;
        this.userFactory = userFactory;
        this.songs = new Array;
        this.users = new Array;
    }

    createSong(song)
    {
        this.songs.push(this.songFactory.create(song));
    }

    createUser(username)
    {
        this.users.push(this.userFactory.create(username));
    }

    findUserByUsername(username)
    {
        return this.users.find(user => user.username === username);
    }

    findSongByTitle(title)
    {
        return this.songs.find(song => song.title === title);
    }

    allSongs()
    {
        return this.songs;
    }

    allUsers()
    {
        return this.users;
    }
}

module.exports = new Spotify(new SongFactory, new UserFactory);