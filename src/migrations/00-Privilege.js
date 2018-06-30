module.exports = {
  up: function(queryInterface, DataTypes) {
    return queryInterface.createTable("Privilege", {
      userType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
    });

    return Privilege;
  },
  down: queryInterface => {
    return queryInterface.dropTable("Privilege");
  },
};
