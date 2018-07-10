var expect = require('chai').expect;
var db = require('../src/db');
var sequelize = require('../src/db/config/sequelize');
var bcrypt = require('bcrypt');

describe('Database', function() {
  describe('user table', function() {
    it('should get user table name', function() {
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
        done();
      });
    });
  });
  describe('unique user', function() {
    it('should reject based on username', function(done) {
      const newUser = {
        username: 'Test',
        email: 'test2@test.com',
        password: 'test',
      };
      db.User.create(newUser).catch(err => {
        expect(err.errors[0].message).to.equal('Username already in use');
        done();
      });
    });
    it('should reject based on email', function(done) {
      const newUser = {
        username: 'Tester',
        email: 'test@test.com',
        password: 'test',
      };
      db.User.create(newUser).catch(err => {
        expect(err.errors[0].message).to.equal('Email already in use');
        done();
      });
    });
    it('should add user with id 2', function(done) {
      const newUser = {
        username: 'Tester',
        email: 'test2@test.com',
        password: 'test',
      };
      db.User.create(newUser).then(res => {
        expect(res.dataValues.id).to.equal(2);
        sequelize.close();
        done();
      });
    });
  });
});
