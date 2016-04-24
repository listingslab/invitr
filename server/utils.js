// Listingslab Server Utilities
"use strict";

const 	config 		= require('../config'),
		moment		= require('moment');

// Logger to keep track of server requests
module.exports.requestLogger = function *(next) {
	console.log('%s %s %s %s', this.req.method, 'Request to', this.req.url , '@ ' + getTime ());
	yield next;
}

// Exposes the time
module.exports.time = function () {
  return getTime();
};

// create an basic API response object
module.exports.apiResponseObj = function (message) {
	let res = {
		api: config.app.version,
		message: message,
		unixstamp: getUnixstamp (),
		time: getTime(),
		// config:config
	}
	return res;
};

////////////////////////////////////////////////////
// Internal Functions

// Returns the time in the format 12:01 34
function getTime() {
	return moment().format ('HH:mm ss');
}

// Returns current unix timestamp
function getUnixstamp() {
 	return moment().unix();
}
