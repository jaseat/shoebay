'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
          isUnique: function(value, next) {
            User.find({ where: { username: value } })
              .then(user => {
                if (user) return next('Username already in use');
                next();
              })
              .catch(error => {
                if (error) return next(error);
              });
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          isUnique: function(value, next) {
            User.find({ where: { email: value } })
              .then(user => {
                if (user) return next('Email already in use');
                next();
              })
              .catch(error => {
                if (error) return next(error);
              });
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4],
        },
      },
      privilege: {
        type: DataTypes.ENUM,
        values: ['user', 'reviewer', 'partner'],
        defaultValue: 'user',
        allowNull: false,
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      footShape: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {}
  );
  User.associate = function(models) {
    // User.belongsTo(models.Privilege);
    User.hasMany(models.Comment);
    User.hasMany(models.Article);
    User.hasMany(models.Product);
  };
  User.getName = function() {
    return 'user';
  };

  User.beforeCreate((user, options) => {
    return cryptPassword(user.password).then(success => {
      user.password = success;
    });
  });

  User.prototype.validPassword = function(plainTextPassword) {
    return bcrypt.compare(plainTextPassword, this.password);
  };

  function cryptPassword(password) {
    return new Promise(function(resolve, reject) {
      bcrypt.genSalt(10, function(err, salt) {
        if (err) return reject(err);
        bcrypt.hash(password, salt, function(err, hash) {
          if (err) return reject(err);
          return resolve(hash);
        });
      });
    });
  }

  return User;
};
