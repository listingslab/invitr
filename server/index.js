/**
 * Isomorphic Server for Invitr by Listingslab
 */
"use strict";

// Modules
const 	config 		= require('./config'),
		utils 		= require('./lib/utils');

// Dependencies
const	clear		= require('clear'),
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

let 	index = require('./routes/index');
app.use(route.get('/api', index.index));

let 	setup = require('./routes/setup');
app.use(route.get('/api/setup', setup.setup));

let 	make = require('./routes/make');
app.use(route.get('/api/make', make.make));

/**
 * React Frontend
 */
app.use(route.get("*", catchAllRoute));
function *catchAllRoute() {
	this.redirect ('/');
};

app.use(logger());
app.listen(config.app.port, config.app.ip, function () {
	clear ();
	let message = '~~~~~~~~~| Started ' + config.app.name + ' on http://' + config.app.ip + ':' +  config.app.port + ' @ ' + utils.time() + ' |~~~~~~~~~~';
	console.log(message.bgMagenta);
});
