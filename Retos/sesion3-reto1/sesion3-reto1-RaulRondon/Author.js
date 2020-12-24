module.exports = class Author {
    constructor({name, country, biography, listeners, followers}) {
        this.name = name;
        this.country = country;
        this.biography = biography;
        this.listeners = listeners;
        this.followers = followers;
    }
};
