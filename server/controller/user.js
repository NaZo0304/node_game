/**
 * User controller
 * 
 * @package chat-on
 * @subpackage controllers
 * @author harapeco
 */
var User = module.exports = {
	base: 'user/',
	title: function(){return {title: 'Chat-on'};},
	index: function(req, res){
		res.render(User.base + 'index', User.title());		
	},
	/**
	 * ログインページを表示する
	 */
	login: function(req, res){
		res.render(User.base + 'login', User.title());
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
	friends: function(){
		
	}
};
