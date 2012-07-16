socket.on('player.create', function(msg) {
	console.log('player.created : ');
	console.log(msg);
});
socket.on('player.update', function(msg) {
	console.log('player.update : ');
	console.log(msg);
});
socket.on('disconnect',    function(msg) {
	console.log('disconnect : ');
	console.log(msg);
});
