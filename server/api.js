
"use strict";

const 	env		= process.env,
		koa 	= require('koa'),
		route 	= require('koa-route'),
		utils 	= require('./utils');


var app = module.exports = koa();

// prefix: api
app.use(route.get("/", api));
app.use(route.get("/verify", verify));
app.use(route.get("/nest/:bit", nest));


function *api() {
	let res = utils.apiResponseObj('Welcome to the invitr API');
	this.body = res;
}

function *apithing() {
	this.body = {
		message:'Welcome to the invitr API',
		endpoints:{
			verify:{
				description: 'Loaded by the frontend to verify everything is working',
				path: '/api/verify'
			}
		}
	};
};

// Verify that the environment & mongoDB is all fine
function *verify() {
	this.body = {
		success: true,
		env: env
	};
};


function *nest(param) {
	this.body = {
		method:this.req.method,
		url:this.req.url,
		param:param
	};
};
