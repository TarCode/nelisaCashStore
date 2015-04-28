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
      password: 'coder123',
      port: 3306,
      database: 'nelisaSpaza'
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

app.get('/add', nelisaSpaza.showAddCat);

app.post('/addCat', nelisaSpaza.addCat);
app.post('/addProd', nelisaSpaza.addProd);
app.post('/addSupp', nelisaSpaza.addSupp);

app.get('/products', nelisaSpaza.showProducts);

app.get('/purchases', nelisaSpaza.showPurchases);

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

