module.exports = function (connection) {

  var getData = function(query, cb){
      connection.query( query, cb);
  };

  var insertData = function(query, data, cb){
      connection.query(query, data, cb);
  };

  this.getAllSales = function (cb) {
      getData('SELECT * from sales, product WHERE sales.prod_id = product.prod_id order by sale_id desc', cb );
  };//done

  this.insertSale = function (data, cb) {
      insertData('INSERT INTO stock SET ?', data, cb );
  };//done

  this.getUpdateSale = function (data, cb) {
      insertData('SELECT * FROM supplier', data, cb );
  };//done

  this.updateSale = function (data, cb) {
      insertData('UPDATE stock SET ? WHERE purchase_id = ?', data, cb );
  };//done

  this.deleteSale = function (data, cb) {
      insertData('DELETE FROM stock WHERE purchase_id = ?', data, cb );
  };//done

  this.searchSale = function (data, cb) {
      insertData('SELECT purchase_id, prod_name, date, quantity, cost, totalCost FROM stock, product WHERE stock.prod_id = product.prod_id AND (prod_name LIKE ?)', data, cb );
  };//done

};
