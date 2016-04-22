
"use strict";

var koa = require('koa');
var serve = require('koa-static');
var app = module.exports = koa();

app.use(serve('public'));