var root = require('./api_version.js');
var geolocate = require('../controllers/geolocate.server.controller');

module.exports = function(app) {

app.get(root + 'locate', geolocate.findNearest);


};