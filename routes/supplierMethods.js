exports.getSearchSupplier = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
                return next(err);
        var searchValue = req.params.searchValue;
        searchValue = "%" + searchValue + "%";

        connection.query("SELECT supplier_id, supplier_name from supplier WHERE supplier_name LIKE ?",[searchValue], function(err, results){
            if (err) return next(err);
            res.render('supplier_list', {
                admin: admin,
                user: req.session.user,
                suppliers : results,
                layout : false
            });
        });
    });
};



exports.showAddSupplier = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);

        res.render( 'addSupplier',{
            user: req.session.user,
            admin:admin
        });
    });
};
exports.addSupp = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            supplier_name : input.supplier_name
        };
        connection.query('insert into supplier set ?', data, function(err, results) {
            if (err)
                console.log("Error inserting : %s ",err );

            res.redirect('/suppliers');
        });
    });
};
exports.showSuppliers = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT * from supplier', [], function(err, results) {
            if (err) return next(err);

            res.render( 'suppliers', {
                supplier : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
};

exports.getSupp = function (req, res, next) {
    var supplier_id = req.params.supplier_id;
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        connection.query('select * from supplier where supplier_id = ?', [supplier_id], function(err, results) {
            if (err)
                console.log("Error getting : %s ",err );

            res.render( 'updateSupp', {
                supplier : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
};

exports.updateSupp = function (req, res, next) {
    var supplier_id = req.params.supplier_id;
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            supplier_name : input.supplier_name
        };
        connection.query('update supplier set ? where supplier_id = ?',[data, supplier_id], function(err, results) {
            if (err)
                console.log("Error updating : %s ",err );

            res.redirect('/suppliers');
        });
    });
};
exports.delSupp = function (req, res, next) {
    var supplier_id = req.params.supplier_id;

    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }

        connection.query('delete from supplier where supplier_id = ?',[supplier_id], function(err, results) {
            if (err)
                console.log("Error deleting : %s ",err );
            res.redirect('/suppliers');
        });
    });
};