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

const myStore = new SequelizeStore({
  db: sequelize,
});

//routes
const html = require('./routes/html');
const auth = require('./routes/auth');
const vision = require('./routes/vision');

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
myStore.sync();

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
      user: 'user:' + (req.user ? req.user.id : 'null'),
      req,
      db,
    };
    return { schema: Schema, graphiql: true, context, pretty: true };
  })
);
app.use('/', html);
app.use('/vision', vision);

app.listen(port, () => console.log(`Listening on port ${port}`));
