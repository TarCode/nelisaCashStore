var ProductDataService = require('../routes/productDataService');
var assert = require("assert");
var Connection = require('../routes/testConnectionData');

var connection =  new Connection();
connection.connect();
var productDataService= new ProductDataService(connection);

describe('productMethods: Display', function() {
  it('getAllProducts: Should return a list of products', function(done) {
    productDataService.getAllProducts(function(err, results){
      assert.equal(18, results.length);
      done();
    });
  });
  it('Top element must be the most popular product', function(done) {
    productDataService.popularProduct(function(err, orderedPopularProducts) {
      var mostPopularProduct = orderedPopularProducts[0];
      assert.equal(mostPopularProduct.prod_name, 'Mixed Sweets 5s')
      assert.equal(mostPopularProduct.total_sold, 172)
      done();
    });
  });
});

describe('productMethods: Alter', function() {

  var data = {
      prod_name : "fakeCat"
  };

  before(function(done) {
    productDataService.getAllProducts(function(err, results){
      assert.equal(18, results.length);
      done();
    });
  });

  it('insertProduct: Should insert a product', function(done) {

    productDataService.insertProduct(data, function(err, results){
      productDataService.getAllProducts(function(err, results){
        assert.equal(18, results.length);
        done();
      });

    });

    after(function(done){
      connection.query("delete from product where prod_name = ?", data.prod_name, function(err){
        done(err);
      });
    })
  });
});
