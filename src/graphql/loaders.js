const db = require('../db');
const DataLoader = require('dataloader');

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
