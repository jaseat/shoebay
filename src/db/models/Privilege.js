'use strict';
module.exports = (sequelize, DataTypes) => {
  var Privilege = sequelize.define(
    'Privilege',
    {
      userType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
    },
    {}
  );
  Privilege.associate = function(models) {
    Privilege.hasMany(models.User);
  };
  return Privilege;
};
