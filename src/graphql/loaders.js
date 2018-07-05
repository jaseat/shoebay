const db = require('../db');
const DataLoader = require('dataloader');
const passport = require('../auth');

const createNodeLoader = table => {
  return new DataLoader(ids => {
    return table
      .findAll({ where: { id: ids } })
      .then(rows => rows.map(row => row.dataValues))
      .then(rows => {
        rows.forEach(row => {
          row.__tableName = table.getName();
        });
        return rows;
      });
  });
};

const nodeLoaders = {
  user: createNodeLoader(db.User),
};

module.exports.getNodeById = nodeId => {
  const { tableName, dbId } = db.splitNodeId(nodeId);
  return nodeLoaders[tableName].load(dbId);
};

module.exports.createUser = ({
  firstName,
  lastName,
  email,
  password,
  paymentMethod,
  footImg,
}) => {
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
      // resolve(user.id);
      req.logIn(user, err => {
        if (err) return reject(err);
        return resolve(user.id);
      });
    })(req, {});
  });
};
