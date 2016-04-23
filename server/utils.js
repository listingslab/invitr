// Listingslab Server Utilities
"use strict";

const 	moment	= require('moment');

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
		api: 'vs1.0.1',
		message: message,
		unixstamp: getUnixstamp (),
		time: getTime()
	}
	return res;
};

////////////////////////////////////////////////////
// Internal Functions

// Returns the time in the format 12:01 34s
function getTime() {
	let d = new Date ();
	let m = d.getMinutes();
	if (m < 10){
		m = '0' + m;
	}
	let s = d.getSeconds();
	if (s < 10){
		s = '0' + s;
	}
 	let time = d.getHours() + ':' + m + ' ' + s + 's';
 	return time;
}

// Returns current unix timestamp
function getUnixstamp() {
 	return moment().unix();
}
