var PurchaseDataService = require('../dataServices/purchaseDataServicePromise');
var assert = require("assert");
var Connection = require('../routes/testConnectionData');

var connection =  new Connection();

connection.connect();
var purchaseDataService = new PurchaseDataService(connection);

describe('Purchase Data Service', function() {
  it('Should find all the purchases', function(done) {
    purchaseDataService
    .getAllPurchases()
    .done(function(purchases){
      assert.equal(153, purchases.length);
      done();
    });
  });
});

/*describe('purchasesMethods: Alter', function() {

  var data = {
      purchase_id : 154
  };

  before(function(done) {
    purchaseDataService.getAllPurchases(function(err, results){
      assert.equal(153, results.length);
      done();
    });
  });

  it('insertPurchase: Should insert a purchase', function(done) {

    purchaseDataService.insertPurchase(data, function(err, results){
      purchaseDataService.getAllPurchases(function(err, results){
        assert.equal(153, results.length);
        done();
      });

    });

    after(function(done){
      connection.query("delete from stock where purchase_id = ?", data.purchase_id, function(err){
        done(err);
      });
    })
  });
}); */
