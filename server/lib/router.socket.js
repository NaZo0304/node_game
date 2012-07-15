/**
*Socket.ioURLRouter
*
*@packagechat-on
*@subpackagelib
*@authorharapeco
*@licenseMIT
*@respect:https://github.com/myatsumoto/socket.manager
*/
var SocketRouter = module.exports = {
	set: function(controller, method, io, socket, dir){
		socket.on(controller + '.' + method,function(data){
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
		var filepath = dir+'/'+controller;
		return method ? require(filepath)[method] : require(filepath);
	},
	listen: function(app, map, dir, sessionStore){
		var io=require('socket.io').listen(app);
		io.configure(function(){
			io.set('authorization',function(handshakeData, callback){
				var connect = require('connect'),
					parseCookie = connect.utils.parseCookie,
					Session = connect.middleware.session.Session,
					cookie = handshakeData.headers.cookie;
				if(cookie){
					handshakeData.cookie = cookie;
					handshakeData.sessionId = parseCookie(cookie)['connect.sid'];
					handshakeData.session = sessionStore;
					sessionStore.get(handshakeData.sessionId, function(err, session){
						if(err){
							callback(err.message, false);
						}else{
							handshakeData.session = new Session(handshakeData, session);
							callback(null, true);
						}
					});
				}else{
					return callback('Cookie is not found.', false);
				}
				callback(null,true);
			});
		});
		io.sockets.on('connection', function(socket){
			SocketRouter.map(map, io, socket, dir);
			//TODO: disconnect
                        socket.on("disconnect", function () {
                           io.sockets.emit("hoge", {});
                         });
		});
	}
};
