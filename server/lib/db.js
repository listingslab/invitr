/**
 * Initialize database connection
 */
"use strict";

const   config 	= require('../config'),
		monk 	= require('monk');

module.exports = monk(config.app.mongoUrl);
