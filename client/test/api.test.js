const expect = require('chai').expect;
const API = require('../src/utils/api');

describe('Api', function() {
  describe('usage', function() {
    let sessionCookie;
    it('should fail to login and return null', function(done) {
      const credentials = { email: 'test@test.com', password: 'test1' };
      API.logIn(credentials).then(data => {
        expect(data.data.logIn).to.equal(null);
        done();
      });
    });
    it('logins and get 1', function(done) {
      const credentials = { email: 'test@test.com', password: 'test' };
      API.logIn(credentials).then(data => {
        let sessionCookie = data.__cookie;
        expect(data.data.logIn).to.equal('1');
        done();
      });
    });
    it('should get user 1', function(done) {
      const query = '{viewer {firstName}}';
      API.fetchQuery(query, {}, sessionCookie).then(res => {
        console.log(res);
        expect(res.data.firstName).to.equal('Test');
      });
    });
    it('should logout the user', function(done) {
      API.logOut().then(res => {
        expect(res.data.logOut).to.equal(null);
        done();
      });
    });
  });
});
