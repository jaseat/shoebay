const expect = require('chai').expect;
const API = require('../src/utils/api');

describe('Api', function() {
  describe('usage', function() {
    it('should fail to login and return Unauthorized', function(done) {
      const credentials = { email: 'test@test.com', password: 'test1' };
      API.logIn(credentials).catch(err => {
        expect(err[0].message).to.equal('Unauthorized');
        done();
      });
    });
    it('logins and get 1', function(done) {
      const credentials = { email: 'test@test.com', password: 'test' };
      API.logIn(credentials).then(id => {
        expect(id).to.equal('1');
        done();
      });
    });
    it('should get user 1', function(done) {
      const query = '{viewer {username}}';
      API.fetchQuery(query)
        .then(res => {
          expect(res.data.viewer.username).to.equal('Test');
          done();
        })
        .catch(err => {});
    });
    it('should logout the user', function(done) {
      API.logOut().then(id => {
        expect(id).to.equal(null);
        done();
      });
    });
    it('should create a new user with id 2', function(done) {
      API.signUp(
        {
          username: 'tester1',
          email: 'tester1@test.com',
          password: 'tester',
        },
        ['username']
      ).then(res => {
        expect(res.id).to.equal('user:2');
        done();
      });
    });
    it('should get user 2', function(done) {
      const query = '{viewer {id}}';
      API.fetchQuery(query).then(res => {
        expect(res.data.viewer.id).to.equal('user:2');
        done();
      });
    });
  });
});
