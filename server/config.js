"use strict";
var path = require("path");
var _ = require("lodash");

var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

var base = {
  app: {
    root: path.normalize(path.join(__dirname, "/..")),
    env: env,
  },
};

var specific = {
  development: {
    app: {
      port: 3000,
      name: "Invitr on Localhost"
    },
    mongo: {
      url: "mongodb://localhost/koareactfullexample_dev",
    },
  },
  production: {
    app: {
      port: process.env.PORT || 3000,
      name: "Invitr on OpenShift",
    },
    mongo: {
      url: "mongodb://localhost/koareactfullexample",
    },
  },
};

module.exports = _.merge(base, specific[env]);
