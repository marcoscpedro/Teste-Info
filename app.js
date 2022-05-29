var express = require('express');
var logger = require('morgan');
const veiculoRouter = require('./src/routes/veiculos')
require('./database/database')
var cors = require('cors')
var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', veiculoRouter);



module.exports = app;
