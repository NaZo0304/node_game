enchant();
/**
 * @scope   CenterLabel.prototype
 */
var CenterLabel = Class.create(Label, {
    /**
     * 中央表示ラベル
     */
    initialize : function(color){
        // 親のコンストラクタを呼ぶ
        Label.call(this);

        // 中央表示にする
        this.width = 200;
        this._element.style.textAlign = "center";
        // 色を設定
        color = color || "white";
        this.color = color;
    }
});

window.onload = function() {
	var playerMap = [];
	var images = {
	              map   : 'images/map1.gif',
	              chara : 'images/chara0.gif'
		};
    var game = new Game(320, 320);
    game.fps = 15;
    game.preload(images['map'], images['chara']);
    game.onload = function() {
        var mapModel = new MapModel();
        // var mapView = new MapView({el :null, model:mapModel});

        var map = new Map(16, 16);
        map.image = game.assets[images['map']];
        map.loadData(mapModel.get('maptip'), mapModel.get('maptip2'));
        map.collisionData = mapModel.get('collision');

        var foregroundMap = new Map(16, 16);
        foregroundMap.image = game.assets[images['map']];
        foregroundMap.loadData(mapModel.get('foreground'));



        var image = new Surface(96, 128);
        image.draw(game.assets[images['chara']], 0, 0, 96, 128, 0, 0, 96, 128);

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

        var otherModel = new PlayerModel();
        var image = new Surface(96, 128);
        image.draw(game.assets[images['chara']], 97, 0, 96, 128, 0, 0, 96, 128);
        otherModel.player.image = image;
        playerMap.push(otherModel);

        var stage = new Group();
        stage.addChild(map);
        stage.addChild(playerModel.player);
        stage.addChild(otherModel.player);
        stage.addChild(foregroundMap);
        game.rootScene.addChild(stage);

        var pad = new Pad();
        pad.x = 0;
        pad.y = 220;
        game.rootScene.addChild(pad);
        game.rootScene.addChild(playerModel.nameLabel);

        game.rootScene.addEventListener('enterframe', function(e) {
            var x = Math.min((game.width  - 16) / 2 - playerModel.player.x, 0);
            var y = Math.min((game.height - 16) / 2 - playerModel.player.y, 0);
            x = Math.max(game.width,  x + map.width)  - map.width;
            y = Math.max(game.height, y + map.height) - map.height;
            stage.x = x;
            stage.y = y;
        });
    };
    game.start();
};
