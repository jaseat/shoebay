const express = require('express');
const router = express.Router();

const path = require('path');

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../../client/build', 'index.html'));
  });
}
module.exports = router;
