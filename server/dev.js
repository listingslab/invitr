/**
 * Special Dev version the server to run alongsite webpack-dev-server
 */
"use strict";

// Modules
const 	config 		= require('./config'),
		utils 		= require('./lib/utils');	

// Dependencies
const 	clear		= require('clear'),
		colors		= require('colors'),
		koa			= require('koa'),
		logger		= require('koa-logger'),
		route 		= require('koa-route'),
		serve 		= require('koa-static');

let 	app = koa();
app.use(serve('public'));

/**
 * API Routes
 */
let 	setup = require('./routes/setup');
app.use(route.get('/api/setup', setup.setup));


app.use(logger());
app.listen(1975, 'localhost', function () {
	clear ();
	let message = '~~~~~~~~~| Dev API on http://localhost:1975/api @' + utils.time() + ' |~~~~~~~~~~';
	console.log(message.bgGreen);
});