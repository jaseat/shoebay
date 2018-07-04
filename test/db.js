var expect = require('chai').expect;
var db = require('../src/db');
var sequelize = require('../src/db/config/sequelize');

describe('Database', function() {
  describe('user table', function() {
    it('should get user name', function() {
      expect(db.User.getName()).equal('user');
    });
    it('should add user to db', function(done) {
      this.timeout(5000);
      const newUser = {
        firstName: 'Test',
        lastName: 'Test',
        email: 'test@test.com',
        password: 'test',
      };
      db.User.create(newUser).then(response => {
        const { firstName, lastName, email, password } = response.dataValues;
        expect({ firstName, lastName, email, password }).to.deep.equal(newUser);
        done();
      });
    });
    it('should get user id as user:1', function(done) {
      this.timeout(5000);
      db.User.findById(1).then(user => {
        expect(user.id).to.equal('user:1');
        sequelize.close();
        done();
      });
    });
  });
});
