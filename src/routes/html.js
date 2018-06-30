const express = require('express');
const router = express.Router();

const path = require('path');

if (process.env.NODE_ENV === 'production') {
  router.get('*', (req, res) => {
    console.log('HERE!!!!!!');
    console.log(path.join(__dirname, '/../../client/build', 'index.html'));
    res.sendFile(path.join(__dirname, '/../../client/build', 'index.html'));
  });
} else console.log('not in production');
module.exports = router;
