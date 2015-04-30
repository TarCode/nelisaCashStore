var express = require('express')
    mysql = require('mysql'),
    exphbs  = require('express-handlebars'), 
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    nelisaSpaza = require('./routes/nelisaSpaza');

var app = express();

var dbOptions = {
     host: 'localhost',
      user: 'root',
      password: 'UvEHEMoL4puS)',
      port: 3306,
      database: ' nelisaRaw'
};


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.render('home');
});

//renders add page and fetches data from db for dropdown
app.get('/addEntity', nelisaSpaza.showAddCat);
app.get('/addSales', nelisaSpaza.showAddProd);
app.get('/addPurchases', nelisaSpaza.showAddSupp);

//posts data to server and calls function to add data to database
app.post('/addCat', nelisaSpaza.addCat);
app.post('/addProd', nelisaSpaza.addProd);
app.post('/addSupp', nelisaSpaza.addSupp);
app.post('/addSale', nelisaSpaza.addSale);
app.post('/addPurchase', nelisaSpaza.addPurchase);

// gets product id and inserts it into the route to execute the delete function
app.get('/products/delProd/:prod_id', nelisaSpaza.delProd);
app.get('/category/delCat/:cat_id', nelisaSpaza.delCat);
app.get('/suppliers/delSupp/:supplier_id', nelisaSpaza.delSupp);
app.get('/sales/delSale/:sale_id', nelisaSpaza.delSale);
app.get('/stock/delPurchase/:purchase_id', nelisaSpaza.delPurchase);


//gets data from the database and displays it on the web page
app.get('/products', nelisaSpaza.showProducts);
app.get('/purchases', nelisaSpaza.showPurchases);
app.get('/sales', nelisaSpaza.showSales);
app.get('/suppliers', nelisaSpaza.showSuppliers);
app.get('/category', nelisaSpaza.showCategory);
app.get('/prodPopularity', nelisaSpaza.showProdPopularity);
app.get('/catPopularity', nelisaSpaza.showCatPopularity);
app.get('/prodProfit', nelisaSpaza.showProdProfit);
app.get('/catProfit', nelisaSpaza.showCatProfit);

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

