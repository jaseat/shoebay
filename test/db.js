var expect = require('chai').expect;
var db = require('../src/db');

describe('Database', function() {
  describe('user table', function() {
    it('should get user name', function() {
      expect(db.User.getTableName()).equal('user');
    });
  });
});
