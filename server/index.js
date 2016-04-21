"use strict";

let env			= process.env;
let appname 	= 'invitr';
let host 		= env.NODE_IP || 'localhost';
let port 		= env.NODE_PORT || 1976;
let clear		= require('clear');
let colors		= require('colors');
let koa			= require('koa');
let body		= require('koa-better-body');
var router 		= require('koa-router');
var mount 		= require('koa-mount');
let request 	= require('koa-request');
let serve		= require('koa-static');

var api = require('./routes/api.js');

const app = koa();

let API = new router();
API.get('/', api.home);
API.get('/admin', api.admin);
API.get('/api', api.api);

app.use(mount('/', API.middleware()));


// app.use(serve('public'));
// app.use(body({formLimit:'10mb'}));

// app.use(function *(next){
//     this.type = 'json';
//     this.status = 200;
//     this.body = {'Welcome': 'This is a level 2 Hello World Application!!'};
// });

//http://code.tutsplus.com/tutorials/introduction-to-generators-koajs-part-2--cms-21756

app.listen( port, host, function () {
	clear ();
	let message = '~~~~~~~~~~~~~~~~| ' + appname + ' started on http://' + host + ':' +  port + ' |~~~~~~~~~~~~~~~~';
	console.log(message.bgRed);
});
