const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors');
const app = express();
const resumePdf =  require('../../resources/resume.pdf');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(cors());
app.use('/', express.static(`${__dirname}/dist`));


app.get('/api/greeting', (req, res) => {
  console.log('Youre in the API')  
  // const file = `${__dirname}/upload-folder/dramaticpenguin.MOV`;
  const file = './dist/7b4700003c78b11ef973990ce9894bff.pdf';
  const fileName = 'Chris Waller - Full Stack Application Devloper.pdf';
  res.download(file, fileName); // Set disposition and send it.
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
