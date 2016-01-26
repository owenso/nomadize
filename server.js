process.env.NODE_ENV = process.env.NODE_ENV || 'local';

var mongoose = require('./config/mongoose');
var express = require('./config/express');

var db = mongoose();
var app = express();

var port = process.env.PORT || 1337;


app.listen(port);
module.exports = app;

console.log('Server running at port:' + port);



