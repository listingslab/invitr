"use strict";

var path    = require("path");
var _       = require("lodash");
var env     = process.env.NODE_ENV = process.env.NODE_ENV || "development";

var base = {
  api:{
    version: 'invitr 1.0.3'
  },
  app: {
    root: path.normalize(path.join(__dirname, "/..")),
    env: env,
  },
};

var specific = {
  development: {
    app: {
      name: "Invitr on Localhost",
      ip: 'localhost',
      port: 1976
    },
    mongo: {
      url: "mongodb://localhost/invitr",
    },
  },
  production: {
    app: {
      name: "Invitr on OpenShift",
      ip: process.env.NODE_IP,
      port: process.env.NODE_PORT
    },
    mongo: {
      url: "mongodb://openshift/invitr",
    },
  },
};

module.exports = _.merge(base, specific[env]);
