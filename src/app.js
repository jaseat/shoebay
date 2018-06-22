const express = require('express');
const path = require('path');

const html = require('./routes/html');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/', html);

app.listen(port, () => console.log(`Listening on port ${port}`));
