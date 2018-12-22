const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'));

app.use(express.static(__dirname + '/../public'));
app.use('/:id', express.static(path.join(__dirname, '/../public')));

module.exports = app;