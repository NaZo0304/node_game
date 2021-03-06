//TODO: connectionは外に出したい
// MongoDB configuration
var config = require('config');
var db = require('mongoose');
db.connect(config.db.development.host + config.db.development.name);

var Schema = db.Schema, ObjectId = Schema.ObjectId;
var Player = db.model('players',
    new Schema( {
        c_id  : ObjectId,
        id  : ObjectId,
        name : String,
        sid : String,
        x : Number,
        y : Number,
        HP : Number,
        MP : Number,
        ST : Number
    })
);

module.exports = Player;
