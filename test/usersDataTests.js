var UserDataService = require('../dataServices/userDataService');
var assert = require('assert');
var Connection = require('../routes/testConnectionData');

var connection = new Connection;
connection.connect();
var userDataService = new UserDataService(connection);

describe('userMethods : Display', function() {
  it('getUsername: returns the username of the first user', function(done) {
    userDataService.getUsername(function(err, currentUsername) {
      username = currentUsername[0];
      assert.equal(username.username, 'andre');
      done();
    });
  });
});

describe('userMethods : Alter', function() {
  var testData = {
    username : 'fakeUser'
  };

  before(function(done) {
    userDataService.getUsername(function(err, numberOfUsers) {
      assert.equal(4, numberOfUsers.length );
      done();
    });
  });

  it('insertUser: Should insert a user', function(done) {
    userDataService.insertUser(function(err, newUser) {
      userDataService.getUsername(function(err, users) {
        assert.equal(4, users.length);
        done();
      });
    });

    after(function(done) {
      connection.query("delete from users where username = ?", testData.username, function(err) {
        done(err);
      });
    });
  });
});
