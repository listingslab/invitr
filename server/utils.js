// Listingslab Server Utilities
"use strict";


module.exports.requestLogger = function *(next) {
	console.log('%s %s %s %s', this.req.method, 'Request to', this.req.url , '@ ' + getTime ());
	yield next;
}

// Returns the time
module.exports.time = function () {
  return getTime();
};

function getTime (){
	let time = new Date ();
 	time = time.getHours() + ':' + time.getMinutes() + ' ' + time.getSeconds() + 's';
 	return time;
}
