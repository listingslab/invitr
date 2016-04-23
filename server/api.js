
"use strict";

const 	config 	= require('./config'),
		env		= process.env,
		koa 	= require('koa'),
		route 	= require('koa-route'),
		utils 	= require('./utils');

let app = module.exports = koa();

// prefix: api
app.use(route.get("/", api));
app.use(route.get("/verify", verify));
app.use(route.get("/nest/:bit", nest));

// Verify that the environment & mongoDB is all fine
function *verify() {
	let res = utils.apiResponseObj('Verifying Environment');
	// res.env = env;
	this.body = res;
};

function *nest(param) {
	this.body = {
		method:this.req.method,
		url:this.req.url,
		param:param
	};
};

function *api() {
	let res = utils.apiResponseObj('Welcome to the invitr API');
	res.endpoints = {
		verify:{
			path: '/api/verify',
			description: 'Loaded by the frontend to verify everything is working'
		}
	};
	this.body = res;
}