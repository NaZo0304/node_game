//TODO: connectionは外に出したい
// MongoDB configuration
var config = require('config');
var db = require('mongoose');
db.connect(config.db.development.host + config.db.development.name);
var Schema = db.Schema;

var Player = db.model('players', new Schema( {
	name : String
}));

module.exports = Player;
