const html = require('./html');
const login = require('./login');

module.exports = function(app, passport) {
  app.use('/', html);
  app.use('/auth', auth)(app, passport);
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
