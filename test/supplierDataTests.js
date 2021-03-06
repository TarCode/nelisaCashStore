var SupplierDataService = require('../dataServices/supplierDataServicePromise');
var assert = require("assert");
var Connection = require('../routes/testConnectionData');

var connection =  new Connection();

connection.connect();
var supplierDataService= new SupplierDataService(connection);

describe('Supplier Data Service', function() {
  it(' Should find all the suppliers', function(done) {
    supplierDataService
    .getAllSuppliers()
    .done(function(suppliers) {
      assert.equal(5, suppliers.length);
      done();
    });
  });
});

/*describe('supplierMethods: Alter', function() {

  var data = {
      supplier_name : "fakeSupp"
  };

  before(function(done) {
    supplierDataService.getAllSuppliers(function(err, results){
      assert.equal(5, results.length);
      done();
    });
  });

  it('insertSupplier: Should insert a supplier', function(done) {

    supplierDataService.insertSupplier(data, function(err, results){
      supplierDataService.getAllSuppliers(function(err, results){
        assert.equal(6, results.length);
        done();
      });

    });

    after(function(done){
      connection.query("delete from supplier where supplier_name = ?", data.supplier_name, function(err){
        done(err);
      });
    })
  });
});*/
