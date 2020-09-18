"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var pino = require('express-pino-logger')();

var cors = require('cors');

var resumePdf = './resources/resume.pdf';
var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(pino);
app.use(cors());
app.get('/api/greeting', function (req, res) {
  console.log('Youre in the API');
  var name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    greeting: "Hello ".concat(name, "!")
  }));
});
app.listen(3001, function () {
  return console.log('Express server is running on localhost:3001');
});