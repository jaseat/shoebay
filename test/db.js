var expect = require('chai').expect;
var db = require('../src/db');
var sequelize = require('../src/db/config/sequelize');
var bcrypt = require('bcrypt');

describe('Database', function() {
  describe('user table', function() {
    it('should get user name', function() {
      expect(db.User.getName()).equal('user');
    });
    it('should add user to db', function(done) {
      this.timeout(5000);
      const newUser = {
        username: 'Test',
        email: 'test@test.com',
        password: 'test',
      };
      db.User.create(newUser).then(response => {
        const { firstName, lastName, email, password } = response.dataValues;
        // expect(firstName).to.equal(newUser.firstName);
        expect(bcrypt.compareSync(newUser.password, password)).to.equal(true);
        sequelize.close();
        done();
      });
    });
  });
});
