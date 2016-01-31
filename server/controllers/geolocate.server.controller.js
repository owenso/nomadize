var http = require('http');
var CityCode = require('mongoose').model('CityCode');

exports.findNearest = function(req, res) {
  http.get('http://ipinfo.io', function(data) {
    data.setEncoding('utf8');
    data.on('data', function(chunk) {
      var multiCodes = JSON.parse(chunk);
      CityCode
        .findOne({
          city: multiCodes.city
        })
        .exec(function(err, data) {
          if (err) {
            console.log('city not found');
          } else {
            console.log(multiCodes);
            res.json(data);
          }
        });
    });
  });
};
