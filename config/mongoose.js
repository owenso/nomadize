var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db, function(err) {
        if (err){
            console.log("error connecting to mongoose: " + err);
          }
        else {
            console.log("mongoose connection successful");
        }
    });

    return db;
};
