const express = require('express');
const app = express();
const {contacts} = require('./api');

app.use(express.json());

app.use('/api/v1', contacts);

app.listen('3000');