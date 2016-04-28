/**
 * Setup Endpoint:  /api/setup/
 */
"use strict";

const   utils  = require('../lib/utils'),
        guests  = require('../models/guests');

exports.setup = function *() {
	let res = utils.apiResponseObj('Setup Endpoint');
	// let results = yield guests.find({});
	// res.guests = results;
	this.body = res;
};
