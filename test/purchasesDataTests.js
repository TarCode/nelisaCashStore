var PurchaseDataService = require('../dataServices/purchaseDataService');
var assert = require("assert");
var Connection = require('../routes/testConnectionData');

var connection =  new Connection();

connection.connect();
var purchaseDataService = new PurchaseDataService(connection);

describe('purchasesMethods: Display', function() {
  it('getAllPurchases: Should return a list of purchases', function(done) {
    purchaseDataService.getAllPurchases(function(err, results){
      assert.equal(153, results.length);
      done();
    });
  });
});
