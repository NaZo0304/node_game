socket.on('player.create', function(msg) {
	console.log('player.created : ');
	console.log(msg);
    var playerModel = new PlayerModel({ name: "player" });
    playerModel.player.image = image;

    playerModel.player.isMoving = false;
    playerModel.player.direction = 0;
    playerModel.player.walk = 1;
    playerModel.player.addEventListener('enterframe', function() {
        this.frame = this.direction * 3 + this.walk;
        if (this.isMoving) {
            this.moveBy(this.vx, this.vy);

            if (!(game.frame % 3)) {
                this.walk++;
                this.walk %= 3;
            }
            if ((this.vx && (this.x-8) % 16 == 0) || (this.vy && this.y % 16 == 0)) {
                this.isMoving = false;
                this.walk = 1;
            }
            playerModel.set("x",this.x);
            playerModel.set("y",this.y);
            playerModel.save();
        } else {
            this.vx = this.vy = 0;
            if (game.input.left) {
                this.direction = 1;
                this.vx = -4;
            } else if (game.input.right) {
                this.direction = 2;
                this.vx = 4;
            } else if (game.input.up) {
                this.direction = 3;
                this.vy = -4;
            } else if (game.input.down) {
                this.direction = 0;
                this.vy = 4;
            }
            if (this.vx || this.vy) {
                var x = this.x + (this.vx ? this.vx / Math.abs(this.vx) * 16 : 0) + 16;
                var y = this.y + (this.vy ? this.vy / Math.abs(this.vy) * 16 : 0) + 16;
                if (0 <= x && x < map.width && 0 <= y && y < map.height && !map.hitTest(x, y)) {
                    this.isMoving = true;
                    arguments.callee.call(this);
                }
            }
        }
    });
  stage.addChild(playerModel.player);
  game.rootScene.addEventListener('enterframe', function(e) {
      var x = Math.min((game.width  - 16) / 2 - playerModel.player.x, 0);
      var y = Math.min((game.height - 16) / 2 - playerModel.player.y, 0);
      x = Math.max(game.width,  x + map.width)  - map.width;
      y = Math.max(game.height, y + map.height) - map.height;
      stage.x = x;
      stage.y = y;
  });

});
socket.on('player.update', function(msg) {
	console.log('player.update : ');
	console.log(msg);
});
socket.on('disconnect',    function(msg) {
	console.log('disconnect : ');
	console.log(msg);
});
