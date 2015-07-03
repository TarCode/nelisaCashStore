var express = require('express'),
    mysql = require('mysql'),
    exphbs  = require('express-handlebars'), 
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    nelisaSpaza = require('./routes/nelisaSpaza'),
    session = require('express-session');


var app = express();

var dbOptions = {
     host: 'localhost',
      user: 'root',
      password: 'coder123',
      port: 3306,
      database: 'nelisa'
};

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(myConnection(mysql, dbOptions, 'single'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({secret: "bookworms", cookie: {maxAge: 1000000}, resave:true, saveUninitialized: false}));

app.get('/', nelisaSpaza.login);
app.get('/', nelisaSpaza.loggedIn);
app.get('/signUp', nelisaSpaza.signUp);
app.post('/signUp', nelisaSpaza.addUser);
app.post('/login', nelisaSpaza.checkUser);
app.get('/logout', nelisaSpaza.logout);

//middleware user check
app.use(nelisaSpaza.middleCheck);

app.get('/users', nelisaSpaza.showUsers);
app.post('/updateUserRole/:username', nelisaSpaza.updateUserRole);
app.post('/users/deleteUser/:username', nelisaSpaza.deleteUser);

app.get('/category', nelisaSpaza.showCategory);
app.get('/category/add', nelisaSpaza.showAddCat);
app.post('/category/add', nelisaSpaza.addCat);
app.get('/category/getCat/:cat_id', nelisaSpaza.getCat);
app.get('/category/delCat/:cat_id', nelisaSpaza.delCat);
app.post('/category/updateCat/:cat_id', nelisaSpaza.updateCat);
app.get('/category/search/:searchValue', nelisaSpaza.getSearchCategory);

app.get('/products', nelisaSpaza.showProducts);
app.get('/products/add', nelisaSpaza.showAddProd);
app.post('/products/add', nelisaSpaza.addProd);
app.get('/products/getProd/:prod_id', nelisaSpaza.getProd);
app.post('/products/updateProd/:prod_id', nelisaSpaza.updateProd);
app.get('/products/delProd/:prod_id', nelisaSpaza.delProd);
app.get('/products/search/:searchValue', nelisaSpaza.getSearchProduct);


app.get('/suppliers', nelisaSpaza.showSuppliers);
app.get('/suppliers/add',nelisaSpaza.showAddSupplier);
app.post('/suppliers/add', nelisaSpaza.addSupp);
app.get('/suppliers/getSupp/:supplier_id', nelisaSpaza.getSupp);
app.post('/suppliers/updateSupp/:supplier_id', nelisaSpaza.updateSupp);
app.get('/suppliers/delSupp/:supplier_id', nelisaSpaza.delSupp);
app.get('/suppliers/search/:searchValue', nelisaSpaza.getSearchSupplier);

app.get('/sales', nelisaSpaza.showSales);
app.get('/sales/add', nelisaSpaza.showAddSale);
app.post('/sales/add', nelisaSpaza.addSale);
app.get('/sales/getSale/:sale_id', nelisaSpaza.getSale);
app.post('/sales/updateSale/:sale_id', nelisaSpaza.updateSale);
app.get('/sales/delSale/:sale_id', nelisaSpaza.delSale);
app.get('/sales/search/:searchValue', nelisaSpaza.getSearchSale);

app.get('/purchases', nelisaSpaza.showPurchases);
app.get('/purchases/add', nelisaSpaza.showAddPurchase);
app.post('/purchases/add', nelisaSpaza.addPurchase);
app.get('/stock/getPurchase/:purchase_id', nelisaSpaza.getPurchase);
app.post('/stock/updatePurchase/:purchase_id', nelisaSpaza.updatePurchase);
app.get('/stock/delPurchase/:purchase_id', nelisaSpaza.delPurchase);
app.get('/purchases/search/:searchValue', nelisaSpaza.getSearchPurchase);

app.get('/products/popularity', nelisaSpaza.showProdPopularity);
app.get('/category/popularity', nelisaSpaza.showCatPopularity);
app.get('/products/profit', nelisaSpaza.showProdProfit);
app.get('/category/profit', nelisaSpaza.showCatProfit);

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});