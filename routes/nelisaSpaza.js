/***
 * A very basic CRUD example using MySQL
 */	

//todo - fix the error handling

exports.showProducts = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) 
			return next(err);
		connection.query('SELECT * from product', [], function(err, results) {
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

exports.showProdPopularity = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('select product.prod_name, sum(qtySold) as totalSold from sales, product where sales.prod_id = product.prod_id group by sales.prod_id order by totalSold desc', [], function(err, results) {
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
        connection.query('select cat_name, sum(qtySold) as totalSold from category, product, sales where category.cat_id = product.cat_id and product.prod_id = sales.prod_id group by cat_name order by totalSold desc', [], function(err, results) {
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
        connection.query('select prod_name, (salePrice - cost) as profit from product,sales,stock where product.prod_id = sales.prod_id and product.prod_id = stock.prod_id group by prod_name order by profit desc', [], function(err, results) {
            if (err) return next(err);

            res.render( 'prodProfit', {
                prodProfit : results
            });
        });
    });
};