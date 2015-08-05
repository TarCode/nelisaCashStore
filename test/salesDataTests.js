var SaleDataService = require('../dataServices/saleDataService');
var assert = require("assert");
var Connection = require('../routes/testConnectionData');

var connection =  new Connection();

connection.connect();
var saleDataService= new SaleDataService(connection);

describe('salesMethods: Display', function() {
  it('getAllSales: Should return a list of sales', function(done) {
    saleDataService.getAllSales(function(err, results){
      assert.equal(448, results.length);
      done();
    });
  });
});
