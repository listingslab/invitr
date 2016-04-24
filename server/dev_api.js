// Special Development version of the API to run alongsite the webpack devserver
"use strict";

// Modules
const 	config 		= require('../config'),
		utils 		= require('./utils');

// Dependencies
const 	clear		= require('clear'),
		colors		= require('colors'),
		koa			= require('koa'),
		mount 		= require('koa-mount'),
		route 		= require('koa-route');

let app = koa();
app.use(utils.requestLogger);

let api = require('./api.js');
app.use(mount('/api', api));

app.listen(1975, 'localhost', function () {
	clear ();
	let message = '~~~~~~~~~| Dev Environment on http://localhost:1968 @' + utils.time() + ' |~~~~~~~~~~';
	console.log(message.bgGreen);
});
