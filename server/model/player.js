//TODO: connectionは外に出したい
// MongoDB configuration
var config = require('config');
var db = require('mongoose');
db.connect(config.db.development.host + config.db.development.name);

var Schema = db.Schema;
var Player = module.exports = db.model('players',
    new Schema( {
        name : String,
	x : Number,
        y : Number,
        HP : Number,
        MP : Number,
        ST : Number
    })
);
