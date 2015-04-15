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
      database: 'nelisaRaw'
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

app.get('/products', nelisaSpaza.showProducts);

app.get('/purchases', nelisaSpaza.showPurchases);

app.get('/suppliers', nelisaSpaza.showSuppliers);

app.get('/avTotSalPerDayProd', function(req, res){
    res.render('listPage', {title: 'AVERAGE TOTAL SALES PER DAY PER PRODUCT' ,prod:avgTotDayPerProd});
});

app.get('/totalEarningsPerProduct', function(req, res){
    res.render('listPage', {title: 'TOTAL EARNINGS PER PRODUCT' ,prod:totEarningsPerProd});
});

app.get('/mostRegularSales', function(req, res){
    res.render('listPage', {title: 'MOST REGULAR SALES' ,prod:mostRegSales});
});

app.get('/mostProfProduct', function(req, res){
    res.render('singlePage',{title: 'MOST PROFITABLE PRODUCT' ,prod:mostProfitProd});
});

app.get('/leastProfProduct', function(req, res){
    res.render('singlePage', {title: 'LEAST PROFITABLE PRODUCT' ,prod:leastProfitProd});
});

app.get('/stockRem', function(req, res){
    res.render('listPage', {title: 'STOCK REMAINING' ,prod:stockRemain});
});

app.get('/supplierPopularProduct', function(req, res){
    res.render('singlePage', {title: 'SUPPLIER OF MOST POPULAR PRODUCT' ,prod:supplyPopProd});
});

app.get('/supplierProfitProduct', function(req, res){
    res.render('singlePage', {title: 'SUPPLIER OF MOST PROFITABLE PRODUCT' ,prod:supplyProfProd});
});


app.get('/totalPerCat', function(req, res){
    res.render('listPage', {title: 'TOTAL SALES PER CATEGORY' ,prod:totPerCat});
});

app.get('/mostPopularCat', function(req, res){
    res.render('singlePage', {title: 'MOST POPULAR CATEGORY' ,prod:mostPopCat});
});

app.get('/leastPopularCat', function(req, res){
    res.render('singlePage', {title: 'LEAST POPULAR CATEGORY' ,prod:leastPopCat});
});

app.get('/totalEarningsPerCat', function(req, res){
    res.render('listPage', {title: 'TOTAL EARNINGS PER CATEGORY' ,prod:totEarningsPerCat});
});

app.get('/mostEarningCategory', function(req, res){
    res.render('singlePage', {title: 'HIGHEST EARNING CATEGORY' ,prod:mostEarningCat});
});

app.get('/leastEarningCategory', function(req, res){
    res.render('singlePage', {title: 'LEAST EARNING CATEGORY' ,prod:leastEarningCat});
});

app.get('/mostProfitCategory', function(req, res){
    res.render('singlePage', {title: 'MOST PROFITABLE CATEGORY' ,prod:mostProfitCat});
});

app.get('/leastProfitCategory', function(req, res){
    res.render('singlePage', {title: 'LEAST PROFITABLE CATEGORY' ,prod:leastProfitCat});
});

app.get('/totalSalesPerDay', function(req, res){
    res.render('listPage', {title: 'TOTAL SALES PER DAY' ,prod:totDailySales});
});

app.get('/avgTotalSalesPerDay', function(req, res){
    res.render('singlePage', {title: 'AVERAGE TOTAL SALES PER DAY' ,prod:avgTotSalesPerDay});
});

app.get('/totalSalesPerWeek', function(req, res){
    res.render('listPage', {title: 'TOTAL SALES PER WEEK' ,prod:totWeeklySales});
});

app.get('/avgTotalSalesPerWeek', function(req, res){
    res.render('singlePage', {title: 'AVERAGE TOTAL SALES PER WEEK' ,prod:avgTotWeeklySales});
});

app.get('/avgTotalSalesPerWeekPerProd', function(req, res){
    res.render('listPage', {title: 'AVERAGE TOTAL SALES PER WEEK PER PRODUCT' ,prod:avgTotWeeklySalesPerProd});
});

app.get('/avgTotalSalesPerDayPerCat', function(req, res){
    res.render('listPage', {title: 'AVERAGE TOTAL SALES PER DAY PER CATEGORY' ,prod:avgTotDailySalesPerCat});
});

app.get('/avgTotalSalesPerWeekPerCat', function(req, res){
    res.render('listPage', {title: 'AVERAGE TOTAL SALES PER WEEK PER CATEGORY' ,prod:avgTotWeeklySalesPerCat});
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

