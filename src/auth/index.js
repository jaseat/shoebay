const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const User = require('../models/User');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function(username, password, done) {
      //use to check if user with e-mail exist
      // User.findOne({ user_email: username }, function(err, user) {
      //   if (err) {
      //     return done(err);
      //   }
      //   if (!user) {
      //     return done(null, false, { message: 'Incorrect email.' });
      //   }
      //   if (!user.validPassword(password)) {
      //     return done(null, false, { message: 'Incorrect password.' });
      //   }
      //   return done(null, user);
      // });
    }
  )
);

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
