/***
 * A very basic CRUD example using MySQL
 */ 
// Here is all the functions for getting data from the db and rendering it to the webpage and visa versa
//todo - fix the error handling
var admin = false;
var bcrypt = require('bcrypt');

//add user function
exports.addUser = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        
        var data = {
            username : input.user,
            password: input.pass,
            role: input.userRole
        };

        if(data.username.trim() === "" || data.password.trim() === ""){
            res.render( 'signUp', {
                msg : "Fields cannot be blank"
            });
            return;
        }
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(input.pass, salt, function(err, hash) {
                // Store hash in your password DB. 
                data.password = hash;
                connection.query('insert into users set ?', data, function(err, results) {
                    if (err)
                        console.log("Error inserting : %s ",err );

                    res.render('home', {msg:"Successfully signed up"});
                });
            });
        });
        
    });
};

//check if user exists in database
exports.checkUser = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);

        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            username : input.user,
            password: input.pass,
            role: input.userRole
        };
        //hash password to check against hashed password in database
        connection.query('SELECT password, role from users WHERE username = ?', [data.username], function(err, results) {
            if (err) return next(err);
            if(results.length ==1){
            var user = results[0];

              console.log(data.password);
              console.log(user.password);
                bcrypt.compare(data.password, user.password, function(err, pass){
                if(pass == true){
                    req.session.user = {username: data.username,
                                         role: user.role};
                    if(user.role == "admin"){
                        admin = true;
                    }
                    else{
                        admin = false;
                    };

                    res.render('loggedIn', {
                        user: req.session.user,
                        admin:admin
                    });
                }
                else{
                msg = "Incorrect username/password combination";
                res.render('home', {
                  msg:msg
                });

            }
                });
            }
        });

                
            
            
            

        });
    }


// the show add functions, shows table data on add page(for drop down menu)
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

exports.showAddProd = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
               connection.query('SELECT * from category', [], function(err, results) {
            if (err) return next(err);

            res.render( 'addProduct', {
                category : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
};

exports.showAddSupplier = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);

                    res.render( 'addSupplier',{
                        user: req.session.user,
                        admin:admin
                    });

                });

};

exports.showAddSale = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);
        connection.query('SELECT * from product', [], function(err, results) {
            if (err) return next(err);

            res.render( 'addSale', {
                product : results,
                user: req.session.user,
                admin:admin
            });
        });
    });
};

exports.showAddPurchase = function (req, res, next) {
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
                        stock: stock,
                user: req.session.user,
                admin:admin
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
                product : results,
                user: req.session.user,
                admin:admin
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
                sales : results,
                user: req.session.user,
                admin:admin
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
                stock : results,
                user: req.session.user,
                admin:admin
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
                supplier : results,
                user: req.session.user,
                admin:admin
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
                category : results,
                user: req.session.user,
                admin:admin
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
                prodPopularity : results,
                user: req.session.user,
                admin:admin
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
                catPopularity : results,
                user: req.session.user,
                admin:admin
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
                prodProfit : results,
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
                supplier : results,
                user: req.session.user,
                admin:admin
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
                product : results,
                user: req.session.user,
                admin:admin
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

exports.getSale = function (req, res, next) {
    var sale_id = req.params.sale_id;
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        connection.query('select * from sales where sale_id = ?', [sale_id], function(err, results) {
            if (err)
                console.log("Error getting : %s ",err );

            connection.query('select * from product', [], function(err, prods) {
                if (err)
                    console.log("Error getting : %s ",err );
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

exports.updateSale = function (req, res, next) {
    var sale_id = req.params.sale_id;
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            prod_id : input.prod_id,
            date : input.date,
            qtySold: input.qtySold,
            salePrice: input.salePrice
        };
        connection.query('update sales set ? where sale_id = ?',[data, sale_id], function(err, results) {
            if (err)
                console.log("Error updating : %s ",err );

            res.redirect('/sales');
        });
    });
};

exports.getPurchase = function (req, res, next) {
    var purchase_id = req.params.purchase_id;
    req.getConnection(function (err, connection) {
        if (err) {
            return next(err);
        }
        connection.query('select * from stock where purchase_id = ?', [purchase_id], function (err, results) {
            if (err)
                console.log("Error getting : %s ", err);

            connection.query('select * from product', [], function (err, prods) {
                if (err)
                    console.log("Error getting : %s ", err);

                connection.query('select * from supplier', [], function (err, supps) {
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

exports.updatePurchase = function (req, res, next) {
    var purchase_id = req.params.purchase_id;
    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            prod_id : input.prod_id,
            supplier_id: input.supplier_id,
            date : input.date,
            quantity: input.quantity,
            cost: input.cost,
            totalCost: (input.cost*input.quantity)
        };
        connection.query('update stock set ? where purchase_id = ?',[data, purchase_id], function(err, results) {
            if (err)
                console.log("Error updating : %s ",err );

            res.redirect('/stock');
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

