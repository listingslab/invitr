// Verify that the environment & mongoDB is all fine
"use strict";

// Modules
const 	config 	= require('../../config'),
		utils 	= require('../utils');

function *setup() {
	let res = utils.apiResponseObj('Setup and verify environment');
	this.body = res;
};

module.exports = setup;