/**
 * URL Router
 * 
 * @package chat-on
 * @subpackage lib
 * @author harapeco
 * @license MIT
 */
var Router = module.exports = {
	map: function(app, map, dir){
		var _map = function(dir, method, m){
			if(!m) return;
			Object.keys(m).forEach(function(key){
				var v = m[key].split('.');
				var controller = require(dir + '/' + v[0]);
				app[method](key, controller[v[1]]);
			});
		};
		_map(dir, "get", map.get);
		_map(dir, "post", map.post);
		_map(dir, "put", map.put);
		_map(dir, "delete", map.remove);
	}
};