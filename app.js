var express = require('express')
var app = express()
var exphbs  = require('express-handlebars')

var avgTotDayPerProd = require('./data/avgTotDailySalesPerProd');
var mostSoldProd = require('./data/most');
var leastSoldProd = require('./data/least');
var totEarningsPerProd = require('./data/totEarningsPerProd');
var mostRegSales = require('./data/mostRegSales');
var mostProfitProd = require('./data/mostEarningProd');
var leastProfitProd = require('./data/leastEarningProd');
var stockRemain = require('./data/stockRemaining');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('home');

});

app.get('/mostSoldProduct', function (req, res) {
    res.render('singlePage',mostSoldProd);

});

app.get('/leastSoldProduct', function (req, res) {
    res.render('singlePage',leastSoldProd);

});

app.get('/avTotSalPerDayProd', function(req, res){
    res.render('listPage', {item:avgTotDayPerProd});
});

app.get('/totalEarningsPerProduct', function(req, res){
    res.render('listPage', {item:totEarningsPerProd});
});

app.get('/mostRegularSales', function(req, res){
    res.render('listPage', {item:mostRegSales});
});

app.get('/mostProfProduct', function(req, res){
    res.render('singlePage', mostProfitProd);
});

app.get('/leastProfProduct', function(req, res){
    res.render('singlePage', leastProfitProd);
});

app.get('/stockRem', function(req, res){
    res.render('listPage', {item:stockRemain});
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

