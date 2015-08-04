module.exports = function (connection) {

  var getData = function(query, cb){
      connection.query( query, cb);
  };

  var insertData = function(query, data, cb){
      connection.query(query, data, cb);
  };

  this.getUsername = function (cb) {
      getData('SELECT username FROM users', cb );
  };

  this.insertUser = function (data, cb) {
      insertData('INSERT INTO users SET ?', data, cb );
  };

  this.checkUser = function (data, cb) {
      insertData('SELECT password, role, locked from users WHERE username = ?', data, cb );
  };

  this.updateUser = function (data, cb) {
      insertData('UPDATE users SET ? WHERE username = ?', data, cb );
  };

  this.showUsers = function (cb) {
      getData('SELECT username, role FROM users', cb );
  };

  this.deleteUser = function (data, cb) {
      insertData('DELETE FROM users where username = ?', data, cb );
  };

};
