var express = require('express'),
    mysql = require('mysql'),
    exphbs  = require('express-handlebars'), 
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    nelisaSpaza = require('./routes/nelisaSpaza');



var app = express();
var user = {};
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



app.get('/', function (req, res){
  res.render('home');
});


app.post('/login', nelisaSpaza.checkUser);





//gets data from the database and displays it on the web page
app.get('/products', nelisaSpaza.showProducts);


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Nelisa app listening at http://%s:%s', host, port);

});