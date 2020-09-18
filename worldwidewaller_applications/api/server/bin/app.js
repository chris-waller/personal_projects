const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors');

// const resumePdf =  require('C:/Software Projects/Personal Projects/worldwidewaller_applications/api/server/resources/resume.pdf');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(cors());

app.get('/api/greeting', (req, res) => {
  console.log('Youre in the API')
  /*
  res.download(resumePdf, 'the_pdf_file.pdf', function (err) {
    if (err) {
      // Handle error, but keep in mind the response may be partially-sent
      // so check res.headersSent
      console.log("error downloading pdf");
    } else {
      // decrement a download credit, etc.
      console.log("client downloaded pdf");
    }
  })
  */
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);