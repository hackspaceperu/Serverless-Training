"use strict";
const Spotify = require("./Spotify");

class Main{
    constructor(){
        this.spotify = new Spotify();
    }

    main(){
        this.spotify.init();
        this.spotify.createSomeArtists();
        this.spotify.play();
    }
}

let app = new Main();
app.main();