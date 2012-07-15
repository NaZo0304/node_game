//TODO: connectionは外に出したい
// MongoDB configuration
var config = require('config');
var db = require('mongoose');
db.connect(config.db.development.host + config.db.development.name);
var Schema = db.Schema;

var Map = module.exports = db.model('maps',
	new Schema( {
		name : String,
		x : Number,
		y : Number,
		hp : Number,
		mp : Number,
	})
);
