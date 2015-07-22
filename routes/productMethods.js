var mysql = require('mysql');
var productDataService = require('./productDataService');
var connection =  mysql.createConnection({
  host : 'localhost',
  user : 'root',
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


exports.getProd = function (req, res, next) {
    var prod_id = req.params.prod_id;
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        connection.query('select * from product where prod_id = ?', [prod_id], function(err, results) {
            if (err)
                console.log("Error getting : %s ",err );

            res.render( 'updateProd', {
                product : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
};
exports.updateProd = function (req, res, next) {
    var prod_id = req.params.prod_id;
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            prod_name : input.prod_name
        };
        connection.query('update product set ? where prod_id = ?',[data, prod_id], function(err, results) {
            if (err)
                console.log("Error updating : %s ",err );

            res.redirect('/products');
        });
    });
};
exports.delProd = function (req, res, next) {
    var prod_id = req.params.prod_id;

    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }

        connection.query('delete from product where prod_id = ?',[prod_id], function(err, results) {
            if (err)
                console.log("Error deleting : %s ",err );

            res.redirect('/products');
        });
    });
};

exports.getSearchProduct = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
                return next(err);
        var searchValue = req.params.searchValue;
        searchValue ="%" + searchValue + "%";

        connection.query("SELECT prod_id, prod_name, cat_name from category, product WHERE category.cat_id = product.cat_id AND (prod_name LIKE ? OR cat_name LIKE ?)",[searchValue, searchValue], function(err, results){
            if (err) return next(err);
            res.render('product_list', {
                admin: admin,
                user: req.session.user,
                products : results,
                layout : false
            });
        });
    });
};

exports.showProdPopularity = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT prod_name, sum(qtySold) as total_sold FROM product,sales WHERE product.prod_id = sales.prod_id GROUP BY prod_name ORDER BY total_sold DESC', [], function(err, results) {
            if (err) return next(err);

            res.render( 'prodPopularity', {
                prodPopularity : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
};

exports.showProdProfit = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('select prod_name, min(salePrice-cost) as minProfit, max(salePrice-cost) as maxProfit from product, sales, stock where product.prod_id = sales.prod_id and sales.prod_id = stock.prod_id group by prod_name order by maxProfit desc', [], function(err, results) {
            if (err) return next(err);

            res.render( 'prodProfit', {
                prodProfit : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
};
