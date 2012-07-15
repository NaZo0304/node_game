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
	set: function(controller, method, io, socket, dir){
		socket.on(controller+'.'+method, function(data){
			var callback = SocketRouter.load(controller, method, dir);
			callback(io, socket, data);
		});
	},
	map: function(map, io, socket, dir){
		for(var controller in map){
			var method = map[controller];
			if(method === 'crud'){
				SocketRouter.set(controller, 'create', io, socket, dir);
				SocketRouter.set(controller, 'read', io, socket, dir);
				SocketRouter.set(controller, 'update', io, socket, dir);
				SocketRouter.set(controller, 'destroy', io, socket, dir);
			}else{
				SocketRouter.set(controller, method, io, socket, dir);
			}
		}
	},
	load: function(controller, method, dir){
		var filepath = dir + '/' + controller;
		return method ? require(filepath)[method] : require(filepath);
	},
	listen: function(app, map, dir){
		var io = require('socket.io').listen(app);
		io.sockets.on('connection', function(socket){
		        //SocketRouter.session(socket);
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
