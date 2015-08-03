var mysql = require('mysql');
var categoryDataService = require('./categoryDataService');
var connection =  mysql.createConnection({
  host : 'localhost',
  user : 'pawleesah',
  password : 'coder123',
  database : 'NelisaSpaza'
});

connection.connect();
var catDataServ = new categoryDataService(connection);

exports.showCategory = function (req, res, next) {
    catDataServ.getAllCategories(function(err, rows){
      if(err)	throw err;
        res.render( 'category', {
            category : rows,
            user: req.session.user,
            admin:admin
        });
    });
};

exports.showAddCat = function (req, res, next) {
    res.render('addCategory', {
        user: req.session.user,
        admin:admin
    });
};

exports.addCat = function (req, res, next) {
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
};

exports.getUpdateCat = function (req, res, next) {
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
};

exports.updateCat = function (req, res, next) {
    var cat_id = req.params.cat_id;
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
        cat_name : input.cat_name
    };
    catDataServ.updateCategory([data, cat_id], function(err, results) {
          if (err) return next(err);
          res.redirect('/category');
    });
};

exports.delCat = function (req, res, next) {
    var cat_id = req.params.cat_id;
    catDataServ.deleteCategory([cat_id], function(err, results) {
          if (err) return next(err);
          res.redirect('/category');
    });
};

exports.showCatPopularity = function (req, res, next) {
    catDataServ.popularCategory(function(err, results) {
        if (err) return next(err);
        res.render( 'catPopularity', {
            catPopularity : results,
            user: req.session.user,
            admin:admin
        });
    });
};

exports.showCatProfit = function (req, res, next) {
    catDataServ.profitsPerCategory(function(err, results) {
        if (err) return next(err);
        res.render( 'catProfit', {
            catProfit : results,
            user: req.session.user,
            admin:admin
        });
    });
};

exports.getSearchCategory = function(req, res, next){
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
};
