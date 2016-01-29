var airports = require('../controllers/airports.server.controller');
var root = require('./api_version.js');


module.exports = function(app) {

app.get(root + 'airports', airports.listAll);


};