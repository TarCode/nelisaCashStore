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

describe('salesMethods: Alter', function() {

  var data = {
      sale_id : 449
  };

  before(function(done) {
    saleDataService.getAllSales(function(err, results){
      assert.equal(448, results.length);
      done();
    });
  });

  it('insertSale: Should insert a sale', function(done) {

    saleDataService.insertSale(data, function(err, results){
      saleDataService.getAllSales(function(err, results){
        assert.equal(448, results.length);
        done();
      });

    });

    after(function(done){
      connection.query("delete from sales where sale_id = ?", data.sale_id, function(err){
        done(err);
      });
    })
  });
});
