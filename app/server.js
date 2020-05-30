const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const port = 3000;
const HOST = '0.0.0.0';

const app = express();
 
app.get('*', (req, res) => {
    res.send('Hello World Node + Express + docker + docker-compose');
});
app.listen(port, HOST);

