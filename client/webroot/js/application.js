// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv
// Backbone.js Model郡
// @see http://qiita.com/items/5acef8dd49f67fd7813c
// @see http://www.ibm.com/developerworks/jp/web/library/wa-backbonejs/
//
// this.defaults : JSON Object
//   modelの初期値っすな。説明省きます。
//
// this.initialize: function () {}
//   コンストラクタだよ。
//
// this.validate: function () {}
//   よくあるクライアントチェック処理
//
// this.error: function () {}
//   よくあるvalidate のエラー処理
//
// this.urlRoot : URL String
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv
var Application = Backbone.Model.extend({
	CHAR_SIZE_X : 32,
	CHAR_SIZE_Y : 32,
    defaults: {
    	id : null,
    	_id : null,
    	c_id : null,
    	name : "名無し",
    	x : 6 * 16 - 8,
    	y : 10 * 16,
    	HP: 100,
    	MP: 100,
    	ST: 100
    },
	player  : null,
	nameLabel    : null,
    url : "player",
    initialize: function () {
        this.player = new Sprite(this.CHAR_SIZE_X, this.CHAR_SIZE_Y);
        this.player.x = this.defaults.x;
        this.player.y = this.defaults.y;

        this.nameLabel = new CenterLabel();
        this.nameLabel.x = this.player.x / 2 - 50;
        this.nameLabel.y = this.player.y - 10;
        this.nameLabel.addEventListener(enchant.Event.ENTER_FRAME, function(){
            this.text = "";
        });
        this.save();
    },
    validate: function (attrs) {
    },
    error: function (model, error) {
        console.log('hoge');
    }
});

//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv
//Backbone.js View郡
//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv

//VIEWは、HTMLに対してJQuery で描画やイベントの登録などを行う。
var PlayerView = Backbone.View.extend({
  initialize: function () {
  	_.bindAll(this, "render");
  	this.model.bind("change", this.render);
  	this.render();
  },
  render: function () {
  }
});
