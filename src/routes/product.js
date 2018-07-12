const express = require('express');
const router = express.Router();
const { requestBuilder } = require('../amazon/api');

router.post('/search', (req, res) => {
  requestBuilder(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      if (err[0].Error) {
        console.log(err[0].Error[0]);
      }
      res.json({ done: true });
    });
});

module.exports = router;
