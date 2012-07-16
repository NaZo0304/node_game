socket.on('player.create', function(msg) {
	console.log('player.created : ' + msg);
});
socket.on('player.update', function(msg) {
	console.log('player.update : ' + msg);
});
socket.on('disconnect',    function(msg) {
	console.log('disconnect : ' + msg);
});
