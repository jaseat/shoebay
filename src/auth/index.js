const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../db');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function(email, password, done) {
      // use to check if user with e-mail exist
      User.findOne({ where: { email: email } })
        .then(user => {
          if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
          }
          // if (!user.validPassword(password)) {
          //   return done(null, false, { message: 'Incorrect password.' });
          // }
          // return done(null, user);
          user.validPassword(password).then(res => {
            if (res) return done(null, user.dataValues);
            else return done(null, false, { message: 'Incorrect passwrod' });
          });
        })
        .catch(err => {
          return done(err);
        });
    }
  )
);

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  User.findById(id).then(user => done(null, user.dataValues));
});

module.exports = passport;
