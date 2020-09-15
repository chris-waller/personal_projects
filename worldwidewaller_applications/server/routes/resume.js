const routes = require('express').Router();
const resumePdf = require('../resources/resume.pdf');

routes.get('/resume/pdf', (req, res) => {
  // const file = path.join(__dirname, 'file.pdf');
  /*
  res.download(resumePdf, (err) => {
    if (err) {
      console.log('Error');
      console.log(err);
    } else {
      console.log('Success');
    }
  });
  */
  console.log('getting pdf', resumePdf);
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

/*
routes.get('/:modelId', (req, res) => {
  const modelId = req.params.modelId * 1;
  const model = data.models.find((m) => m.id === modelId);

  res.status(200).json({ model });
});
*/

module.exports = routes;
