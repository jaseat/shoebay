const express = require('express');
const router = express.Router();
const passport = require('../auth');

//matches with /auth/login
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ id: req.user.id });
});
//matches with /auth/logout
router.get('/logout', function(req, res) {
  req.logout();
  res.json({ id: null });
});

module.exports = router;
