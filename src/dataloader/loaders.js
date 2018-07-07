const DataLoader = require('dataloader');
const db = require('../db');

// Dataloader takes in an array of keys and
// returns an array of rows of same length and order.
// This means if a row doesn't exist we need a null in that position.
// However Sequelize findAll function ignores rows that doesn't exist.
// Therefore we need to insert null in the proper position for those rows.
function insertNullInEmpty(rows, ids) {
  for (let i = 0; i < ids.length; i++) {
    if (!rows[i] || rows[i].id !== parseInt(ids[i])) rows.splice(i, 0, null);
  }
  return rows;
}

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
      })
      .then(rows => insertNullInEmpty(rows, ids));
  });
};

module.exports.nodeLoaders = authToken => {
  return {
    user: createNodeLoader(db.User),
  };
};
