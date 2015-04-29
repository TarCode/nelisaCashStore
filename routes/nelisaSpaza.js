/***
 * A very basic CRUD example using MySQL
 */	

//todo - fix the error handling
exports.showAddCat = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT * from category', [], function(err, results) {
            if (err) return next(err);

            res.render( 'addEntity', {
                category : results
            });
        });
    });
};

exports.showAddProd = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT * from product', [], function(err, results) {
            if (err) return next(err);

            res.render( 'addTransaction', {
                product : results
            });
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
        connection.query('insert into category set ?', data, function(err, results) {
            if (err)
                console.log("Error inserting : %s ",err );

            res.redirect('/category');
        });
    });
};

exports.addProd = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            prod_name : input.prod_name,
            cat_id : input.cat_id
        };
        connection.query('insert into product set ?', data, function(err, results) {
            if (err)
                console.log("Error inserting : %s ",err );

            res.redirect('/products');
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

exports.addSale = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            prod_id: input.prod_id,
            date : input.date,
            qtySold: input.qtySold,
            salePrice: input.salePrice
        };
        connection.query('insert into sales set ?', data, function(err, results) {
            if (err)
                console.log("Error inserting : %s ",err );

            res.redirect('/');
        });
    });
};

exports.showProducts = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) 
			return next(err);
		connection.query('SELECT prod_id,prod_name,cat_name from product,category where product.cat_id = category.cat_id', [], function(err, results) {
        	if (err) return next(err);

    		res.render( 'productList', {
    			product : results
    		});
      });
	});
};

exports.showPurchases = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT * from stock', [], function(err, results) {
            if (err) return next(err);

            res.render( 'purchaseHistory', {
                stock : results
            });
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
                supplier : results
            });
        });
    });
};

exports.showCategory = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT * from category', [], function(err, results) {
            if (err) return next(err);

            res.render( 'category', {
                category : results
            });
        });
    });
};

exports.showProdPopularity = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT prod_name, sum(qtySold) as total_sold FROM product,sales WHERE product.prod_id = sales.prod_id GROUP BY prod_name ORDER BY total_sold DESC', [], function(err, results) {
            if (err) return next(err);

            res.render( 'prodPopularity', {
                prodPopularity : results
            });
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
                catPopularity : results
            });
        });
    });
};

exports.showProdProfit = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('select prod_name, min(salePrice-cost) as minProfit, max(salePrice-cost) as maxProfit from product, sales, stock where product.prod_id = sales.prod_id and sales.prod_id = stock.prod_id group by prod_name order by maxProfit desc', [], function(err, results) {
            if (err) return next(err);

            res.render( 'prodProfit', {
                prodProfit : results
            });
        });
    });
};

exports.showCatProfit = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('select cat_name, supplier_name, sum(salePrice - cost) as profit from product,sales,stock,supplier, category where product.prod_id = sales.prod_id and product.prod_id = stock.prod_id and product.supplier_id = supplier.supplier_id and product.cat_id = category.cat_id group by cat_name order by profit desc', [], function(err, results) {
            if (err) return next(err);

            res.render( 'catProfit', {
                catProfit : results
            });
        });
    });
};