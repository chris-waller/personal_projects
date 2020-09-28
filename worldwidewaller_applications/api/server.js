// npm imports
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pino from 'express-pino-logger';

// API routes
import loginRouters from './_controllers/login';
import resumeRouters from './_controllers/resume';

// TODO: grab this from a config at some point
const PORT = 3001;

// TODO: need to create an overall site logger when I have a db connection to
// take care of auditing. Need to add that on the client as well.

// setup the API server
const app = express();
const pinoLogger = pino();

// look into bodyParser further to see which options I should set
app.use(bodyParser.urlencoded({ extended: false }));

// use pino for extra request/resposne server logging
app.use(pinoLogger);

// enable cors
app.use(cors());

// setup API routes
app.use('/resume', resumeRouters);
app.use('/login', loginRouters);
app.use('/contact', loginRouters);

// catch-all for routes not found
app.use('/*', (req, res) => {
  res.redirect('http://localhost:3000/');
});

app.listen(PORT, () => console.log(`Express server is running on localhost:${PORT}`));
