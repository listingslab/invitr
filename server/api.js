
"use strict";

const 	env		= process.env,
		koa 	= require('koa'),
		route 	= require('koa-route'),
		utils 	= require('./utils');


var app = module.exports = koa();

// prefix: api
app.use(route.get("/", apithing));
app.use(route.get("/nest/:bit", onething));
app.use(route.get("/verify", verify));

// Verify that the environment & mongoDB is all fine
function *verify() {
	this.body = {
		success: true,
		env: env
	};
};

function *apithing() {
	this.body = {
		method:this.req.method,
		time:utils.time(),
	};
};

function *onething(param) {
	this.body = {
		method:this.req.method,
		url:this.req.url,
		param:param
	};
};
