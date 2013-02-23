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

var config = {
	appName : function(newName) {
		if(newName) {
			__.extend(this.app, { name : newName, showName : true });
		} else {
			if( this.app.showName )
				return this.app.name + ": ";
			else
				return "";
		}
	},
	set : function(settings) {
		__.extend(this, settings);
	},
	hideName : function() {
		this.app.showName = false;
	},
	showName : function() {
		this.app.showName = true;
	},
	setName : function(newName) {
		__.extend(this.app, { name : newName, showName : true });
	},
	nameVisible : true,
	app : {
		name : "SuperCLI",
		showName : true
	},
	messages : {
		log : "  Log  ",
		error : " Error ",
		success : "Success",
		warning : "Warning",
		ok : "   OK  "
	}
};

// ಠ_ಠ
var $ = {
	// Utility methods
	bracket : function(m) { return $$.b("[ " + config.appName() + m + $$.b(" ]") )},

	// Specific methods for messages
	log : function(m) { return this.bracket( $$.c(m) ) },
	success : function(m) { return this.bracket( $$.g(m) ) },
	ok : function(m) { return this.bracket( $$.g(m) ) },
	error : function(m) { return this.bracket( $$.R(m) ) },
	warning : function(m) { return this.bracket( $$.y(m) ) },

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

__.bindAll($);
__.bindAll($$);
__.bindAll(config);

var getMeta = function(args) {
	var meta,title;
	meta = __.first(args,2);
	return {
		title : meta[0],
		type : meta[1],
		args : __.rest(args,2)
	};
};

var write = function( items, type, title ) {
	var typeString = $[type](title);
	var toConsole = [ typeString ];
	__.each(items, function(item) {
		toConsole.push(item);
	});
	console.log.apply(null, toConsole);
};

var standard = function(args, type) {
	write(args, type, config.messages[type]);
};
var custom = function(args) {
	var meta = getMeta(args);
	write(meta.args, meta.type, meta.title);
};

module.exports = function() {
	standard(arguments,"log");
};

__.extend(module.exports, {
	put : function() {
		custom(arguments);
	},
	lg : function(){
		standard(arguments,"log");
	},
	log : function() {
		standard(arguments,"log");
	},
	error : function() {
		standard(arguments, "error");
	},
	success : function() {
		standard(arguments, "success");
	},
	warn : function() {
		standard(arguments, "warning");
	},
	ok : function() {
		standard(arguments, "ok");
	},
	config : config,
	$ : $,
	$$ : $$,
	write : write
});