'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const bcrypt = require('bcrypt');
    return queryInterface.bulkInsert('Users', [
      {
        username: 'demo_user',
        email: 'user@demo.com',
        password: bcrypt.hashSync('demo', bcrypt.genSaltSync()),
        privilege: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'demo_reviewer',
        email: 'reviewer@demo.com',
        password: bcrypt.hashSync('demo', bcrypt.genSaltSync()),
        privilege: 'reviewer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'demo_partner',
        email: 'partner@demo.com',
        password: bcrypt.hashSync('demo', bcrypt.genSaltSync()),
        privilege: 'partner',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'alice',
        email: 'alice@demo.com',
        password: bcrypt.hashSync('alice', bcrypt.genSaltSync()),
        privilege: 'reviewer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'bob',
        email: 'bob@demo.com',
        password: bcrypt.hashSync('bob', bcrypt.genSaltSync()),
        privilege: 'reviewer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
