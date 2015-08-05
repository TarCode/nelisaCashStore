module.exports = function (connection) {

  var getData = function(query, cb){
      connection.query( query, cb);
  };

  var insertData = function(query, data, cb){
      connection.query(query, data, cb);
  };

  this.getAllPurchases = function (cb) {
      getData('SELECT purchase_id, prod_name, supplier_id, DATE_FORMAT(date, "%d/%l/%Y") as date, quantity, cost, totalCost FROM stock, product WHERE stock.prod_id = product.prod_id order by purchase_id desc', cb );
  };//done

  this.insertPurchase = function (data, cb) {
      insertData('INSERT INTO stock SET ?', data, cb );
  };//done

  this.updatePurchase = function (data, cb) {
      insertData('UPDATE stock SET ? WHERE purchase_id = ?', data, cb );
  };//done

  this.deletePurchase = function (data, cb) {
      insertData('DELETE FROM stock WHERE purchase_id = ?', data, cb );
  };//done

  this.searchPurchase = function (data, cb) {
      insertData('SELECT purchase_id, prod_name, DATE_FORMAT(date, "%d/%l/%Y") as date, quantity, cost, totalCost FROM stock, product WHERE stock.prod_id = product.prod_id AND (prod_name LIKE ?)', data, cb );
  };//done

  this.showAddPurchaseSupplier = function(cb) {
  	getData('SELECT supplier_id, supplier_name FROM supplier',cb);
  };//done

    this.showAddPurchaseStock = function(cb) {
  	getData('SELECT purchase_id, prod_id, supplier_id, date, quantity, cost,totalCost FROM stock',cb);
  };//done

    this.showAddPurchaseProduct = function(cb) {
  	getData('SELECT prod_id, prod_name, cat_id FROM product',cb);
  };//done

  this.getUpdatePurchaseSupplier = function (data, cb) {
      insertData('SELECT supplier_id, supplier_name FROM supplier', data, cb );
  };//done

  this.getUpdatePurchaseStock = function (data, cb) {
      insertData('SELECT purchase_id, prod_id, supplier_id, DATE_FORMAT(date, "%d/%l/%Y") as date, quantity, cost, totalCost FROM stock WHERE purchase_id = ?', data, cb );
  };//done

  this.getUpdatePurchaseProduct = function (data, cb) {
      insertData('SELECT prod_id, prod_name, cat_id FROM product', data, cb );
  };//done

};
