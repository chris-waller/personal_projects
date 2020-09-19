// npm imports
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pino from 'express-pino-logger';
import resumeRouters from './routes/resume';

// TODO: grab this from a config at some point
const PORT = 3001;

// setup the API server
const app = express();
const pinoLogger = pino();

// look into bodyParser further to see which options I should set
app.use(bodyParser.urlencoded({ extended: false }));

// use pino for extra request/resposne server logging
app.use(pinoLogger);

// enable cors
app.use(cors());

// the main server file
app.use('/', express.static(`${__dirname}/dist`));

// setup API routes
app.use('/resume', resumeRouters);

app.listen(PORT, () => console.log(`Express server is running on localhost:${PORT}`));
