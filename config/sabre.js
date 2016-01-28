var SabreDevStudio = require('sabre-dev-studio');
var config = require('./config');

module.exports = function() {

    var sabre_dev_studio = new SabreDevStudio({
        client_id: config.sabre.key,
        client_secret: config.sabre.sharedSecret,
        uri: 'https://api.test.sabre.com'
    });
    return sabre_dev_studio;

};
