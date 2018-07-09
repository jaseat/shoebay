const express = require('express');
const router = express.Router();
const { detectLabel } = require('../vision');

router.post('/img', (req, res) => {
  detectWeb(req.body.image)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.sendStatus(503);
    });
});

module.exports = router;
