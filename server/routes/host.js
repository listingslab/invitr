
"use strict";

var koa = require('koa');
var app = module.exports = koa();

app.use(function *(next){
  yield next;
  this.body = 'Host. Check to see if session is logged in';
});