module.exports = {
  up: function(queryInterface, DataTypes) {
    return queryInterface.createTable("ProductTable", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      parnterID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
    });
    return ProductTable;
  },
  down: queryInterface => {
    return queryInterface.dropTable("ArticlesTable");
  },
};
