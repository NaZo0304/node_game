//TODO: connectionは外に出したい
// MongoDB configuration
var config = require('config');
var db = require('mongoose');
db.connect(config.db.development.host + config.db.development.name);

var Schema = db.Schema, ObjectId = Schema.ObjectId;
var PlayerCollection = db.model('player.collections',
    new Schema( {
        c_id  : ObjectId,
        players: [{
          id  : ObjectId,
          name : String,
  	  x : Number,
          y : Number,
          HP : Number,
          MP : Number,
          ST : Number,
        }]
    })
);

module.exports = PlayerCollection;
