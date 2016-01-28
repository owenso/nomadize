var root = require('./api_version.js');
var sabre = require('../controllers/sabre.server.controller');


module.exports = function(app) {

app.get(root + 'countries', sabre.getCountries);


};