
"use strict";

var koa = require('koa');
var serve = require('koa-static');
var app = module.exports = koa();
var route 		= require('koa-route');

app.use(route.get("/", hostthing));
app.use(route.get("/:bit", hostthing));

function *hostthing() {
	this.body = {
		method:this.req.method,
		url:this.req.url,
	};
};