const express = require('express');
const router = express.Router();
const { requestBuilder, itemLookup } = require('../amazon/api');

router.post('/search', (req, res) => {
  console.log(req.body);
  requestBuilder(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get('/search/item/:id', (req, res) => {
  itemLookup(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
