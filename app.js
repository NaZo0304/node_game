// Module dependencies.
var express = require('express'),
	config = require('config'),
	path = require('path'),
	router = require(config.server.module.router),
	socketRouter = require(config.server.module.socketRouter),
	util = require(config.server.module.util);

var router = require(config.server.module.router);

// Server configuration
var app = module.exports = express.createServer();
// create RedisStore
var RedisStore = require('connect-redis')(express);

console.dir(config.server.viewDir);
app.configure(function(){
	app.set('views', path.resolve(__dirname, config.server.viewDir));
	app.set('view engine', config.common.viewEngine);
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser());
	app.use(express.session(config.common.session));
	app.use(app.router);
	app.use(express.static(config.common.webroot));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function(){
  app.use(express.errorHandler());
});

// Helper setting.
app.dynamicHelpers({
	session: function(req, res){
		return req.session;
	}
});
// URL routing.
var routeMap = util.readJSON(config.server.file.router, config.common.encoding);
router.map(app, routeMap, path.resolve(__dirname, config.server.controllerDir));
// Websocket routing.
var socketMap = util.readJSON(config.server.file.socketRouter, config.common.encoding);
socketRouter.listen(app, socketMap, path.resolve(__dirname, config.server.socketControllerDir));

// Http listening.
app.listen(config.common.port, function(){
	console.log("Express server listening on port %d in %s mode",
		app.address().port,
		app.settings.env
	);
});

