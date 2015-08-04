module.exports = function(){
    this.getSearchPurchase = function(req, res, next){
      req.services(function(err, services){
        var purchaseDataService = services.purchaseDataService;
        var searchValue = req.params.searchValue;
        searchValue = "%" + searchValue + "%";

        purchaseDataService.searchPurchase([searchValue], function(err, results){
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

    this.showAddPurchase = function (req, res, next) {
      req.services(function(err, services){
        var purchaseDataService = services.purchaseDataService;
            purchaseDataService.showAddPurchaseSupplier(function(err, supps) {
                if (err) return next(err);
                purchaseDataService.showAddPurchaseStock(function(err, stock) {
                    if (err) return next(err);
                    purchaseDataService.showAddPurchaseProduct(function(err, prod) {
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

    this.addPurchase = function (req, res, next) {
      req.services(function(err, services){
        var purchaseDataService = services.purchaseDataService;
            var input = JSON.parse(JSON.stringify(req.body));
            var data = {
                prod_id: input.prod_id,
                supplier_id: input.supplier_id,
                date : input.date,
                quantity: input.quantity,
                cost: input.cost,
                totalCost: (input.cost*input.quantity)
            };
            purchaseDataService.insertPurchase( data, function(err, results) {
                if (err)
                    console.log("Error inserting : %s ",err );

                res.redirect('/purchases');
            });
    });
  };

    this.showPurchases = function (req, res, next) {
      req.services(function(err, services){
        var purchaseDataService = services.purchaseDataService;
        purchaseDataService.getAllPurchases(function(err, results) {
            if (err) return next(err);

            res.render( 'purchaseHistory', {
                stock : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
  };

    this.getUpdatePurchase = function (req, res, next) {
      req.services(function(err, services){
        var purchaseDataService = services.purchaseDataService;
        var purchase_id = req.params.purchase_id;
            purchaseDataService.getUpdatePurchaseStock([purchase_id], function (err, results) {
                if (err)
                    console.log("Error getting : %s ", err);

                purchaseDataService.getUpdatePurchaseProduct(function (err, prods) {
                    if (err)
                        console.log("Error getting : %s ", err);

                    purchaseDataService.getUpdatePurchaseSupplier(function (err, supps) {
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

    this.updatePurchase = function (req, res, next) {
      req.services(function(err, services){
        var purchaseDataService = services.purchaseDataService;
        var purchase_id = req.params.purchase_id;
            var input = JSON.parse(JSON.stringify(req.body));
            var data = {
                prod_id : input.prod_id,
                supplier_id: input.supplier_id,
                date : input.date,
                quantity: input.quantity,
                cost: input.cost,
                totalCost: (input.cost*input.quantity)
            };
            purchaseDataService.updatePurchase([data, purchase_id], function(err, results) {
                if (err)
                    console.log("Error updating : %s ",err );

                res.redirect('/purchases');
            });
    });
  };

    this.delPurchase = function (req, res, next) {
      req.services(function(err, services){
        var purchaseDataService = services.purchaseDataService;
        var purchase_id = req.params.purchase_id;
            purchaseDataService.deletePurchase([purchase_id], function(err, results) {
                if (err)
                    console.log("Error deleting : %s ",err );
                res.redirect('/purchases');
            });
    });
  };
}
