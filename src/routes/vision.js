const express = require('express');
const router = express.Router();
const { LabelDetection, WebDetection } = require('../vision');

router.post('/img/label', (req, res) => {
  LabelDetection(req.body.image)
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
});

router.post('/img/web', (req, res) => {
  WebDetection(req.body.image)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
