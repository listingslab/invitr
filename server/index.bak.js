"use strict";

let env			= process.env;
let appname 	= 'invitr';
let host 		= env.NODE_IP || 'localhost';
let port 		= env.NODE_PORT || 1976;
let clear		= require('clear');
let colors		= require('colors');
let koa			= require('koa');
var router 		= require('koa-router');
var mount 		= require('koa-mount');

const app = koa();

// Request Logger Middleware
function *reqlogger(next){
	var timeIs = new Date ();
	timeIs = timeIs.getHours() + ':' + timeIs.getMinutes() + ' ' + timeIs.getSeconds();
	console.log('%s - %s %s',timeIs, this.req.method, this.req.url);
	yield next;
}
app.use(reqlogger);



app.listen( port, host, function () {
	clear ();
	let message = '~~~~~~~~~~~~~~~~| ' + appname + ' started on http://' + host + ':' +  port + ' |~~~~~~~~~~~~~~~~';
	console.log(message.bgRed);
});
