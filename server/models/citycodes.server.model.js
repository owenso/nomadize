var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var CityCodeSchema = new Schema({
  country: String,
  iata: String,
  city: String,
  country_abrv: String,
  airports: []

});

mongoose.model('CityCode', CityCodeSchema);
