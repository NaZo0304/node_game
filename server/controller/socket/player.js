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
	//移動
	create: function(io, socket, data) {
		  console.log("create")
		var klass = new Player.model;
		var p = new klass();  
		p.x = data.x;
		p.y = data.y;
		p.hp = data.hp;
		p.mp = data.mp;
		console.log(p);
		p.save();
		console.log(p);
		socket.emit(data.clientEvent, data);
	},
	update: function(io,socket,data){
		  console.log("update")
	  //current_userを返却＆checkする
		socket.emit(data.clientEvent, data);
	},
	read: function(io, socket, data){
		 socket.emit(data.clientEvent, data);
	 },
	destroy: function(io, socket, data){
		 socket.emit(data.clientEvent, data);
	 }
}

