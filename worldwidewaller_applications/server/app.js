const express = require('express');
// const cors = require('cors')
//const bodyParser = require('body-parser');
// const pino = require('express-pino-logger')
const PORT = 3002;
console.log("in server app.js");
const app = express();
// app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);

// ensure that routing is working
console.log('before foo');
import foo from './resources/resume.pdf';
// const foo2 = require('~');
// console.log(foo2);

const testEs6 = () => {
  console.log('test es6');
}


app.get('/api/greeting', (req, res) => {
  console.log('in /api/greeting', testEs6());
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(PORT, () => console.log(`Express server is running on localhost: ${PORT}`));