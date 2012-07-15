var fs = require('fs');
/**
 * Utility Functions
 * 
 * @package chat-on
 * @subpackage lib
 * @author harapeco
 * @license MIT
 */
var Util = module.exports = {
	/**
	 * Merge properties one or more objects.
	 * 
	 * @param object Initial object to merge
	 * @param object Variable list of objects to merge
	 * @return object Merged object
	 */
	merge: function(){
		var args = Array.prototype.slice.call(arguments),
		len = args.length,
		ret = {};
		for(var i=0; i<len; i++){
			var arg = args[i];
			for(var item in arg) 
				if (arg.hasOwnProperty(item)) ret[item] = arg[item];
		}
		return ret;
	},
	/**
	 * Convert strings to UpperCamelCase.
	 * 
	 * @param string String to camelize
	 * @return string Camelized string
	 */
	camelize: function(str){
		return str.replace(/\w+/g, function(word){
			return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
		});
	},
	/**
	 * Read JSON file and parse contents.
	 * 
	 * @param string Path of the file to read
	 * @param string The type of encoding
	 * @return object The read data
	 */
	readJSON: function(filePath, encoding){
		return JSON.parse(fs.readFileSync(filePath, encoding));
	}
};
