var mysql = require('mysql');
var purchaseDataService = require('./purchaseDataService');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'spot'
});

connection.connect();
connection.query('use NelisaSpaza');
var purchaseDataServ = new purchaseDataService(connection);

exports.getSearchPurchase = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
                return next(err);
        var searchValue = req.params.searchValue;
        searchValue = "%" + searchValue + "%";

        connection.query("SELECT purchase_id, prod_name, date, quantity, cost, totalCost from stock, product WHERE stock.prod_id = product.prod_id AND (prod_name LIKE ?)",[searchValue], function(err, results){
            if (err) return next(err);
            res.render('purchase_list', {
                admin: admin,
                user: req.session.user,
                purchases : results,
                layout : false
            });
        });
    });
};

exports.showAddPurchase = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT * from supplier', [], function(err, supps) {
            if (err) return next(err);
            connection.query('SELECT * from stock', [], function(err, stock) {
                if (err) return next(err);
                connection.query('SELECT * from product', [], function(err, prod) {
                    if (err) return next(err);
                    res.render( 'addPurchase', {
                        product : prod,
                        supplier: supps,
                        stock: stock,
                user: req.session.user,
                admin:admin
                    });
                });
            });
        });
    });
};

exports.addPurchase = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            prod_id: input.prod_id,
            supplier_id: input.supplier_id,
            date : input.date,
            quantity: input.quantity,
            cost: input.cost,
            totalCost: (input.cost*input.quantity)
        };
        connection.query('insert into stock set ?', data, function(err, results) {
            if (err)
                console.log("Error inserting : %s ",err );

            res.redirect('/purchases');
        });
    });
};

exports.showPurchases = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT * from stock, product WHERE stock.prod_id = product.prod_id order by purchase_id desc', [], function(err, results) {
            if (err) return next(err);

            res.render( 'purchaseHistory', {
                stock : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
};

exports.getPurchase = function (req, res, next) {
    var purchase_id = req.params.purchase_id;
    req.getConnection(function (err, connection) {
        if (err) {
            return next(err);
        }
        connection.query('select * from stock where purchase_id = ?', [purchase_id], function (err, results) {
            if (err)
                console.log("Error getting : %s ", err);

            connection.query('select * from product', [], function (err, prods) {
                if (err)
                    console.log("Error getting : %s ", err);

                connection.query('select * from supplier', [], function (err, supps) {
                    if (err)
                        console.log("Error getting : %s ", err);
                    res.render('updatePurchase', {
                        stock: results,
                        product: prods,
                        supplier: supps,
                user: req.session.user,
                admin:admin
                    });
                });
            });
        });
    });
};

exports.updatePurchase = function (req, res, next) {
    var purchase_id = req.params.purchase_id;
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            prod_id : input.prod_id,
            supplier_id: input.supplier_id,
            date : input.date,
            quantity: input.quantity,
            cost: input.cost,
            totalCost: (input.cost*input.quantity)
        };
        connection.query('update stock set ? where purchase_id = ?',[data, purchase_id], function(err, results) {
            if (err)
                console.log("Error updating : %s ",err );

            res.redirect('/stock');
        });
    });
};

exports.delPurchase = function (req, res, next) {
    var purchase_id = req.params.purchase_id;

    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }

        connection.query('delete from stock where purchase_id = ?',[purchase_id], function(err, results) {
            if (err)
                console.log("Error deleting : %s ",err );
            res.redirect('/purchases');
        });
    });
};