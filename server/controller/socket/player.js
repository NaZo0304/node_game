/**
 * Player controller
 * 
 * @package node_game
 * @subpackage contollers.socket
 * @author ohta-rh
 */
var Player = module.exports = {
        model: function(){
			//TODO: ohta あとでなんとかする
                         var config = require('config')
	         	 var Player = require(' ../../../' + config.server.modelDir + 'player.js');
			 return Player;
		},
	//Login
	login:  function(io, socket, message) {
		  //sessionにSETする
	},

	//移動
	create: function(io, socket, data) {
		p = new Player.model()
		p.x = data.x;
		p.y = data.y;
		p.hp = data.hp;
		p.mp = data.mp;
		p.save();
		//xとyを保存する
	},
	//login check
	update: function(){
	  //current_userを返却＆checkする
	}
}

