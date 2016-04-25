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
      
      // { 
      //   test: /\.css$/, 
      //   loader: 'style!css' 
      // },

      { test: /node_modules[\/|\\].*\.css$/, loaders: [
        'style-loader?singleton',
        'css-loader',
        'cssnext-loader'
      ]},

      { test: /[\/|\\]react-app[\/|\\].*\.css$/, loaders: [
        'style-loader?singleton',
        'css-loader?modules&localIdentName=[path]--[local]',
        'cssnext-loader'
      ]},

      { 
        test: /\.csv/, loader: 'dsv-loader' 
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
  },
  
  externals: {
      // Use external version of React
      "react": "React",
      "react-dom": "ReactDOM"
  }
}
