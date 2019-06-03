const objectFactory = require("./objectFactory");
const User = require("./User");
const Spotify = require("./Spotify");

const author = objectFactory.createObject("Author", {
  name: "Raul Rondon",
  country: "Peru",
  biography: "Peruano de nacimiento",
  listeners: 100,
  followers: 100
});

const author2 = objectFactory.createObject("Author", {
    name: "Juan Perez",
    country: "Peru",
    biography: "Peruano de nacimiento",
    listeners: 12,
    followers: 12
});

const song = objectFactory.createObject("Song", {
  title: "Rock yourself",
  album: "Peruana",
  time: 100,
  genre: "Rock",
  like_number: 1000,
  dislike_number: 10,
  image: "http://url.com",
  upload_date: "2019-05-05",
  country: "Peru",
  biography: "Peruano de nacimiento",
  listeners: 100,
  followers: 100
});

const song2 = objectFactory.createObject("Song", {
    title: "Rock yourselfs",
    album: "Peruanas",
    time: 100,
    genre: "Rock",
    like_number: 100,
    dislike_number: 10,
    image: "http://url.com",
    upload_date: "2019-05-05",
    country: "Peru",
    biography: "Peruano de nacimiento",
    listeners: 100,
    followers: 100
});

const album = objectFactory.createObject("Album", {
  name: "Tu mano",
  author: [author],
  time: 100,
  genre: "Rock",
  like_number: 1000,
  dislike_number: 100,
  image: "https://image.com",
  upload_date: '2019-05-05',
  song: [song]
});

const album3 = objectFactory.createObject("Album", {
    name: "Como mirarte",
    author: [author],
    genre: "Salsa",
    image: "https://image.com",
    upload_date: '2019-05-05',
    song: [song]
});

const user = new User("rrondon","1234","rrondon@gmail.com","Raul Rondon Ponce");
const user_premium = new User("jperez","1234","jperez@gmail.com","Juan Perez");

const spotify = new Spotify([album],[user,user_premium]);
let album1 = spotify.getAlbum("Como mirarte");
spotify.addUser(user_premium);
spotify.addUser(user_premium);

console.log(album1);

console.log(spotify);

//console.log(album);
