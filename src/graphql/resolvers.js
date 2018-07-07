const passport = require('../auth');

module.exports.getNodeById = (nodeId, loaders, db) => {
  const { tableName, dbId } = db.splitNodeId(nodeId);
  if (loaders[tableName]) return loaders[tableName].load(dbId);
  else return new Error('Invalid ID');
};

module.exports.createUser = (
  db,
  { firstName, lastName, email, password, paymentMethod, footImg }
) => {
  return db.User.create({
    firstName,
    lastName,
    email,
    password,
    paymentMethod,
    footImg,
  })
    .then(user => user.dataValues)
    .then(user => {
      user.__tableName = 'user';
      return user;
    });
};

module.exports.logIn = (email, password, req) => {
  return new Promise((resolve, reject) => {
    req.body = {
      email,
      password,
    };
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

module.exports.shapeSearch = points => {
  return null;
};
