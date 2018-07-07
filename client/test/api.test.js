const expect = require('chai').expect;
const API = require('../src/utils/api');

describe('Api', function() {
  describe('usage', function() {
    it('logins and get 1', function(done) {
      const credentials = { email: 'test@test.com', password: 'test' };
      API.logIn(credentials).then(data => {
        expect(data.data.logIn).to.equal('1');
        done();
      });
    });
  });
});
