/**
 * Guests Database Model
 */
"use strict";

const 	db 		= require('../lib/db'),
		wrap 	= require('co-monk');

module.exports = wrap(db.get('guests'));
