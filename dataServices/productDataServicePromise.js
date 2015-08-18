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

  this.getAllProducts = function () {
     return queryExecutor.executeQuery('SELECT prod_id,prod_name,cat_name from product,category where product.cat_id = category.cat_id');
  };


  this.popularProduct = function () {
      return queryExecutor.executeQuery('SELECT prod_name, sum(qtySold) as total_sold FROM product,sales WHERE product.prod_id = sales.prod_id GROUP BY prod_name ORDER BY total_sold DESC');
  };
}
