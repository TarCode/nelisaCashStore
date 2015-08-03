var mysql = require('mysql');
var ProductDataService = require('../routes/productDataService');
var assert = require("assert");

var connection =  mysql.createConnection({
  host : 'localhost',
  user : 'pawleesah',
  password: 'coder123',
  database : 'NelisaSpaza_test'
});

connection.connect();
var productDataService= new ProductDataService(connection);

describe('productMethods: Display', function() {
  it('getAllProducts: Should return a list of products', function(done) {
    productDataService.getAllProducts(function(err, results){
      assert.equal(18, results.length);
      done();
    });
  });
  it('Top element must be the most popular category', function(done) {
    productDataService.popularProduct(function(err, orderedPopularProducts) {
      var mostPopularProduct = orderedPopularProducts[0];
      assert.equal(mostPopularProduct.prod_name, 'Mixed Sweets 5s')
      assert.equal(mostPopularProduct.total_sold, 172)
      done();
    });
  });
});

/*describe('categoryMethods: Alter', function() {

  var data = {
      cat_name : "fakeCat"
  };

  before(function(done) {
    categoryDataService.getAllCategories(function(err, results){
      assert.equal(8, results.length);
      done();
    });
  });

  it('insertCategory: Should insert a category', function(done) {

    categoryDataService.insertCategory(data, function(err, results){
      categoryDataService.getAllCategories(function(err, results){
        assert.equal(9, results.length);
        done();
      });

    });

    after(function(done){
      connection.query("delete from category where cat_name = ?", data.cat_name, function(err){
        done(err);
      });
    })
  });
});*/
