var http = require('http');
var mac = require('../../MACodes.json');

exports.findNearest = function (req, res) {
	http.get('http://ipinfo.io', function(data) {
    data.setEncoding('utf8');
    data.on('data', function(chunk){
        var multiCodes = JSON.parse(chunk);
        for (var i = 0; i <mac.results.length; i++){
        	if (mac.results[i].city == multiCodes.city){
        		console.log(multiCodes.city);
        		console.log(mac.results[i].iata);
        	}
        }
    });
	});
};