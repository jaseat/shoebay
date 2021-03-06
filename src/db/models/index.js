'use strict';

var fs = require('fs');
var path = require('path');
var basename = path.basename(__filename);
var Sequelize = require('sequelize');

var sequelize = require('../config/sequelize');
var db = {};

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.splitNodeId = nodeId => {
  const [tableName, dbId] = nodeId.split(':');
  return { tableName, dbId };
};

db.dbIdToNodeId = (dbId, tableName) => {
  return `${tableName}:${dbId}`;
};

module.exports = db;
