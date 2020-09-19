import express from 'express';
import bodyParser from  'body-parser';
import pino from 'express-pino-logger';
import cors from 'cors';
// the only reason this is here is for build validation -- look into a something to test build
// validations and import all static files (could probably also just add them to a /static folder
// and have webpack compile that)
import resumePdf from '~/resources/resume.pdf';

const API_PORT = 3001;

// setup the epress server
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(cors());
app.use('/', express.static(`${__dirname}/dist`));

// download the resume PDF
app.get('/api/greeting', (req, res) => {
  console.log('User has requested ');
  const file = `${__dirname}/resume.pdf`;
  const fileName = 'Chris Waller - Full Stack Application Devloper.pdf';
  res.download(file, fileName); // Set content-disposition and send file
});

// start the server
app.listen(API_PORT, () =>
  console.log(`Express server is running on localhost: ${API_PORT}`)
);
