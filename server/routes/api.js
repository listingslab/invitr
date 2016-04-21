
"use strict";

const 	koa 	= require('koa'),
		route 	= require('koa-route');

var app = module.exports = koa();

// prefix: api
app.use(route.get("/", apithing));
app.use(route.get("/onething/:bit", onething));

function *apithing() {
	this.body = "api";
};

function *onething() {
	this.body = {
		method:this.req.method,
		url:this.req.url,
		param: ''
	};
};
