// Isomorphic Server by Listingslab
"use strict";

const 	config 		= require('./config'),
		appname 	= 'invitr',
		env			= process.env,
		ip 			= env.NODE_IP || 'localhost',
		port 		= env.NODE_PORT || 1976,
		utils 		= require('./utils'),
		clear		= require('clear'),
		colors		= require('colors'),
		koa			= require('koa'),
		mount 		= require('koa-mount'),
		route 		= require('koa-route'),
		serve 		= require('koa-static');



let app = koa();
app.use(utils.requestLogger);
app.use(serve('public'));

let api = require('./api.js');
app.use(mount('/api', api));

app.use(route.get("*", apithing));
function *apithing() {
	this.redirect ('/');
};

app.listen(port, ip, function () {
	clear ();
	let message = '~~~~~~~~~| Started ' + appname + ' on http://' + ip + ':' +  port + ' @ ' + utils.time() + ' |~~~~~~~~~~';
	console.log(message.bgRed);
	// console.log(config);
});
