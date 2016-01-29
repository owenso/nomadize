var airports = require('airport-codes');


exports.listAll = function (req, res) {
var list = airports.toJSON();
    res.send(list);
};

