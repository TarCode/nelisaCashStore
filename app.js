var express = require('express')
var app = express()
var exphbs  = require('express-handlebars')

var most = require('./data/most');
var avgTotDayPerProd = require('./data/avgTotDailySalesPerProd');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('home', most);

});

app.get('/summary', function(req, res){
    res.render('summary', {summary:avgTotDayPerProd});
})


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

