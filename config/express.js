var config = require('./config'),
	express = require('express'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function() {
    var app = express();

    // app.use(favicon('./public/img/favicon.ico'));

    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'local') {
    	console.log("Running in development mode!");
    	app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
    	console.log("Running in production mode!");
    	app.use(compress());
    } else if (process.env.NODE_ENV === 'staging') {
        console.log("Running in staging mode!");
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
    	extended:true
    }));

    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(express.static('./public'));

    app.use(express.static('./views'));
    app.set('view engine', 'html');

    app.get('/', function(req,res){res.sendFile('index.html')});

    require('../server/routes/sabre.server.routes.js')(app);
    require('../server/routes/geolocation.server.routes.js')(app);
    require('../server/routes/airports.server.routes.js')(app);

    return app;
};
