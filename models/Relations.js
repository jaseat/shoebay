var Users = require("./Users");
var Users = require("./Privilege");

Users.associate = function(models) {
  Users.hasMany(models.Privilege, {
    onDelete: "cascade",
  });
};

// Privilege.associate = function(models) {
//   Privilege.belongsTo(models.Users, {
//     foreignKey: {
//       allowNull: false,
//     },
//   });
// };
