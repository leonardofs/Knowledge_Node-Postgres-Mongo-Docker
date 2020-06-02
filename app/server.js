const express = require('express');
const consign = require('consign');
const db = require('./Data/db');


const port = 3000;
//const HOST = '0.0.0.0';

const app = express();

app.db = db;

consign({cwd: 'app'})
    .include('./middlewares')
    .then('./api/validation.js')
    .then('./api')
    .then('./routes')
    .into(app);


 
app.get('/', (req, res) => {
    res.send('Hello World Node + Express + docker + docker-compose,<h1>nodemon works</h1>');
});

app.listen(port);

