/**
 * This module is intended to provide an easy interface for logging beautiful, well-formed messages to the console.
 *
 * @author Pierce Moore
 */
var clc = require('cli-color');

var CONSOLE_WIDTH = clc.width / 2;

exports.log = function( msg ) {
	write( msg, "log" );
}

exports.error = function( item ) {
	write( item, "error" );
}

exports.success = function( item ) {
	write( item, "success" );
}

exports.warn = function( item ) {
	write( item, "warn");
}

function write( item, code ) {
	while( item.length < CONSOLE_WIDTH )
		item = item + " ";

	var msg = "";
//✔, ✖
	switch( code ) {
		case "log":
			msg = clc.blue("[ ") + clc.cyanBright( "LOG" ) + clc.blue("  ]");
			break;
		case "success":
			msg = clc.blue("[  ") + clc.greenBright.bold("OK") + clc.blue("  ]");
			break;
		case "error":
			msg = clc.blue("[ ") + clc.redBright.bold("FAIL") + clc.blue(" ]");
			break;
		case "warn":
			msg = clc.blue("[ ") + clc.yellowBright.bold("WARN") + clc.blue(" ]");
			break;
		default:
			msg = clc.blue("[ ") + clc.cyanBright( "LOG" ) + clc.blue("  ]");
			break;
	}

	item = item + msg;

	console.log( item );
}