var mysql = require('mysql');
var SupplierDataService = require('./supplierDataService');
var connection = mysql.createConnection ({
    host : 'localhost',
    user : 'root',
    password : 'spot'
});

connection.connect();
connection.query('use NelisaSpaza');
var supplierDataService = new SupplierDataService(connection);

exports.getSearchSupplier = function(req, res, next){
    var searchValue = req.params.searchValue;
    searchValue = "%" + searchValue + "%";

    supplierDataService.searchSupplier([searchValue], function(err, results){
        if (err) return next(err);
         res.render('supplier_list', {
            admin: admin,
            user: req.session.user,
            suppliers : results,
            layout : false
        });
    });
};//done

exports.showAddSupplier = function (req, res, next) {
    res.render( 'addSupplier',{
        user: req.session.user,
        admin:admin
    });
};//done

exports.addSupp = function (req, res, next) {
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            supplier_name : input.supplier_name
        };
        supplierDataService.insertSupplier(data, function(err, results) {
            if (err)
                console.log("Error inserting : %s ",err );

            res.redirect('/suppliers');
        });
};//done

exports.showSuppliers = function (req, res, next) {
    supplierDataService.getAllSuppliers(function(err, results) {
        if (err) return next(err);

        res.render( 'suppliers', {
            supplier : results,
            user: req.session.user,
            admin:admin
        });
    });
};//done

exports.getSupp = function (req, res, next) {
    var supplier_id = req.params.supplier_id;
    supplierDataService.getUpdatedSupplier( [supplier_id], function(err, results) {
        if (err)
            console.log("Error getting : %s ",err );

        res.render( 'updateSupp', {
            supplier : results,
            user: req.session.user,
            admin:admin
        });
    });
};//done

exports.updateSupp = function (req, res, next) {
    var supplier_id = req.params.supplier_id;
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
        supplier_name : input.supplier_name
    };
    supplierDataService.updateSupplier([data, supplier_id], function(err, results) {
        if (err)
            console.log("Error updating : %s ",err );

        res.redirect('/suppliers');
    });
};//done

exports.delSupp = function (req, res, next) {
    var supplier_id = req.params.supplier_id;

    supplierDataService.deleteSupplier([supplier_id], function(err, results) {
        if (err)
            console.log("Error deleting : %s ",err );
        res.redirect('/suppliers');
    });
};//done
