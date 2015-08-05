module.exports = function (connection) {

  var getData = function(query, cb){
      connection.query( query, cb);
  };

  var insertData = function(query, data, cb){
      connection.query(query, data, cb);
  };

  this.getAllSuppliers = function (cb) {
      getData('SELECT supplier_id, supplier_name FROM supplier', cb );
  };

  this.insertSupplier = function (data, cb) {
      insertData('INSERT INTO supplier SET ?', data, cb );
  };

  this.updateSupplier = function (data, cb) {
      insertData('UPDATE supplier SET ? WHERE supplier_id = ?', data, cb );
  };

  this.getUpdatedSupplier = function (data, cb) {
      insertData('SELECT supplier_id, supplier_name FROM supplier WHERE supplier_id = ?', data, cb );
  };

  this.deleteSupplier = function (data, cb) {
      insertData('DELETE FROM supplier WHERE supplier_id = ?', data, cb );
  };

  this.searchSupplier = function (data, cb) {
      insertData('SELECT supplier_id, supplier_name FROM supplier WHERE supplier_name LIKE ?', data, cb );
  };

};
