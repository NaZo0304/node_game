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
		io.sockets.emit(data.clientEvent, p);
	},
	update: function(io,socket,data){
                var config = require('config')
	        var model =  require(' ../../../' + config.server.modelDir + 'player.js');
		item = data['item'];
		attr = { x: item.x, y: item.y, HP: item.HP, MP: item.MP }
		model.update({_id: data.id }, attr, function(err){});
	 	//current_userを返却＆checkする
		attr = { x: item.x, y: item.y, HP: item.HP, MP: item.MP, id: data.id, c_id: data.id, _id: data.id }

		io.sockets.emit('player.update', attr);
	},
	read: function(io, socket, data){
		 socket.emit(data.clientEvent, data);
	 },
	destroy: function(io, socket, data){
		 socket.emit(data.clientEvent, data);
	 }
}

