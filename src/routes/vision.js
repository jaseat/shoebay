const express = require('express');
const router = express.Router();
const analyze = require('../vision');

router.post('/img', (req, res) => {
  analyze(req.body.image).then(result => {
    res.json(result);
  });
  // detectLabel(req.body.image)
  // .then(data => {
  //   res.json(data);
  // })
  // .catch(err => {
  //   res.sendStatus(503);
  // });
});

module.exports = router;
