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