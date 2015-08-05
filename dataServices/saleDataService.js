module.exports = function (connection) {

  var getData = function(query, cb){
      connection.query( query, cb);
  };

  var insertData = function(query, data, cb){
      connection.query(query, data, cb);
  };

  this.getAllSales = function (cb) {
      getData('SELECT sale_id, product.prod_id, day, date, qtySold, salePrice from sales, product WHERE sales.prod_id = product.prod_id order by sale_id desc', cb );
  };//done

  this.showInsertSale = function (cb) {
      getData('SELECT prod_id, prod_name, cat_id from product', cb );
  };//done

  this.insertSale = function (data, cb) {
      insertData('INSERT INTO sales SET ?', data, cb );
  };//done

  this.getUpdateSale = function (data, cb) {
      insertData('SELECT sale_id, prod_id, day, date, qtySold, salePrice from sales WHERE sale_id = ?', data, cb );
  };

  this.getUpdateSaleProducts = function (cb) {
      getData('SELECT prod_id, prod_name, cat_id FROM product', cb);
  };

  this.updateSale = function (data, cb) {
      insertData('UPDATE sales SET ? WHERE sale_id = ?', data, cb );
  };

  this.deleteSale = function (data, cb) {
      insertData('DELETE FROM sales WHERE sale_id = ?', data, cb );
  };

  this.searchSale = function (data, cb) {
      insertData('SELECT sale_id, prod_name, date, qtySold, salePrice from sales, product WHERE sales.prod_id = product.prod_id AND (prod_name LIKE ?)', data, cb );
  };

};
