/**
 * Invitr configuration
 */
"use strict";

const   _           = require("lodash"),
        path        = require("path"),
        environment = process.env.NODE_ENV = process.env.NODE_ENV || "development",
        ip          = process.env.NODE_IP = process.env.NODE_IP || "localhost",
        port        = process.env.NODE_PORT = process.env.NODE_PORT || 1976;

let base = {
  app: {
    name: "Invitr",
    version: 'invitr 1.1.3',
    root: path.normalize(path.join(__dirname, "/..")),
    env: environment,
    ip: ip,
    port: port
  },
};

let specific = {
  development: {
    app: {
      server: "localhost"
    },
    mongo: {
      url: "mongodb://localhost/invitr",
    },
  },
  production: {
    app: {
      server: "OpenShift"
    },
    mongo: {
      url: "mongodb://openshift/invitr",
    },
  },
};

module.exports = _.merge(base, specific[environment]);
