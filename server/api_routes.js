
"use strict";

const 	config 	= require('../config'),
		koa 	= require('koa'),
		route 	= require('koa-route'),
		apiroot = require('./api/apiroot'),
		setup 	= require('./api/setup');

let app = module.exports = koa();

app.use(route.get("/", apiroot));
app.use(route.get("/setup", setup));
