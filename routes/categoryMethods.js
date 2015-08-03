module.exports = function(){
    this.showCategory = function (req, res, next) {
      req.services(function(err, services){
    		var catDataServ = services.catDataServ;
        catDataServ.getAllCategories(function(err, rows){
          if(err)	throw err;
            res.render( 'category', {
                category : rows,
                user: req.session.user,
                admin:admin
            });
        });
    });
    };

    this.showAddCat = function (req, res, next) {
        res.render('addCategory', {
            user: req.session.user,
            admin:admin
        });
    };

    this.addCat = function (req, res, next) {
      req.services(function(err, services){
    		var catDataServ = services.catDataServ;
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            cat_name : input.cat_name
        };

        if(data.cat_name.trim() === "" ){
            res.render( 'addCategory', {
                error : "Category cannot be blank"
            });
        }
        else{
          catDataServ.insertCategory(data, function(err, rows){
            if(err)	throw err;
            res.redirect('/category');
          });
        }
    });
  };

    this.getUpdateCat = function (req, res, next) {
      req.services(function(err, services){
    		var catDataServ = services.catDataServ;
        var cat_id = req.params.cat_id;
        var data = [cat_id];
        catDataServ.getUpdateCategory(data, function(err, results) {
            if (err) return next(err);
            res.render( 'updateCat', {
                category : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
  };

    this.updateCat = function (req, res, next) {
      req.services(function(err, services){
    		var catDataServ = services.catDataServ;
        var cat_id = req.params.cat_id;
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            cat_name : input.cat_name
        };
        catDataServ.updateCategory([data, cat_id], function(err, results) {
              if (err) return next(err);
              res.redirect('/category');
        });
    });
  };

    this.delCat = function (req, res, next) {
      req.services(function(err, services){
    		var catDataServ = services.catDataServ;
        var cat_id = req.params.cat_id;
        catDataServ.deleteCategory([cat_id], function(err, results) {
              if (err) return next(err);
              res.redirect('/category');
        });
    });
  };

    this.showCatPopularity = function (req, res, next) {
      req.services(function(err, services){
    		var catDataServ = services.catDataServ;
        catDataServ.popularCategory(function(err, results) {
            if (err) return next(err);
            res.render( 'catPopularity', {
                catPopularity : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
  };

    this.showCatProfit = function (req, res, next) {
      req.services(function(err, services){
    		var catDataServ = services.catDataServ;
        catDataServ.profitsPerCategory(function(err, results) {
            if (err) return next(err);
            res.render( 'catProfit', {
                catProfit : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
  };

    this.getSearchCategory = function(req, res, next){
      req.services(function(err, services){
    		var catDataServ = services.catDataServ;
        var searchValue = req.params.searchValue;
        searchValue = "%" + searchValue + "%";
        catDataServ.searchCategory([searchValue], function(err, results){
            if (err) return next(err);
            res.render('category_list', {
                admin: admin,
                user: req.session.user,
                categories : results,
                layout : false
            });
        });
    });
  };
}
