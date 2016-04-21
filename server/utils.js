"use strict";

module.exports.test = function () {
  return 'test';
}

module.exports.time = function () {
  let time = new Date ();
  time = time.getHours() + ':' + time.getMinutes() + ' ' + time.getSeconds() + 's';
  return time;
};
