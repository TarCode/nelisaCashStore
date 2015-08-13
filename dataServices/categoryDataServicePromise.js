function CategoryDataService(connection) {
    this.connection = connection;

    this.getData = function(query, cb){
        connection.query( query, cb);
    };

    this.insertData = function(query, data, cb){
        connection.query(query, data, cb);
    };
}



  CategoryDataService.prototype.getAllCategories = function (cb) {
      this.getData('SELECT cat_id, cat_name FROM category',cb );
  };
/*
  this.insertCategory = function (data, cb) {
      insertData('INSERT INTO category SET ?', data, cb );
  };

  this.getUpdatedCategory = function (data, cb) {
      insertData('SELECT cat_id, cat_name FROM category WHERE cat_id = ?', data, cb );
  };

  this.updateCategory = function (data, cb) {
      insertData('UPDATE category SET ? WHERE cat_id = ?', data, cb );
  };

  this.deleteCategory = function (data, cb) {
      insertData('DELETE FROM category WHERE cat_id = ?', data, cb );
  };

  this.searchCategory = function (data, cb) {
      insertData('SELECT cat_id, cat_name from category WHERE cat_name LIKE ?', data, cb );
  };
  */

  CategoryDataService.prototype.popularCategory = function (cb) {
      this.getData('SELECT cat_name, sum(qtySold) as total_sold FROM product,category,sales  WHERE product.prod_id = sales.prod_id AND category.cat_id = product.cat_id GROUP BY cat_name ORDER BY total_sold DESC', cb );
  };
/*
  this.profitsPerCategory = function (cb) {
      getData('SELECT cat_name, supplier_name, sum(salePrice - cost) as profit FROM product,sales,stock,supplier, category where product.prod_id = sales.prod_id and product.prod_id = stock.prod_id and stock.supplier_id = supplier.supplier_id and product.cat_id = category.cat_id group by cat_name order by profit desc', cb );
  };
  */

module.exports = CategoryDataService;
