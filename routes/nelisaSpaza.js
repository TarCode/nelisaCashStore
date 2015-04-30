/***
 * A very basic CRUD example using MySQL
 */	
// Here is all the functions for getting data from the db and rendering it to the webpage and visa versa
//todo - fix the error handling

// the show add functions, shows table data on add page(for drop down menu)
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

            res.render( 'addSale', {
                product : results
            });
        });
    });
};

exports.showAddSupp = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT * from supplier', [], function(err, supps) {
            if (err) return next(err);
            connection.query('SELECT * from stock', [], function(err, stock) {
                if (err) return next(err);
                connection.query('SELECT * from product', [], function(err, prod) {
                    if (err) return next(err);
                    res.render( 'addPurchase', {
                        product : prod,
                        supplier: supps,
                        stock: stock
                    });

                });

            });

        });


    });
};

// the add functions(create)
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

            res.redirect('/sales');
        });
    });
};

exports.addPurchase = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            prod_id: input.prod_id,
            supplier_id: input.supplier_id,
            date : input.date,
            quantity: input.quantity,
            cost: input.cost,
            totalCost: (input.cost*input.quantity)
        };
        connection.query('insert into stock set ?', data, function(err, results) {
            if (err)
                console.log("Error inserting : %s ",err );

            res.redirect('/purchases');
        });
    });
};


// display table data function from the db(read)
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

exports.showSales = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT * from sales, product WHERE sales.prod_id = product.prod_id order by sale_id desc', [], function(err, results) {
            if (err) return next(err);

            res.render( 'salesHistory', {
                sales : results
            });
        });
    });
};

exports.showPurchases = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT * from stock, product WHERE stock.prod_id = product.prod_id order by purchase_id desc', [], function(err, results) {
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

// the update functions (update)
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
                category : results
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

exports.getSupp = function (req, res, next) {
    var supplier_id = req.params.supplier_id;
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        connection.query('select * from supplier where supplier_id = ?', [supplier_id], function(err, results) {
            if (err)
                console.log("Error getting : %s ",err );

            res.render( 'updateSupp', {
                supplier : results
            });
        });
    });
};

exports.updateSupp = function (req, res, next) {
    var supplier_id = req.params.supplier_id;
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            supplier_name : input.supplier_name
        };
        connection.query('update supplier set ? where supplier_id = ?',[data, supplier_id], function(err, results) {
            if (err)
                console.log("Error updating : %s ",err );

            res.redirect('/suppliers');
        });
    });
};

exports.getProd = function (req, res, next) {
    var prod_id = req.params.prod_id;
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        connection.query('select * from product where prod_id = ?', [prod_id], function(err, results) {
            if (err)
                console.log("Error getting : %s ",err );

            res.render( 'updateProd', {
                product : results
            });
        });
    });
};

exports.updateProd = function (req, res, next) {
    var prod_id = req.params.prod_id;
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            prod_name : input.prod_name
        };
        connection.query('update product set ? where prod_id = ?',[data, prod_id], function(err, results) {
            if (err)
                console.log("Error updating : %s ",err );

            res.redirect('/products');
        });
    });
};




//the delete functions(delete)
exports.delProd = function (req, res, next) {
    var prod_id = req.params.prod_id;

    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }

        connection.query('delete from product where prod_id = ?',[prod_id], function(err, results) {
            if (err)
                console.log("Error deleting : %s ",err );

            res.redirect('/products');
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

exports.delSupp = function (req, res, next) {
    var supplier_id = req.params.supplier_id;

    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }

        connection.query('delete from supplier where supplier_id = ?',[supplier_id], function(err, results) {
            if (err)
                console.log("Error deleting : %s ",err );
            res.redirect('/suppliers');
        });
    });
};

exports.delSale = function (req, res, next) {
    var sale_id = req.params.sale_id;

    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }

        connection.query('delete from sales where sale_id = ?',[sale_id], function(err, results) {
            if (err)
                console.log("Error deleting : %s ",err );
            res.redirect('/sales');
        });
    });
};

exports.delPurchase = function (req, res, next) {
    var purchase_id = req.params.purchase_id;

    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }

        connection.query('delete from stock where purchase_id = ?',[purchase_id], function(err, results) {
            if (err)
                console.log("Error deleting : %s ",err );
            res.redirect('/purchases');
        });
    });
};

