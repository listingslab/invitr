"use strict";
// Invitr Isomorphic Server by Listingslab
const 	appname 	= 'invitr',
		env			= process.env,
		host 		= env.NODE_IP || 'localhost',
		port 		= env.NODE_PORT || 1976,
		clear		= require('clear'),
		colors		= require('colors'),
		koa			= require('koa');

let app = koa();

function *reqlogger(next) {
	let reqTime = new Date ();
	reqTime = reqTime.getHours() + ':' + reqTime.getMinutes() + ' ' + reqTime.getSeconds();
	console.log('%s - %s %s', reqTime, this.req.method, this.req.url);
	yield next;
}
app.use(reqlogger);






app.listen( port, host, function () {
	clear ();
	let message = '~~~~~~~~~~~~~~~~| ' + appname + ' started on http://' + host + ':' +  port + ' |~~~~~~~~~~~~~~~~';
	console.log(message.bgRed);
});
