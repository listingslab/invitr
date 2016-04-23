"use strict";
var path = require("path");
var _ = require("lodash");

var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

var base = {
  api:{
    version: 'invitr 1.0.1'
  },
  app: {
    root: path.normalize(path.join(__dirname, "/..")),
    env: env,
  },
};

var specific = {
  development: {
    app: {
      port: 1976,
      name: "Invitr on Localhost"
    },
    mongo: {
      url: "mongodb://localhost/invitr",
    },
  },
  production: {
    app: {
      port: process.env.PORT || 3000,
      name: "Invitr on OpenShift",
    },
    mongo: {
      url: "mongodb://openshift/invitr",
    },
  },
};

module.exports = _.merge(base, specific[env]);
