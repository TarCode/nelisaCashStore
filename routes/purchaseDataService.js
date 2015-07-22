module.exports = function (connection) {

  var getData = function(query, cb){
      connection.query( query, cb);
  };

  var insertData = function(query, data, cb){
      connection.query(query, data, cb);
  };

  this.getAllCategories = function (cb) {
      getData('SELECT * FROM category', cb );
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

  this.popularCategory = function (cb) {
      getData('SELECT cat_name, sum(qtySold) as total_sold FROM product,category,sales  WHERE product.prod_id = sales.prod_id AND category.cat_id = product.cat_id GROUP BY cat_name ORDER BY total_sold DESC', cb );
  };

  this.profitsPerCategory = function (cb) {
      getData('SELECT cat_name, supplier_name, sum(salePrice - cost) as profit FROM product,sales,stock,supplier, category where product.prod_id = sales.prod_id and product.prod_id = stock.prod_id and stock.supplier_id = supplier.supplier_id and product.cat_id = category.cat_id group by cat_name order by profit desc', cb );
  };

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