var socket = location.hostname == 'localhost' ? io.connect('http://localhost:3939') : io.connect('http://192.168.1.7:3939');
var timer;
$(document).ready(function(){
	$('#message').keydown(function(event){
		if(event.keyCode === 13){
			socket.emit('send', {
				action: 'send',
				user: $('#user').val(),
				text: $('#message').val()
			});
		}else{
			socket.emit('type', {
				action: 'type',
				user: $('#user').val()
			});
		}
	});
	$('#send').click(function(event){
		socket.emit('send', {
			action: 'send',
			user: $('#user').val(),
			text: $('#message').val()
		});
	});
	socket.on('receive', function(message){
		switch(message.action){
		case 'send':
			var line = $('<li class="line"></li>').append(
				$('<span class="message"></span>').text(message.user + ': ' + message.text)
			);
			$('#log').append(line);
		break;
		case 'type':
			$('#typing').text(message.user + 'さんがタイピング中');
			clearTimeout(timer);
			var timer = setTimeout(function(){
				$('#typing').empty();
			}, 3000);
		break;
		}
	});	
});
