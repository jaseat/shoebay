var Privilege = require("./Privilege");
var Users = require("./Users");
var ArticlesTable = require("./ArticlesTable");
var ProductTable = require("./ProductTable");
var CommentsTable = require("./CommentsTable");

Privilege.associate = function(models) {
  Privilege.hasMany(models.Users, {
    onDelete: "cascade",
  });
};

Users.associate = function(models) {
  Users.belongsTo(models.Privilege, {
    foreignKey: {
      allowNull: false,
    },
  });
};

Users.associate = function(models) {
  Users.hasMany(models.ArticlesTable, {
    onDelete: "cascade",
  });
};

ArticlesTable.associate = function(models) {
  ArticlesTable.belongsTo(models.Users, {
    foreignKey: {
      allowNull: false,
    },
  });
};

Users.associate = function(models) {
  Users.hasMany(model.ProductTable, {
    foreignKey: {
      allowNull: false,
    },
  });
};

Users.associate = function(models) {
  Users.hasMany(models.CommentsTable, {
    onDelete: "cascade",
  });
};

CommentsTable.associate = function(models) {
  CommentsTable.belongsTo(models.Users, {
    foreignKey: {
      allowNull: false,
    },
  });
};

ArticlesTable.associate = function(models) {
  ArticlesTable.hasMany(models.CommentsTable, {
    onDelete: "cascade",
  });
};

CommentsTable.associate = function(models) {
  CommentsTable.belongsTo(models.ArticlesTable, {
    foreignKey: {
      allowNull: false,
    },
  });
};

ProductTable.associate = function(models) {
  ProductTable.hasMany(models.CommentsTable, {
    onDelete: "cascade",
  });
};

CommentsTable.associate = function(models) {
  CommentsTable.belongsTo(models.ProductTable, {
    foreignKey: {
      allowNull: false,
    },
  });
};

ArticlesTable.associate = function(models) {
  ArticlesTable.hasMany(models.Imgs, {
    onDelete: "cascade",
  });
};

Imgs.associate = function(models) {
  Imgs.belongsTo(models.ArticlesTable, {
    foreignKey: {
      allowNull: false,
    },
  });
};
