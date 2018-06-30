module.exports = function(sequelize, DataTypes) {
  var CommentsTable = sequelize.define("CommentsTable", {
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
    // userID: {},
    // articlesID: {},
    // products: {},
  });
  return CommentsTable;
};
