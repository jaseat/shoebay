module.exports = {
  up: function(queryInterface, DataTypes) {
    return queryInterface.createTable("Imgs", {
      Imgs: {
        type: DataTypes.STRING,
      },
    });
    return Imgs;
  },
  down: queryInterface => {
    return queryInterface.dropTable("Imgs");
  },
};
