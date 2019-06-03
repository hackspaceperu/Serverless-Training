module.exports = class User {
    constructor(username,password,email,name,premium) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
        this.premium = premium || false;
    }
};
