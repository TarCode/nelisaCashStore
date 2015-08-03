module.exports = function() {
    this.showProducts = function (req, res, next) {
      req.services(function(err, services){
        var prodDataServ = services.prodDataServ;
        prodDataServ.getAllProducts(function(err, results) {
            if (err) return next(err);
            res.render( 'productList', {
                product : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
  };

    this.showAddProd = function (req, res, next) {
      req.services(function(err, services){
        var prodDataServ = services.prodDataServ;
        prodDataServ.showInsertProducts(function(err, results) {
            if (err) return next(err);
            res.render( 'addProduct', {
                category : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
  };

    this.addProd = function (req, res, next) {
      req.services(function(err, services){
        var prodDataServ = services.prodDataServ;
          var input = JSON.parse(JSON.stringify(req.body));
          var data = {
              prod_name : input.prod_name,
              cat_id : input.cat_id
          };
          prodDataServ.insertProduct(data, function(err, results) {
              if (err) return next(err);
              res.redirect('/products');
          });
    });
  };

    this.updateProd = function (req, res, next) {
      req.services(function(err, services){
        var prodDataServ = services.prodDataServ;
        var prod_id = req.params.prod_id;
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            prod_name : input.prod_name
        };
        prodDataServ.updateProduct([data, prod_id], function(err, results) {
            if (err) return(err);
            res.redirect('/products');
        });
    });
  };

    this.getUpdateProd = function (req, res, next) {
      req.services(function(err, services){
        var prodDataServ = services.prodDataServ;
        var prod_id = req.params.prod_id;
        prodDataServ.getUpdateProduct([prod_id], function(err, results) {
            if (err) return (err);
            res.render( 'updateProd', {
                product : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
  };

    this.delProd = function (req, res, next) {
      req.services(function(err, services){
        var prodDataServ = services.prodDataServ;
        var prod_id = req.params.prod_id;
        prodDataServ.deleteProduct([prod_id], function(err, results) {
            if (err) return (err);
            res.redirect('/products');
        });
    });
  };

    this.getSearchProduct = function(req, res, next){
      req.services(function(err, services){
        var prodDataServ = services.prodDataServ;
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
    });
  };

    this.showProdPopularity = function (req, res, next) {
      req.services(function(err, services){
        var prodDataServ = services.prodDataServ;
        prodDataServ.popularProduct(function(err, results) {
            if (err) return next(err);
            res.render( 'prodPopularity', {
                prodPopularity : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
  };

    this.showProdProfit = function (req, res, next) {
      req.services(function(err, services){
        var prodDataServ = services.prodDataServ;
        prodDataServ.profitsPerProduct(function(err, results) {
            if (err) return next(err);
            res.render( 'prodProfit', {
                prodProfit : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
  };
}
