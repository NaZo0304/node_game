/**
 * Socket.io URL Router
 * 
 * @package chat-on
 * @subpackage lib
 * @author harapeco
 * @license MIT
 * @respect: https://github.com/myatsumoto/socket.manager
 */
var SocketRouter = module.exports = {
	set: function(event, map, io, socket, dir){
		socket.on(event, function(message){
			var v = map.split('.');
			var callback = SocketRouter.load(v[0], v[1], dir);
			callback(io, socket, message);
		});
	},
	map: function(map, io, socket, dir){
		for(var event in map){
			SocketRouter.set(event, map[event], io, socket, dir);
		}
	},
	load: function(path, func, dir){
		var uri = dir + '/' + path;
		return func ? require(uri)[func] : require(uri);
	},
	listen: function(app, map, dir){
		var io = require('socket.io').listen(app);
		io.sockets.on('connection', function(socket){
		        SocketRouter.session(socket);
			SocketRouter.map(map, io, socket, dir);
		});
	},
	session: function(socket){
		console.log("hoge1");   
		var cookie = socket.store;
		console.log(cookie);
		if(cookie){
			var parseCookie = require("express").cookieParser;
			var sid = parseCookie(cookie)['connect.sid'];
			console.log(sid);
		}else{
		  console.log("nothing cookie");
		}
        }
};
