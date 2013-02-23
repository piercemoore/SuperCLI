/**
 * This module is intended to provide an easy interface for logging beautiful, well-formed messages to the console.
 *
 * @author Pierce Moore
 * @email Pierce@PierceMoore.com
 * 
 * Mad props here to this awesome coloring guide I found here:
 * @link https://wiki.archlinux.org/index.php/Color_Bash_Prompt
 */
var __ = require('underscore');

// ಠ_ಠ
var $ = {
	// Utility methods
	bracket : function(m) { return $$.b("[ ") + m + $$.b(" ]") },

	// Specific methods for messages
	log : function() { return this.bracket( $$.c("Log") ) },
	success : function() { return this.bracket( $$.g("Success") ) },
	ok : function() { return this.bracket( $$.g("OK") ) },
	OK : function() { return this.bracket( $$.g("OK") ) },
	error : function() { return this.bracket( $$.R("Error") ) },
	warn : function() { return this.bracket( $$.y("Warning") ) },

	/**
	 * Semantic color function mappings
	 */
	red : function(m) { return $$.r(m) },
	green : function(m) { return $$.g(m) },
	yellow : function(m) { return $$.y(m) },
	blue : function(m) { return $$.b(m) },
	magenta : function(m) { return $$.m(m) },
	cyan : function(m) { return $$.c(m) },
	white : function(m) { return $$.w(m) },
	RED : function(m) { return $$.R(m) },
	GREEN : function(m) { return $$.G(m) },
	YELLOW : function(m) { return $$.Y(m) },
	BLUE : function(m) { return $$.B(m) },
	MAGENTA : function(m) { return $$.M(m) },
	CYAN : function(m) { return $$.C(m) },
	WHITE : function(m) { return $$.W(m) }

};
	
/**
 * Color functions
 */
var t = "\033[0m";
var $$ = {
	t : "\033[0m", // Reset colors to default terminal color
	// regular colors
	k : function(m) { return "\033[0;30m" + m + t },	// black
	r : function(m) { return "\033[0;31m" + m + t },	// red
	g : function(m) { return "\033[0;32m" + m + t },	// green
	y : function(m) { return "\033[0;33m" + m + t },	// yellow
	b : function(m) { return "\033[0;34m" + m + t },	// blue
	m : function(m) { return "\033[0;35m" + m + t },	// magenta
	c : function(m) { return "\033[0;36m" + m + t },	// cyan
	w : function(m) { return "\033[0;37m" + m + t },	// white
	
	//emphasized (bolded) colors
	K : function(m) { return "\033[1;30m" + m + t },
	R : function(m) { return "\033[1;31m" + m + t },
	G : function(m) { return "\033[1;32m" + m + t },
	Y : function(m) { return "\033[1;33m" + m + t },
	B : function(m) { return "\033[1;34m" + m + t },
	M : function(m) { return "\033[1;35m" + m + t },
	C : function(m) { return "\033[1;36m" + m + t },
	W : function(m) { return "\033[1;37m" + m + t }
};

//__.bindAll($);
//__.bindAll($$);

var write = function( items, code ) {
	code = code || "log";
	var codeString = $[code]();
	var toConsole = [ codeString ];
	__.each(items, function(item) {
		toConsole.push(item);
	});
	console.log.apply(null, toConsole);
}

module.exports = function() {
	write(arguments,"log");
};

__.extend(module.exports, {
	lg : function(){
		write(arguments,"log");
	},
	log : function() {
		write(arguments,"log");
	},
	error : function() {
		write(arguments, "error");
	},
	success : function() {
		write(arguments, "success");
	},
	warn : function() {
		write(arguments, "warn");
	},
	ok : function() {
		write(arguments, "ok");
	},
	$ : $,
	$$ : $$,
	write : write
});