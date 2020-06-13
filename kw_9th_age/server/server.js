const path = require('path');
const express = require('express');
const { GiConsoleController } = require('react-icons/gi');
const app = express();

const port = process.env.PORT || 3000;

const distDir = path.resolve(__dirname, '..', 'dist');

app.use('/', express.static(distDir));

// express will serve up index.html if it doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(distDir, 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));