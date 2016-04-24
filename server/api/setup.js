
"use strict";

const 	config 	= require('../../config'),
		utils 	= require('../utils');

// Verify that the environment & mongoDB is all fine
function *setup() {
	let res = utils.apiResponseObj('Setup and verify environment');
	this.body = res;
};

module.exports = setup;