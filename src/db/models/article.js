'use strict';
module.exports = (sequelize, DataTypes) => {
  var Article = sequelize.define(
    'Article',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Article.associate = function(models) {
    Article.belongsTo(models.User);
    Article.hasMany(models.Comment);
  };
  return Article;
};
