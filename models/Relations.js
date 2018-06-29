var Privilege = require("./Privilege");
var Users = require("./Users");
var ArticlesTable = require("./ArticlesTable");
var ProductTable = require("./ProductTable");
var CommentsTable = require("./CommentsTable");

Users.associate = function(models) {
  Users.hasMany(models.Privilege, {
    onDelete: "cascade",
  });
};

Privilege.associate = function(models) {
  Privilege.belongsTo(models.Users, {
    foreignKey: {
      allowNull: false,
    },
  });
};

ArticlesTable.associate = function(models) {
  ArticlesTable.hasMany(models.Users, {
    onDelete: "cascade",
  });
};

Users.associate = function(models) {
  Users.belongsTo(models.ArticlesTable, {
    foreignKey: {
      allowNull: false,
    },
  });
};

ProductTable.associate = function(models) {
  ProductTable.hasMany(model.Users, {
    foreignKey: {
      allowNull: false,
    },
  });
};

CommentsTable.associate = function(models) {
  CommentsTable.hasMany(models.Users, {
    onDelete: "cascade",
  });
};

Users.associate = function(models) {
  Users.belongsTo(models.CommentsTable, {
    foreignKey: {
      allowNull: false,
    },
  });
};

CommentsTable.associate = function(models) {
  CommentsTable.hasMany(models.ArticlesTable, {
    onDelete: "cascade",
  });
};

ArticlesTable.associate = function(models) {
  ArticlesTable.belongsTo(models.CommentsTable, {
    foreignKey: {
      allowNull: false,
    },
  });
};

CommentsTable.associate = function(models) {
  CommentsTable.hasMany(models.ProducTable, {
    onDelete: "cascade",
  });
};

ProducTable.associate = function(models) {
  ProductTable.belongsTo(models.CommentsTable, {
    foreignKey: {
      allowNull: false,
    },
  });
};
