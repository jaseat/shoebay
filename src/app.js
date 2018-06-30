const express = require('express');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');
// const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3001;

//routes
const html = require('./routes/html');
const auth = require('./routes/auth');

//log for dev
app.use(logger('dev'));
//needed for auth
// app.use(cookieParser());
//session set up
app.use(session({ secret: 'should_be_in_env_when_dployed_on_heroku' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV === 'production ');

app.use(express.static(path.join(__dirname, '/../client/build')));
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    const allowed_header = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowed_header.indexOf(origin) > -1) {
      res.header('Access-Control-Allow-Origin', origin);
    }
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, ideaJWT, Accept'
    );
    res.header(
      'Access-Control-Allow-Methods',
      'POST, GET, OPTIONS, PUT, DELETE'
    );
    next();
  });
}

app.use('/auth', auth);
app.use('/', html);

app.listen(port, () => console.log(`Listening on port ${port}`));
