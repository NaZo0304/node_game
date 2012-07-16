/**
 * Session controller
 * 
 * @package node_game
 * @subpackage contollers.socket
 * @author ohta-rh
 */
var Session = module.exports = {
    /*ユーザーをログインして生成*/
    create: function(io, socket, data){
	       socket.emit(data.clientEvent, data)
      	    }
    destroy: function(io, socket, data){
                socket.emit(data.clientEvent, data);
   	    }
}
