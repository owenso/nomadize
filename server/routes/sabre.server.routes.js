var root = '/api/v1/';
var sabre = require('../controllers/sabre.server.controller');


module.exports = function(app) {

app.get(root + 'countries', sabre.getCountries);


};