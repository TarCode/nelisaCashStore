module.exports = function (connection) {

  var getData = function(query, cb){
      connection.query( query, cb);
  };

  var insertData = function(query, data, cb){
      connection.query(query, data, cb);
  };

  this.getAllPurchases = function (cb) {
      getData('SELECT * from stock, product WHERE stock.prod_id = product.prod_id order by purchase_id desc', cb );
  };

  this.insertPurchase = function (data, cb) {
      insertData('INSERT INTO stock SET ?', data, cb );
  };//done

  this.updateCategory = function (data, cb) {
      insertData('UPDATE category SET ? WHERE cat_id = ?', data, cb );
  };

  this.getUpdateCategory = function (data, cb) {
      insertData('SELECT * FROM category WHERE cat_id = ?', data, cb );
  };

  this.deleteCategory = function (data, cb) {
      insertData('DELETE FROM category WHERE cat_id = ?', data, cb );
  };

  this.searchPurchase = function (data, cb) {
      insertData('SELECT purchase_id, prod_name, date, quantity, cost, totalCost FROM stock, product WHERE stock.prod_id = product.prod_id AND (prod_name LIKE ?)', data, cb );
  };//done

  this.showAddPurchaseSupplier = function(cb) {
  	getData('SELECT * FROM supplier',cb);
  };//done

    this.showAddPurchaseStock = function(cb) {
  	getData('SELECT * FROM stock',cb);
  };//done

    this.showAddPurchaseProduct = function(cb) {
  	getData('SELECT * FROM product',cb);
  };//done
};