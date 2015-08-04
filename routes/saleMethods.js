module.exports = function(){
    this.showSales = function (req, res, next) {
      req.services(function(err, services){
        var saleDataService = services.saleDataService;
        saleDataService.getAllSales(function(err, results) {
            if (err) return next(err);
            res.render( 'salesHistory', {
                sales : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
  };

    this.showAddSale = function (req, res, next) {
      req.services(function(err, services){
        var saleDataService = services.saleDataService;
        saleDataService.showInsertSale(function(err, results) {
            if (err) return next(err);
            res.render( 'addSale', {
                product : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
  };

    this.addSale = function (req, res, next) {
      req.services(function(err, services){
        var saleDataService = services.saleDataService;
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
    });
  };

    this.getUpdateSale = function (req, res, next) {
      req.services(function(err, services){
        var saleDataService = services.saleDataService;
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
    });
  };

    this.updateSale = function (req, res, next) {
      req.services(function(err, services){
        var saleDataService = services.saleDataService;
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
    });
  };

    this.delSale = function (req, res, next) {
      req.services(function(err, services){
        var saleDataService = services.saleDataService;
        var sale_id = req.params.sale_id;
        saleDataService.deleteSale([sale_id], function(err, results) {
                if (err) return next(err);
                res.redirect('/sales');
        });
    });
  };

    this.getSearchSale = function(req, res, next){
      req.services(function(err, services){
        var saleDataService = services.saleDataService;
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
    });
  };
}
