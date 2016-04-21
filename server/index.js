// Isomorphic Server by Listingslab
"use strict";

const 	appname 	= 'invitr',
		env			= process.env,
		host 		= env.NODE_IP || 'localhost',
		port 		= env.NODE_PORT || 1976,
		utils 		= require('./utils'),
		clear		= require('clear'),
		colors		= require('colors'),
		koa			= require('koa'),
		mount 		= require('koa-mount');

let app = koa();

function *reqlogger(next) {
	console.log('%s %s %s %s', this.req.method, 'Request to', this.req.url , '@ ' + utils.time() );
	yield next;
}
app.use(reqlogger);

app.listen( port, host, function () {
	clear ();
	let message = '~~~~~~~~~| Started ' + appname + ' on http://' + host + ':' +  port + ' @ ' + utils.time() + ' |~~~~~~~~~~';
	console.log(message.bgRed);
});

function getTime (){
	
}
