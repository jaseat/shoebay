const passport = require('../auth');
const GraphQLError = require('graphql/error');

/**
 * Get node by id.
 * @param {string} nodeId Node id string in the format `ta.ble:id`.
 * @param {object} loaders Node loaders for dataloader
 * @param {object} db The current database context.
 * @returns Returns the node specified by nodeId.
 */
module.exports.getNodeById = (nodeId, loaders, db) => {
  const { tableName, dbId } = db.splitNodeId(nodeId);
  if (loaders[tableName]) return loaders[tableName].load(dbId);
  else return new Error('Invalid ID');
};

/**
 * Log-ins user.
 * @param {string} email User email.
 * @param {string} password User password.
 * @param {object} req The current request context.
 * @returns `User.id` if found, `Unauthorized` otherwise, wrapped in a promise.
 */
const logIn = (email, password, req) => {
  return new Promise((resolve, reject) => {
    req.body = {
      email,
      password,
    };
    if (req.user) req.logOut();
    passport.authenticate('local', (err, user) => {
      if (err) reject(err);
      if (!user) reject('Unauthorized');
      req.logIn(user, err => {
        if (err) return reject(err);
        return resolve(user.id);
      });
    })(req);
  });
};

module.exports.logIn = logIn;

/**
 * Creates new user and returns that user.
 * @param {object} db The current database context.
 * @param {object} newUser The new user.
 * @param {string} newUser.username User name.
 * @param {string} newUser.email
 * @param {string} newUser.paymentMethod
 * @param {string} newUser.footShape
 * @param {object} req The request context
 * @return The new user.
 */
module.exports.createUser = (
  db,
  { username, email, password, paymentMethod, footShape },
  req
) => {
  return db.User.create({
    username,
    email,
    password,
    paymentMethod,
    footShape,
  })
    .then(user => user.dataValues)
    .then(user => {
      user.__tableName = 'user';
      return logIn(email, password, req).then(res => {
        return user;
      });
    })
    .catch(err => {
      const errors = err.errors.map(e => e.message);
      throw new Error(JSON.stringify(errors));
    });
};

/**
 * Performs search based on array of points.
 * @param {object[]} points Array of points.
 * @param {number} points.x
 * @param {number} points.y
 * @returns List of products ordered by similarity.
 */
module.exports.shapeSearch = points => {
  return null;
};
