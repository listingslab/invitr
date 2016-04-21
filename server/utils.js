// Listingslab Server Utilities
"use strict";

// Returns the time
module.exports.time = function () {
  let time = new Date ();
  time = time.getHours() + ':' + time.getMinutes() + ' ' + time.getSeconds() + 's';
  return time;
};
