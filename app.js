var express = require('express'),
    exphbs  = require('express-handlebars'),
    bodyParser = require('body-parser'),
    mysql = require('mysql'),
    session = require('express-session'),
    myConnection = require('express-myconnection'),

    ConnectionProvider = require('./routes/connectionProvider');
    PurchaseDataService = require('./dataServices/purchaseDataService'),
    PurchaseMethods = require('./routes/purchaseMethods'),
    UserDataService = require('./dataServices/userDataService'),
    UserMethods = require('./routes/userMethods'),
    CategoryMethods = require('./routes/categoryMethods'),
    CategoryDataService = require('./dataServices/categoryDataService')
    ProductMethods = require('./routes/productMethods'),
    ProductDataService = require('./dataServices/productDataService'),
    SupplierMethods = require('./routes/supplierMethods'),
    SupplierDataService = require('./dataServices/supplierDataService'),
    SaleDataService = require('./dataServices/saleDataService'),
    SaleMethods = require('./routes/saleMethods');

var app = express();

var dbOptions = {
      host: 'localhost',
      user: 'pawleesah',
      password: 'coder123',
      port: 3306,
      database: 'NelisaSpaza'
};

var serviceSetupCallback = function(connection){
	return {
		catDataServ : new CategoryDataService(connection),
    prodDataServ : new ProductDataService(connection),
    suppDataServ : new SupplierDataService(connection),
    purchaseDataService : new PurchaseDataService(connection),
    saleDataService : new SaleDataService(connection),
    userDataService : new UserDataService(connection)
	}
};

var myConnectionProvider = new ConnectionProvider(dbOptions, serviceSetupCallback);
app.use(myConnectionProvider.setupProvider);

app.use(myConnection(mysql, dbOptions, 'pool'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({secret: "bookworms", cookie: {maxAge: 1000000}, resave:true, saveUninitialized: false}));

var userMethods = new UserMethods();
app.get('/', userMethods.login);
app.get('/', userMethods.loggedIn);
app.get('/signUp', userMethods.signUp);
app.post('/signUp', userMethods.addUser);
app.post('/login', userMethods.checkUser);
app.get('/logout', userMethods.logout);

//middleware user check
app.use(userMethods.middleCheck);

app.get('/users',userMethods.adminCheck, userMethods.showUsers);
app.post('/updateUserRole/:username',userMethods.adminCheck, userMethods.updateUserRole);
app.post('/users/deleteUser/:username',userMethods.adminCheck, userMethods.deleteUser);

var categoryMethods = new CategoryMethods();
app.get('/category',userMethods.middleCheck, categoryMethods.showCategory);
app.get('/category/search/:searchValue',userMethods.middleCheck, categoryMethods.getSearchCategory);
app.get('/category/popularity',userMethods.middleCheck, categoryMethods.showCatPopularity);
app.get('/category/profit',userMethods.middleCheck, categoryMethods.showCatProfit);
app.get('/category/add',userMethods.adminCheck, categoryMethods.showAddCat);
app.post('/category/add',userMethods.adminCheck, categoryMethods.addCat);
app.get('/category/getCat/:cat_id',userMethods.adminCheck, categoryMethods.getUpdateCat);
app.get('/category/delCat/:cat_id',userMethods.adminCheck, categoryMethods.delCat);
app.post('/category/updateCat/:cat_id',userMethods.adminCheck, categoryMethods.updateCat);

var productMethods = new ProductMethods();
app.get('/products',userMethods.middleCheck, productMethods.showProducts);
app.get('/products/search/:searchValue',userMethods.middleCheck, productMethods.getSearchProduct);
app.get('/products/popularity',userMethods.middleCheck, productMethods.showProdPopularity);
app.get('/products/profit',userMethods.middleCheck, productMethods.showProdProfit);
app.get('/products/add',userMethods.adminCheck, productMethods.showAddProd);
app.post('/products/add',userMethods.adminCheck, productMethods.addProd);
app.get('/products/getProd/:prod_id',userMethods.adminCheck, productMethods.getUpdateProd);
app.post('/products/updateProd/:prod_id',userMethods.adminCheck, productMethods.updateProd);
app.get('/products/delProd/:prod_id',userMethods.adminCheck, productMethods.delProd);


var supplierMethods = new SupplierMethods();
app.get('/suppliers',userMethods.middleCheck, supplierMethods.showSuppliers);
app.get('/suppliers/search/:searchValue',userMethods.middleCheck, supplierMethods.getSearchSupplier);
app.get('/suppliers/add',userMethods.adminCheck, supplierMethods.showAddSupplier);
app.post('/suppliers/add',userMethods.adminCheck, supplierMethods.addSupp);
app.get('/suppliers/getSupp/:supplier_id',userMethods.adminCheck, supplierMethods.getSupp);
app.post('/suppliers/updateSupp/:supplier_id',userMethods.adminCheck, supplierMethods.updateSupp);
app.get('/suppliers/delSupp/:supplier_id',userMethods.adminCheck, supplierMethods.delSupp);

var saleMethods = new SaleMethods();
app.get('/sales',userMethods.middleCheck, saleMethods.showSales);
app.get('/sales/search/:searchValue',userMethods.middleCheck, saleMethods.getSearchSale);
app.get('/sales/add',userMethods.adminCheck, saleMethods.showAddSale);
app.post('/sales/add',userMethods.adminCheck, saleMethods.addSale);
app.get('/sales/getSale/:sale_id',userMethods.adminCheck, saleMethods.getUpdateSale);
app.post('/sales/updateSale/:sale_id',userMethods.adminCheck, saleMethods.updateSale);
app.get('/sales/delSale/:sale_id',userMethods.adminCheck, saleMethods.delSale);

var purchaseMethods = new PurchaseMethods();
app.get('/purchases',userMethods.middleCheck, purchaseMethods.showPurchases);
app.get('/purchases/search/:searchValue',userMethods.middleCheck, purchaseMethods.getSearchPurchase);
app.get('/purchases/add',userMethods.adminCheck, purchaseMethods.showAddPurchase);
app.post('/purchases/add',userMethods.adminCheck, purchaseMethods.addPurchase);
app.get('/stock/getPurchase/:purchase_id',userMethods.adminCheck, purchaseMethods.getUpdatePurchase);
app.post('/stock/updatePurchase/:purchase_id',userMethods.adminCheck, purchaseMethods.updatePurchase);
app.get('/stock/delPurchase/:purchase_id',userMethods.adminCheck, purchaseMethods.delPurchase);


var port = process.env.PORT || 3000;

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Nelisa app listening at http://%s:%s', host, port);

});
