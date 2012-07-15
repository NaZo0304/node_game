/**
 * Friend controller
 * 
 * @package chat-on
 * @subpackage contollers.socket
 * @author harapeco
 */
var Friend = module.exports = {
	/**
	 * 登録
	 */
	create: function(io, socket, data){
		 console.log("Emit server socket event!");
		 socket.emit(data.clientEvent, data);
	},
	/**
	 * 読み取り
	 */
	read: function(io, socket, data){
		 socket.emit(data.clientEvent, data);
	 },
	/**
	 * 更新
	 */
	update: function(io, socket, data){
		 socket.emit(data.clientEvent, data);
	 },
	/**
	 * 削除
	 */
	destroy: function(io, socket, data){
		 socket.emit(data.clientEvent, data);
	 }
}
