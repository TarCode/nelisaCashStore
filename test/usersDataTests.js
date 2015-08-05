var UserDataService = require('../dataServices/userDataService');
var assert = require('assert');
var Connection = require('../routes/testConnectionData');

var connection = new Connection;
connection.connect();
var userDataService = new UserDataService(connection);

describe('userMethods : Display', function(){
  it('getUsername: returns the username of the current user', function(done) {
    userDataService.getUsername(function(err, currentUsername) {
      username = currentUsername[0];
      assert.equal(username.username, 'lisa');
      done();
    });
  });
});
