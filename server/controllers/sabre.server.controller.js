var sabreDev = require('../../config/sabre')();

exports.getCountries = function (req, res){
	var options = {};

	sabreDev.get('/v1/lists/supported/cities', options, function(err, data){
		if (err) {
			console.log(err);
		} else {
			var result = JSON.parse(data);
			return res.json(result);
		}
	});
};