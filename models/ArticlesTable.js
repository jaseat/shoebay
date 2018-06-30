module.exports = function(sequelize, DataTypes) {
  var ArticlesTable = sequelize.define("ArticlesTable", {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [255],
      },
    },
    date: {
      type: DataTypes.Date,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return ArticlesTable;
};
