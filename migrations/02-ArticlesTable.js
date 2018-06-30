module.exports = {
  up: function(queryInterface, DataTypes) {
    return queryInterface.createTable("ArticlesTable", {
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      date: {
        type: DataTypes.INTEGER,
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
      images: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
    });
    return ArticlesTable;
  },
  down: queryInterface => {
    return queryInterface.dropTable("ArticlesTable");
  },
};
