/**
 * Player controller
 * 
 * @package node_game
 * @subpackage contollers.socket
 * @author ohta-rh
 */
var Player = module.exports = {
        model: function(){
                         var config = require('config')
	         	 var Player = require(' ../../../' + config.server.modelDir + 'player.js');
			 return Player;
		},
	//Login
	login:  function(io, socket, message) {
		  //sessionにSETする
	},

	//移動
	move: function(io, socket, data) {
		//TODO: ohta あとでなんとかする
		p = new Player.model()
		p.x = data.x;
		p.y = data.y;
		p.hp = data.hp;
		p.mp = data.mp;
		p.save();
		//xとyを保存する
	},
	//login check
	loginRequired: function(){
	  //current_userを返却＆checkする
	}
}

