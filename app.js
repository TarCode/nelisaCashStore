var express = require('express')
var app = express()
var exphbs  = require('express-handlebars')

var supplyPopProd = require('./data/supplyPopProduct');
var supplyProfProd = require('./data/supplyProfProduct');
var avgTotDayPerProd = require('./data/avgTotDailySalesPerProd');
var mostSoldProd = require('./data/most');
var leastSoldProd = require('./data/least');
var totEarningsPerProd = require('./data/totEarningsPerProd');
var mostRegSales = require('./data/mostRegSales');
var mostProfitProd = require('./data/mostEarningProd');
var leastProfitProd = require('./data/leastEarningProd');
var stockRemain = require('./data/stockRemaining');
var totPerCat = require('./data/totPerCat');
var mostPopCat = require('./data/mostPopCat');
var leastPopCat = require('./data/leastPopCat');
var totEarningsPerCat = require('./data/totEarningsPerCat');
var mostEarningCat = require('./data/mostEarningCat');
var leastEarningCat = require('./data/leastEarningCat');
var mostProfitCat = require('./data/mostProfitCat');
var leastProfitCat = require('./data/leastProfitCat');
var totDailySales = require('./data/totalDailySales');
var avgTotSalesPerDay = require('./data/avgTotDailySales');
var totWeeklySales = require('./data/totalWeeklySales');
var avgTotWeeklySales = require('./data/avgTotWeeklySales');
var avgTotWeeklySalesPerProd = require('./data/avgTotWeeklySalesPerProd');
var avgTotDailySalesPerCat = require('./data/avgTotDailySalesPerCat');
var avgTotWeeklySalesPerCat = require('./data/avgTotWeeklySalesPerCat');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('home');
});

app.get('/mostSoldProduct', function (req, res) {
    res.render('singlePage',{title:'MOST SOLD PRODUCT', prod:mostSoldProd}  );

});

app.get('/leastSoldProduct', function (req, res) {
    res.render('singlePage',{title:'LEAST SOLD PRODUCT', prod:leastSoldProd} );
});

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



var port = process.env.PORT || 3000;
var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

