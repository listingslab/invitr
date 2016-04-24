/**
 * Setup Endpoint:  /api/setup/
 */
 "use strict";

const   parse  = require('co-body'),
		utils  = require('../lib/utils'),
        todos  = require('../models/todos');

exports.setup = function *() {
	//var results = yield todos.find({});
	let res = utils.apiResponseObj('Setup Endpoint');
	res.endpoint = '/api/setup/';
	this.body = res;
};
