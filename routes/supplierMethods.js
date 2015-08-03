module.exports = function(){
    this.getSearchSupplier = function(req, res, next){
      req.services(function(err, services){
        var supplierDataServ = services.suppDataServ;
        var searchValue = req.params.searchValue;
        searchValue = "%" + searchValue + "%";

        supplierDataServ.searchSupplier([searchValue], function(err, results){
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

    this.showAddSupplier = function (req, res, next) {
        res.render( 'addSupplier',{
            user: req.session.user,
            admin:admin
        });
    };//done

    this.addSupp = function (req, res, next) {
      req.services(function(err, services){
        var supplierDataServ = services.suppDataServ;
            var input = JSON.parse(JSON.stringify(req.body));
            var data = {
                supplier_name : input.supplier_name
            };
            supplierDataServ.insertSupplier(data, function(err, results) {
                if (err)
                    console.log("Error inserting : %s ",err );

                res.redirect('/suppliers');
            });
    });
  };

    this.showSuppliers = function (req, res, next) {
      req.services(function(err, services){
        var supplierDataServ = services.suppDataServ;
        supplierDataServ.getAllSuppliers(function(err, results) {
            if (err) return next(err);

            res.render( 'suppliers', {
                supplier : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
  };

    this.getSupp = function (req, res, next) {
      req.services(function(err, services){
        var supplierDataServ = services.suppDataServ;
        var supplier_id = req.params.supplier_id;
        supplierDataServ.getUpdatedSupplier( [supplier_id], function(err, results) {
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

    this.updateSupp = function (req, res, next) {
      req.services(function(err, services){
        var supplierDataServ = services.suppDataServ;
        var supplier_id = req.params.supplier_id;
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            supplier_name : input.supplier_name
        };
        supplierDataServ.updateSupplier([data, supplier_id], function(err, results) {
            if (err)
                console.log("Error updating : %s ",err );

            res.redirect('/suppliers');
        });
    });
  };

    this.delSupp = function (req, res, next) {
      req.services(function(err, services){
        var supplierDataServ = services.suppDataServ;
        var supplier_id = req.params.supplier_id;

        supplierDataServ.deleteSupplier([supplier_id], function(err, results) {
            if (err)
                console.log("Error deleting : %s ",err );
            res.redirect('/suppliers');
        });
    });
  };
}
