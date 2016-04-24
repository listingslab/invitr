// Isomorphic Server for Invitr by Listingslab
"use strict";

// Modules
const 	config 		= require('../config'),
		utils 		= require('./utils'),
		api 		= require('./api.js');

// Dependencies
const	clear		= require('clear'),
		colors		= require('colors'),
		koa			= require('koa'),
		mount 		= require('koa-mount'),
		route 		= require('koa-route'),
		serve 		= require('koa-static');

let 	app = koa();

app.use(utils.requestLogger);
app.use(serve('public'));
app.use(mount('/api', api));
app.use(route.get("*", catchAllRoute));

function *catchAllRoute() {
	this.redirect ('/');
};

app.listen(config.app.port, config.app.ip, function () {
	clear ();
	let message = '~~~~~~~~~| Started ' + config.app.name + ' on http://' + config.app.ip + ':' +  config.app.port + ' @ ' + utils.time() + ' |~~~~~~~~~~';
	console.log(message.bgRed);
});
