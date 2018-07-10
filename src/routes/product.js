const express = require('express');
const router = express.Router();
const { requestBuilder, itemLookup } = require('../amazon/api');

router.get('/search/:keywords', (req, res) => {
  requestBuilder(req.params.keywords)
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
