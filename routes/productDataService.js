module.exports = function (connection) {

  var getData = function(query, cb){
      connection.query( query, cb);
  };

  var insertData = function(query, data, cb){
      connection.query(query, data, cb);
  };

  this.getAllProducts = function (cb) {
      getData('SELECT prod_id,prod_name,cat_name from product,category where product.cat_id = category.cat_id', cb );
  };

  this.showInsertProducts = function (cb) {
      getData('SELECT * FROM category', cb );
  };

  this.insertProduct = function (data, cb) {
      insertData('INSERT INTO product SET ?', data, cb );
  };

  this.updateProduct = function (data, cb) {
      insertData('UPDATE product SET ? WHERE prod_id = ?', data, cb );
  };

  this.getUpdateProduct = function (data, cb) {
      insertData('SELECT * FROM product WHERE prod_id = ?', data, cb );
  };

  this.deleteProduct = function (data, cb) {
      insertData('DELETE FROM product WHERE prod_id = ?', data, cb );
  };

  this.searchProduct = function (data, cb) {
      insertData('SELECT prod_id, prod_name, cat_name from category, product WHERE category.cat_id = product.cat_id AND (prod_name LIKE ? OR cat_name LIKE ?)', data, cb );
  };

  this.popularProduct = function (cb) {
      getData('SELECT prod_name, sum(qtySold) as total_sold FROM product,sales WHERE product.prod_id = sales.prod_id GROUP BY prod_name ORDER BY total_sold DESC', cb );
  };

  this.profitsPerProduct = function (cb) {
      getData('SELECT cat_name, supplier_name, sum(salePrice - cost) as profit FROM product,sales,stock,supplier, category where product.prod_id = sales.prod_id and product.prod_id = stock.prod_id and stock.supplier_id = supplier.supplier_id and product.cat_id = category.cat_id group by cat_name order by profit desc', cb );
  };

};
