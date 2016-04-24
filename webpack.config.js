/**
 * webpack configuration file
 */
"use strict";

const   clear    = require('clear'),
        colors    = require('colors'),
        path = require('path'),
        webpack = require('webpack');

clear ();
console.log('Webpacking...'.bgMagenta);

const PATHS = {
  app: path.join(__dirname, 'react-app/App.jsx'),
  build: path.join(__dirname, 'public')
};

module.exports = {
	
  entry: {
    app: PATHS.app
	},

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: PATHS.build,
    filename: 'js/react-app.js'
  },

  module: {

    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ],

    loaders: [
      
      { 
        test: /\.css$/, 
        loader: 'style!css' 
      },

      {
        test: /\.jsx?$/,
        loader: ['babel'],
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  }
}
