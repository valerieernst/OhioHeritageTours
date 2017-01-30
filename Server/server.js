const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../Client')));

app.listen(8080, () => console.log('App listening on 8080'));