'use strict';

var app = require('./app');

app.get('/', function(req, res, next){
	req.url = '/index.html';
	//res.render('pages/index');
	next();
});

app.get('/*.html', function(req, res, next){
	res.render('pages/' + req.params[0]);
});