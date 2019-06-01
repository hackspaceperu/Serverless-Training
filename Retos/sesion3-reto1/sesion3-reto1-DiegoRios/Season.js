module.exports = class Season {
    constructor(number, year, episodes = []){
        this.number = number;
        this.year = year;
        this.episodes = episodes;
    }
}