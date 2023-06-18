
var express = require('express');
var path = require('path');
const config = require('./config');



var app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


const {appModels:DbModels,routersInit:apiV1}  = require('./src/api/v1')(config);

const APIPrefixUrl = '/api/v1' 

app.use(APIPrefixUrl , apiV1(config))



module.exports = app;
