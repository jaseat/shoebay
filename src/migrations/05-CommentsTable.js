module.exports = {
  up: function(queryInterface, DataTypes) {
    return queryInterface.createTable("CommentsTable", {
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
  },
  down: queryInterface => {
    return queryInterface.dropTable("Privilege");
  },
};
