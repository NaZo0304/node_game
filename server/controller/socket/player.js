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
		p.x = data['item'].x;
		p.y = data['item'].y;
		p.HP = data['item'].HP;
		p.MP = data['item'].MP;
		p.save();
		p.c_id = p._id
		p.id = p._id
		console.log(p);
		socket.emit(data.clientEvent, data.item);
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

