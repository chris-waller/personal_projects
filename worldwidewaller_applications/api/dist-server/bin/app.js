"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var pino = require('express-pino-logger')();

var cors = require('cors');

var resumePdf = require('C:/Software Projects/Personal Projects/worldwidewaller_applications/api/server/resources/resume.pdf');

var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(pino);
app.use(cors());
app.get('/api/greeting', function (req, res) {
  console.log('Youre in the API');
  res.download(resumePdf, 'the_pdf_file.pdf', function (err) {
    if (err) {
      // Handle error, but keep in mind the response may be partially-sent
      // so check res.headersSent
      console.log("error downloading pdf");
    } else {
      // decrement a download credit, etc.
      console.log("client downloaded pdf");
    }
  });
});
app.listen(3001, function () {
  return console.log('Express server is running on localhost:3001');
});