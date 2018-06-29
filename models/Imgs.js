module.exports = function(sequelize, DataTypes) {
  var Imgs = sequelize.define("Imgs", {
    Imgs: {
      type: DataTypes.STRING,
    },
  });
  return Imgs;
};
