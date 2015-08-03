var mysql = require('mysql');

module.exports = function () {
  return mysql.createConnection({
          host     : 'localhost',
          user     : 'pawleesah',
          password : 'coder123',
          database : 'NelisaSpaza'
      });
};
