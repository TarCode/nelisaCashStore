var ProductDataService = require('../dataServices/productDataServicePromise');
var assert = require("assert");
var Connection = require('../routes/testConnectionData');
var Promise = require("bluebird");

var connection =  new Connection();

connection.connect();

var productDataService= new ProductDataService(connection);

describe('Product Data Service', function(){

    it('should find all products', function (done) {
      productDataService
        .getAllProducts()
        .done(function(products){
            assert.equal(18, products.length);
            done();
        });
    });

})
