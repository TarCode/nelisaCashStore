var mysql = require('mysql');
var SaleDataService = require('./saleDataService');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'tarcode',
    password : 'coder123'
});

connection.connect();
connection.query('use nelisa');
var saleDataService = new SaleDataService(connection);

exports.showSales = function (req, res, next) {
    saleDataService.getAllSales(function(err, results) {
        if (err) return next(err);
        res.render( 'salesHistory', {
            sales : results,
            user: req.session.user,
            admin:admin
        });
    });
};

exports.showAddSale = function (req, res, next) {
    saleDataService.showInsertSale(function(err, results) {
        if (err) return next(err);
        res.render( 'addSale', {
            product : results,
            user: req.session.user,
            admin:admin
        });
    });
};

exports.addSale = function (req, res, next) {
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
        prod_id: input.prod_id,
        date : input.date,
        qtySold: input.qtySold,
        salePrice: input.salePrice
    };
    saleDataService.insertSale(data, function(err, results) {
        if (err) return next(err);
        res.redirect('/sales');
    });
};

exports.getUpdateSale = function (req, res, next) {
    var sale_id = req.params.sale_id;
    saleDataService.getUpdateSale([sale_id], function(err, results) {
        if (err) return next(err);
        saleDataService.getUpdateSaleProducts(function(err, prods) {
            if (err) return next(err);
            res.render( 'updateSale', {
                sale : results,
                product: prods,
                user: req.session.user,
                admin:admin
            });
        });
    });
};

exports.updateSale = function (req, res, next) {
    var sale_id = req.params.sale_id;
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
        prod_id : input.prod_id,
        date : input.date,
        qtySold: input.qtySold,
        salePrice: input.salePrice
    };
    saleDataService.updateSale([data, sale_id], function(err, results) {
        if (err) return next(err);
        res.redirect('/sales');
    });
};

exports.delSale = function (req, res, next) {
    var sale_id = req.params.sale_id;
    saleDataService.deleteSale([sale_id], function(err, results) {
            if (err) return next(err);
            res.redirect('/sales');
    });
};

exports.getSearchSale = function(req, res, next){
    var searchValue = req.params.searchValue;
    searchValue = "%" + searchValue + "%";
    saleDataService.searchSale([searchValue], function(err, results){
        if (err) return next(err);
        res.render('sale_list', {
            admin: admin,
            user: req.session.user,
            sales : results,
            layout : false
        });
    });
};
