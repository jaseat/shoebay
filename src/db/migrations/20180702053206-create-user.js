'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      paymentMethod: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      footShape: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      privilege: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['user', 'reviewer', 'partner'],
        defaultValue: 'user',
      },
      PrivilegeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Privileges',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};
