// Invitr API
"use strict";

// Modules
const 	config 	= require('../config'),
		apiroot = require('./api/apiroot'),
		setup 	= require('./api/setup');

// Dependencies
const 	koa 	= require('koa'),
		route 	= require('koa-route');

let app = module.exports = koa();

app.use(route.get("/", apiroot));
app.use(route.get("/setup", setup));
