const Author = require ("./Author");
const Album = require ("./Album");
const Song = require ("./Song");
const object = {Author,Album,Song}

module.exports = {
  createObject(type, attributes) {
    const objectType = object[type];
    return new objectType(attributes);
  }
};
