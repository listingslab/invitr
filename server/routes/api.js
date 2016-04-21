
/**
* GET all the results.
*/

exports.home = function *(){
	this.body = 'home';
};

exports.api = function *(){
	this.body = 'all results';
	this.status = 200;
};

exports.admin = function *(){
	this.body = 'admin';
};


