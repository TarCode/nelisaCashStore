var mysql = require('mysql');
var productDataService = require('./productDataService');
var connection =  mysql.createConnection({
  host : 'localhost',
  user : 'tarcode',
  password: 'coder123'
});

connection.connect();
connection.query('use nelisa');
var prodDataServ = new productDataService(connection);

exports.showProducts = function (req, res, next) {
    prodDataServ.getAllProducts(function(err, results) {
        if (err) return next(err);
        res.render( 'productList', {
            product : results,
            user: req.session.user,
            admin:admin
        });
    });
};

exports.showAddProd = function (req, res, next) {
    prodDataServ.showInsertProducts(function(err, results) {
        if (err) return next(err);
        res.render( 'addProduct', {
            category : results,
            user: req.session.user,
            admin:admin
        });
    });
};

exports.addProd = function (req, res, next) {
      var input = JSON.parse(JSON.stringify(req.body));
      var data = {
          prod_name : input.prod_name,
          cat_id : input.cat_id
      };
      prodDataServ.insertProduct(data, function(err, results) {
          if (err) return next(err);
          res.redirect('/products');
      });
};

exports.updateProd = function (req, res, next) {
    var prod_id = req.params.prod_id;
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
        prod_name : input.prod_name
    };
    prodDataServ.updateProduct([data, prod_id], function(err, results) {
        if (err) return(err);
        res.redirect('/products');
    });
};

exports.getUpdateProd = function (req, res, next) {
    var prod_id = req.params.prod_id;
    prodDataServ.getUpdateProduct([prod_id], function(err, results) {
        if (err) return (err);
        res.render( 'updateProd', {
            product : results,
            user: req.session.user,
            admin:admin
        });
    });
};

exports.delProd = function (req, res, next) {
    var prod_id = req.params.prod_id;
    prodDataServ.deleteProduct([prod_id], function(err, results) {
        if (err) return (err);
        res.redirect('/products');
    });
};

exports.getSearchProduct = function(req, res, next){
    var searchValue = req.params.searchValue;
    searchValue ="%" + searchValue + "%";
    prodDataServ.searchProduct([searchValue, searchValue], function(err, results){
        if (err) return next(err);
        res.render('product_list', {
            admin: admin,
            user: req.session.user,
            products : results,
            layout : false
        });
    });
};

exports.showProdPopularity = function (req, res, next) {
    prodDataServ.popularProduct(function(err, results) {
        if (err) return next(err);
        res.render( 'prodPopularity', {
            prodPopularity : results,
            user: req.session.user,
            admin:admin
        });
    });
};

exports.showProdProfit = function (req, res, next) {
    prodDataServ.profitsPerProduct(function(err, results) {
        if (err) return next(err);
        res.render( 'prodProfit', {
            prodProfit : results,
            user: req.session.user,
            admin:admin
        });
    });
};
