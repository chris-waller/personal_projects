const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors');
const app = express();
// const resumePdf =  require('../resources/resume.pdf');

console.log('is this thing on?');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(cors());
app.use('/', express.static(`${__dirname}/dist`));


app.get('/api/greeting', (req, res) => {
  console.log('Youre in the API')  
  return res.download('./resources/resume.pdf', 'chris_waller-full_stack_developer.pdf', function (err) {
    if (err) {
      // Handle error, but keep in mind the response may be partially-sent
      // so check res.headersSent
      console.log("error downloading pdf", err);
    } else {
      // decrement a download credit, etc.
      console.log("client downloaded pdf");
    }
  })
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
