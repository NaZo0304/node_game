/**
 * Session controller
 * 
 * @package node_games
 * @subpackage controllers
 * @author ohta-rh
 */
var Session = module.exports = {
	base: 'session/',
	title: function(){return {title: 'NODE GAME'};},
	/*login page render*/
	index: function(req, res){
	        console.log("hoge");
		res.render(Session.base + 'index', Session.title());		
	},
};
