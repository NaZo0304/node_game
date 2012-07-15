/**
 * Player controller
 * 
 * @package node_game
 * @subpackage contollers.socket
 * @author ohta-rh
 */
var Player = module.exports = {
	//Login
	login:  function(io, socket, message) {
		  //sessionにSETする
	},

	//移動
	move: function(io, socket, message) {
		//TODO: ohta あとでなんとかする
                var config = require('config')
		var Player = require(' ../../../' + config.server.modelDir + 'player.js');
		//移動するplayerを取得
		var p = Player.findByID("");
		p.name = message.text;
		p.save();
		//xとyを保存する
	},
	//login check
	loginRequired: function(){
	  //current_userを返却＆checkする
	}
}

