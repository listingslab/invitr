"use strict";

let env			= process.env;
let appname 	= 'invitr';
let host 		= env.NODE_IP || 'localhost';
let port 		= env.NODE_PORT || 1976;
let colors		= require('colors');
let koa			= require('koa');
let body		= require('koa-better-body');
let request 	= require('koa-request');
let serve		= require('koa-static');

const app = koa();

app.use(serve('public'));
app.use(body({formLimit:'10mb'}));

//http://code.tutsplus.com/tutorials/introduction-to-generators-koajs-part-2--cms-21756

app.listen( port, host, function () {
	console.log('~~~~~~~~~~~~~~~~| ' + appname + ' on http://' + host + ':' +  port + ' |~~~~~~~~~~~~~~~~');
});
