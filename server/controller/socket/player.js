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
	         	 return require(' ../../../' + config.server.modelDir + 'player.js');
		},
	//移動
	create: function(io, socket, data) {
		var klass = Player.model();  
		var p = new klass();
		p.x = data['item'].x;
		p.y = data['item'].y;
		p.HP = data['item'].HP;
		p.MP = data['item'].MP;
		p.save();
		p.c_id = p._id
		p.id = p._id
		console.log(p);
		socket.emit(data.clientEvent, p);
	},
	update: function(io,socket,data){
                var config = require('config')
	        var model =  require(' ../../../' + config.server.modelDir + 'player.js');
		var p = model.findById("5002d4279776ec2115000004");
		p.x = data['item'].x;
		p.y = data['item'].y;
		p.HP = data['item'].HP;
		p.MP = data['item'].MP;
		p.save();
	 	//current_userを返却＆checkする
		socket.emit(data.clientEvent, p);
	},
	read: function(io, socket, data){
		 socket.emit(data.clientEvent, data);
	 },
	destroy: function(io, socket, data){
		 socket.emit(data.clientEvent, data);
	 }
}

