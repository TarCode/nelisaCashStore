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

  this.insertCategory = function (data, cb) {
      insertData('INSERT INTO category SET ?', data, cb );
  };

  this.updateCategory = function (data, cb) {
      insertData('UPDATE category SET ? WHERE cat_id = ?', data, cb );
  };

  this.getUpdateCategory = function (data, cb) {
      insertData('SELECT * from category WHERE cat_id = ?', data, cb );
  };

};
