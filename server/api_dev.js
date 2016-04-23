
"use strict";

const 	config 		= require('./config'),
		utils 		= require('./utils'),
		clear		= require('clear'),
		colors		= require('colors'),
		koa			= require('koa'),
		mount 		= require('koa-mount'),
		route 		= require('koa-route'),
		serve 		= require('koa-static');

let app = koa();
app.use(utils.requestLogger);


let api = require('./api.js');
app.use(mount('/api', api));

app.listen(1975, 'localhost', function () {
	clear ();
	let message = '~~~~~~~~~| Started Dev API on http://localhost:1975/api @ ' + utils.time() + ' |~~~~~~~~~~';
	console.log(message.bgRed);
});