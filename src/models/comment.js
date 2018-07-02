'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define(
    'Comment',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
    },
    {}
  );
  Comment.associate = function(models) {
    Comment.belongsTo(models.User);
    Comment.belongsTo(models.Article);
    Comment.belongsTo(models.Product);
  };
  return Comment;
};
