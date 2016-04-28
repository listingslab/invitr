/**
 * API Index Endpoint:  /api/
 */
"use strict";

const   config  = require('./config'),
		utils  = require('./lib/utils'),
        guests  = require('./models/guests');

exports.index = function *() {
	let res = utils.apiResponseObj('API Index');
	// res.process_env = config.app.process_env;
	this.body = res;
};
