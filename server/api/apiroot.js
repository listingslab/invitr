
"use strict";
// Overview of the API\'s endpoints etc

const 	config 	= require('../../config'),
		utils 	= require('../utils');

function *apiroot() {
	let res = utils.apiResponseObj('Welcome to the invitr API');
	res.endpoints = [
		{
			name: 'apiroot',
			path: '/api/',
			methods: 'GET',
			description: 'Overview of the API\'s endpoints etc'
		},
		{
			name: 'setup',
			path: '/api/setup',
			methods: 'GET',
			description: 'Loaded by the frontend to verify everything is working'
		}
	];
	this.body = res;
}

module.exports = apiroot;