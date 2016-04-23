// Listingslab Server Utilities
"use strict";

// A nice little logger to we can keep track of server requests
module.exports.requestLogger = function *(next) {
	console.log('%s %s %s %s', this.req.method, 'Request to', this.req.url , '@ ' + getTime ());
	yield next;
}

// Exposes the time
module.exports.time = function () {
  return getTime();
};

// Works out the time
function getTime (){
	let time = new Date ();
 	time = time.getHours() + ':' + time.getMinutes() + ' ' + time.getSeconds() + 's';
 	return time;
}
