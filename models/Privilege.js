module.exports = () => {
  return {
    function(sequelize, DataTypes) {
      var Privilege = sequelize.define("Privilege", {
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
  };
};
