var mysql = require('mysql');
var CategoryDataService = require('./categoryDataService');
var assert = require("assert");
var connection =  mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password: 'spot'
});

connection.connect();
connection.query('use NelisaSpaza');
var categoryDataService= new CategoryDataService(connection);

describe('categoryMethods', function() {
  it('should return a list with 8 objects', function(done) {
    categoryDataService.getAllCategories(function(err, results){
      assert.equal(8, results.length);
      done();
    });
  });
});

describe('categoryMethods', function() {
  it('should return a list with 8 categories, the top being the popular category', function(done) {
    categoryDataService.popularCategory(function(err, orderedPopularCategories) {
      var mostPopularCategory = orderedPopularCategories[0];
      assert.equal(mostPopularCategory.cat_name, 'shortLife')
      assert.equal(mostPopularCategory.total_sold, 397)
      done();
    });
  });
});
