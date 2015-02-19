'use strict';

var express = require('express');
var stylus = require('stylus');

var app = module.exports = exports = express();
var logger = require('morgan');

//Configuration

app.set('port', process.env.PORT || 8123);
app.set('views');
app.set('view engine', 'jade');

//Middleware

app.use(logger('dev'));
app.use(express.Router());
app.use(express.static('./public'));
app.use(stylus.middleware({
	/*src: './public',*/
	src: './public',
	/*dest: './public/css/',*/
	compress: true
}));