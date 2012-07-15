var Rpg = module.exports = {
	base: 'rpg/',
	title: function(){return {title: 'Chat-on'};},
	index: function(req, res){
		res.render(Rpg.base + 'index', Rpg.title());		
	},
	/**
	 * ログインページを表示する
	 */
	login: function(req, res){
		res.render(Rpg.base + 'login', Rpg.title());
	},
	/**
	 * 会員登録API
	 */
	add: function(){
		
	},
	/**
	 * 会員退会API
	 */
	remove: function(){
		
	},
	/**
	 * 友達一覧API
	 */
	friends: function(req, res){
		res.render(Rpg.base + 'friends', Rpg.title());
	}
};
