if (process.env.NODE_ENV !== 'production') process.title = 'myApp';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const graphqhlHTTP = require('express-graphql');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const port = process.env.PORT || 3001;

//Graphql schema
const { Schema } = require('./graphql');

//database
const db = require('./db');
const sequelize = require('./db/config/sequelize');
const Loaders = require('./dataloader/loaders');

const myStore = new SequelizeStore({
  db: sequelize,
});

//routes
const html = require('./routes/html');
const auth = require('./routes/auth');
const vision = require('./routes/vision');
const amazon = require('./routes/product');

//log for dev
app.use(logger('dev'));
//body-parser from testing vision api
app.use(bodyParser.json());

//session set up
app.use(
  session({
    store: myStore,
    secret: 'should_be_in_env_when_dployed_on_heroku', // session secret
  })
);
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

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

if (process.env.NODE_ENV === 'production') {
  function formatError(error) {
    let message = null;
    if (error.message[0] === '[') message = JSON.parse(error.message);
    else message = error.message;
    return {
      message,
    };
  }
} else {
  function formatError(error) {
    console.log(error);
    let message = null;
    if (error.message[0] === '[') message = JSON.parse(error.message);
    else message = error.message;
    return {
      message,
      locations: error.locations,
      path: error.path,
    };
  }
}

app.use('/auth', auth);
app.use(
  '/api/graphql',
  // graphqhlHTTP({
  //   schema: Schema,
  //   graphiql: true,
  //   pretty: true,
  // })
  graphqhlHTTP(req => {
    const context = {
      user: req.user ? req.user : null,
      loaders: Loaders.nodeLoaders(req.user ? req.user.id : null),
      req: req,
      db,
    };
    return {
      schema: Schema,
      graphiql: process.env.NODE_ENV === 'production' ? false : true,
      context,
      pretty: true,
      formatError: formatError,
    };
  })
);
// app.use('/', html);
app.use('/vision', vision);
app.use('/product', amazon);

app.listen(port, () => console.log(`Listening on port ${port}`));
