/**
 * Setup Endpoint:  /api/make/
 */
"use strict";

const   utils  = require('../lib/utils'),
        guests  = require('../models/guests');

exports.make = function *() {
	let res = utils.apiResponseObj('Make Guest');
	res.result = yield guests.insert({
		name: 'guest1'
	});
	this.body = res;
};
