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
        allowNull: true,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      images: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {}
  );
  Article.associate = function(models) {
    Article.belongsTo(models.User);
    Article.hasMany(models.Comment);
  };
  Article.getName = function() {
    return 'article';
  };
  return Article;
};
