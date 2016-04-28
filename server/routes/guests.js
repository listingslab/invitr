/**
 * Setup Endpoint:  /api/make/
 */
"use strict";

const   utils  = require('../lib/utils'),
        guests  = require('../models/guests');

exports.guests = function *() {
	let res = utils.apiResponseObj('Guests');
	let results = yield guests.find({});
	res.guests = results;
	this.body = res;
};
