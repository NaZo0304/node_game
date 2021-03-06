/**
 * Backbone using websocket.
 *
 * @package node_game
 * @author harapeco
 * @respect http://developer.teradata.com/blog/jasonstrimpel/2011/11/backbone-js-and-socket-io
 * @license MIT
 */
socket = location.hostname == 'localhost' ? io.connect('http://localhost:3939') : io.connect('http://192.168.1.7:3939');
Backbone.connectSocket = function(room, name){
	if(!name) name = _.uniqueId('player_');
	socket.on('backbone.socket.connected', function(){
		socket.json.emit('init', {
			'room': room,
			'name': name
		});
	});
	socket.on('backbone.socket.message', function(data){
		console.log('message is', data);
	});
}
Backbone.sync = function(method, model, options){
	var emitEvent = function(model, method){return model.url + '.' + method;}
	var signature = function(model){
		var ret = {};
		if(model.url) ret.endPoint = model.url + (model.id ? ('/' + model.id) : '');
		if(model.ctx) ret.ctx = model.ctx;
		return ret;
	}
	var onEvent = function(operation, signature){
		var ret = signature.endPoint + '.' + operation;
		if(signature.ctx) ret += ('.' + signature.ctx);
		return ret;
	}
	var e = onEvent(method, signature(model));
	var data = {
		clientEvent: e,
		item: model.attributes,
		id: model.id
	};
	socket.emit(emitEvent(model, method), data);
	switch(method){
	case 'create':
		console.log("created method");
		console.log(e);
		socket.once(e, function(data){
			console.log(data.id);
			model.id = data.id;
		});
	break;

	case 'read':
		socket.once(e, function(data){options.success(data);});
	break;
	default:
		socket.once(e, function(data){console.log(data);});
	break;
	}
}
