const express = require('express');
const app = express();
const db = require('./db.json');

app.use(express.json());

app.get('/', (req, res) => {
    res.json(db);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(res.body);
});

app.listen(3030);