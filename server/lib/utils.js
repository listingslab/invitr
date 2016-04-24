// Server Utilities
"use strict";

// Modules
const 	config 		= require('../config');

// Dependencies
const 	moment		= require('moment');


module.exports.time = function () {
	// Exposes the time
	return getTime();
};

module.exports.apiResponseObj = function (message) {
	// create an basic API response object
	let res = {
		appname: config.app.name,
		version: config.app.version,
		message: message,
		unixstamp: getUnixstamp (),
		time: getTime(),
		// config:config
	}
	return res;
};

function getTime() {
	// Returns the time in the format 12:01 34
	return moment().format ('HH:mm ss');
}

function getUnixstamp() {
	// Returns current unix timestamp
 	return moment().unix();
}
