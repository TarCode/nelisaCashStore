var Promise = require("bluebird");

function QueryExecutor(connection) {
    this.connection = connection;

    this.executeQuery = function(query, data){
        data = data || [];
        return new Promise(function(accept, reject){
            connection.query( query, data, function(err, results){
              if (err){
                return reject(err)
              }
              accept(results);
            });

        })
    };
}

module.exports = function(connection){


  var queryExecutor = new QueryExecutor(connection);

  this.getAllPurchases = function () {
     return queryExecutor.executeQuery('SELECT purchase_id, prod_name, supplier_id, DATE_FORMAT(date, "%d/%l/%Y") as date, quantity, cost, totalCost FROM stock, product WHERE stock.prod_id = product.prod_id order by purchase_id desc');
  };

}
