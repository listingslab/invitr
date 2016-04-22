// Isomorphic Server by Listingslab
"use strict";

const 	appname 	= 'invitr',
		env			= process.env,
		ip 			= env.NODE_IP || 'localhost',
		port 		= env.NODE_PORT || 1976,
		utils 		= require('./utils'),
		clear		= require('clear'),
		colors		= require('colors'),
		koa			= require('koa'),
		mount 		= require('koa-mount'),
		route 		= require('koa-route');

let app = koa();

app.use(utils.requestLogger);

let api = require('./routes/api.js');
let host = require('./routes/host.js');
let guest = require('./routes/guest.js');

app.use(mount('/api', api));
app.use(mount('/host', host));
app.use(mount('/', guest));

app.use(route.get('*', function *(){
	this.redirect('/');
}));

app.listen(port, ip, function () {
	clear ();
	let message = '~~~~~~~~~| Started ' + appname + ' on http://' + ip + ':' +  port + ' @ ' + utils.time() + ' |~~~~~~~~~~';
	console.log(message.bgRed);
});
