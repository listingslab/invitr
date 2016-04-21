"use strict";

let env			= process.env;
let appname 	= 'invitr';
let host 		= env.NODE_IP || 'localhost';
let port 		= env.NODE_PORT || 1976;
let colors		= require('colors');
let fs			= require('fs-extra');
let serve		= require('koa-static');
let body		= require('koa-better-body');
let request 	= require('koa-request');
let koa			= require('koa');

const app = koa();

app.use(serve('public'));
app.use(body({formLimit:'10mb'}));

app.listen( port, host, function () {
	console.log('~~~~~~~~~~~~~~~~| ' + appname + ' on http://' + host + ':' +  port + ' |~~~~~~~~~~~~~~~~');
});
