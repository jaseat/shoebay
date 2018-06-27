const express = require('express');
const path = require('path');
const logger = require('morgan');

const html = require('./routes/html');

const app = express();
const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '/../client/build')));

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    const allowed_header = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowed_header.indexOf(origin) > -1) {
      res.header('Access-Control-Allow-Origin', origin);
    }
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, ideaJWT, Accept'
    );
    res.header(
      'Access-Control-Allow-Methods',
      'POST, GET, OPTIONS, PUT, DELETE'
    );
    next();
  });

  const quote = "test 'testing'";
}

app.use('/', html);

app.listen(port, () => console.log(`Listening on port ${port}`));
