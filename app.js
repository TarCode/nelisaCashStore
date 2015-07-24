var express = require('express'),
    exphbs  = require('express-handlebars'),
    bodyParser = require('body-parser'),
    purchaseMethods = require('./routes/purchaseMethods'),
    userMethods = require('./routes/userMethods'),
    categoryMethods = require('./routes/categoryMethods'),
    productMethods = require('./routes/productMethods'),
    supplierMethods = require('./routes/supplierMethods'),
    saleMethods = require('./routes/saleMethods'),
    session = require('express-session');


var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({secret: "bookworms", cookie: {maxAge: 1000000}, resave:true, saveUninitialized: false}));

app.get('/', userMethods.login);
app.get('/', userMethods.loggedIn);
app.get('/signUp', userMethods.signUp);
app.post('/signUp', userMethods.addUser);
app.post('/login', userMethods.checkUser);
app.get('/logout', userMethods.logout);

//middleware user check
app.use(userMethods.middleCheck);

app.get('/users', userMethods.showUsers);
app.post('/updateUserRole/:username', userMethods.updateUserRole);
app.post('/users/deleteUser/:username', userMethods.deleteUser);

app.get('/category', categoryMethods.showCategory);
app.get('/category/add', categoryMethods.showAddCat);
app.post('/category/add', categoryMethods.addCat);
app.get('/category/getCat/:cat_id', categoryMethods.getUpdateCat);
app.get('/category/delCat/:cat_id', categoryMethods.delCat);
app.post('/category/updateCat/:cat_id', categoryMethods.updateCat);
app.get('/category/search/:searchValue', categoryMethods.getSearchCategory);
app.get('/category/popularity', categoryMethods.showCatPopularity);
app.get('/category/profit', categoryMethods.showCatProfit);

app.get('/products', productMethods.showProducts);
app.get('/products/add', productMethods.showAddProd);
app.post('/products/add', productMethods.addProd);
app.get('/products/getProd/:prod_id', productMethods.getUpdateProd);
app.post('/products/updateProd/:prod_id', productMethods.updateProd);
app.get('/products/delProd/:prod_id', productMethods.delProd);
app.get('/products/search/:searchValue', productMethods.getSearchProduct);
app.get('/products/popularity', productMethods.showProdPopularity);
app.get('/products/profit', productMethods.showProdProfit);


app.get('/suppliers', supplierMethods.showSuppliers);
app.get('/suppliers/add',supplierMethods.showAddSupplier);
app.post('/suppliers/add', supplierMethods.addSupp);
app.get('/suppliers/getSupp/:supplier_id', supplierMethods.getSupp);
app.post('/suppliers/updateSupp/:supplier_id', supplierMethods.updateSupp);
app.get('/suppliers/delSupp/:supplier_id', supplierMethods.delSupp);
app.get('/suppliers/search/:searchValue', supplierMethods.getSearchSupplier);

app.get('/sales', saleMethods.showSales);
app.get('/sales/add', saleMethods.showAddSale);
app.post('/sales/add', saleMethods.addSale);
app.get('/sales/getSale/:sale_id', saleMethods.getUpdateSale);
app.post('/sales/updateSale/:sale_id', saleMethods.updateSale);
app.get('/sales/delSale/:sale_id', saleMethods.delSale);
app.get('/sales/search/:searchValue', saleMethods.getSearchSale);

app.get('/purchases', purchaseMethods.showPurchases);
app.get('/purchases/add', purchaseMethods.showAddPurchase);
app.post('/purchases/add', purchaseMethods.addPurchase);
app.get('/stock/getPurchase/:purchase_id', purchaseMethods.getUpdatePurchase);
app.post('/stock/updatePurchase/:purchase_id', purchaseMethods.updatePurchase);
app.get('/stock/delPurchase/:purchase_id', purchaseMethods.delPurchase);
app.get('/purchases/search/:searchValue', purchaseMethods.getSearchPurchase);

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Nelisa app listening at http://%s:%s', host, port);

});
