
"use strict";

const 	koa 	= require('koa'),
		route 	= require('koa-route');

var app = module.exports = koa();

// prefix: api
app.use(route.get("/", apithing));
app.use(route.get("/:bit", onething));

function *apithing() {
	this.body = {
		method:this.req.method,
		url:this.req.url,
	};
};

function *onething(param) {
	this.body = {
		method:this.req.method,
		url:this.req.url,
		param:param
	};
};
