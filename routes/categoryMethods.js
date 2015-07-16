exports.showCategory = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT * from category', [], function(err, results) {
            if (err) return next(err);
            res.render( 'category', {
                category : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
};

exports.showAddCat = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
            res.render('addCategory', {
                user: req.session.user,
                admin:admin
            });
    });
};
exports.addCat = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            cat_name : input.cat_name
        };

        if(data.cat_name.trim() === "" ){
            res.render( 'addCategory', {
                error : "Category cannot be blank"
            });
            return;
        }

        connection.query('insert into category set ?', data, function(err, results) {
            if (err)
                console.log("Error inserting : %s ",err );

            res.redirect('/category');
        });
    });
};

exports.showCatPopularity = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT cat_name, sum(qtySold) as total_sold FROM product,category,sales  WHERE product.prod_id = sales.prod_id AND category.cat_id = product.cat_id GROUP BY cat_name ORDER BY total_sold DESC', [], function(err, results) {
            if (err) return next(err);

            res.render( 'catPopularity', {
                catPopularity : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
};
exports.showCatProfit = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('select cat_name, supplier_name, sum(salePrice - cost) as profit from product,sales,stock,supplier, category where product.prod_id = sales.prod_id and product.prod_id = stock.prod_id and stock.supplier_id = supplier.supplier_id and product.cat_id = category.cat_id group by cat_name order by profit desc', [], function(err, results) {
            if (err) return next(err);

            res.render( 'catProfit', {
                catProfit : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
};
exports.getCat = function (req, res, next) {
    var cat_id = req.params.cat_id;
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        connection.query('select * from category where cat_id = ?', [cat_id], function(err, results) {
            if (err)
                console.log("Error getting : %s ",err );

            res.render( 'updateCat', {
                category : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
};
exports.updateCat = function (req, res, next) {
    var cat_id = req.params.cat_id;
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            cat_name : input.cat_name
        };
        connection.query('update category set ? where cat_id = ?',[data, cat_id], function(err, results) {
            if (err)
                console.log("Error updating : %s ",err );

            res.redirect('/category');
        });
    });
};
exports.delCat = function (req, res, next) {
    var cat_id = req.params.cat_id;

    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }

        connection.query('delete from category where cat_id = ?',[cat_id], function(err, results) {
            if (err)
                console.log("Error deleting : %s ",err );
            res.redirect('/category');
        });
    });
};

exports.getSearchCategory = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
                return next(err);
        var searchValue = req.params.searchValue;
        searchValue = "%" + searchValue + "%";

        connection.query("SELECT cat_id, cat_name from category WHERE cat_name LIKE ?",[searchValue], function(err, results){
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
