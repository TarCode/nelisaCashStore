var mysql = require('mysql');
var CategoryDataService = require('./categoryDataService');
var assert = require("assert");
var connection =  mysql.createConnection({
  host : 'localhost',
  user : 'tarcode',
  password: 'coder123'
});

connection.connect();
connection.query('use nelisa');
var catDataServ = new CategoryDataService(connection);

describe('categoryMethods', function() {
  it('should return a list with 8 objects', function(done) {
    catDataServ.getAllCategories(function(err, results){
      assert.equal(8, results.length);
      done();
    });
  });
});
