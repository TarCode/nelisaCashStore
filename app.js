var express = require('express'),
    mysql = require('mysql'),
    exphbs  = require('express-handlebars'), 
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    nelisaSpaza = require('./routes/nelisaSpaza'),
    session = require('express-session');


var app = express();
var user = {};
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

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(session({secret: "bookworms", cookie: {maxAge: 120000}, resave:true, saveUninitialized: false}));

app.get('/', function (req, res){
  if(req.session.user ){
        user.username = req.session.user;
        res.render('loggedIn', {
                user: req.session.user,
                admin:admin
            });

    }
    else{
  res.render('home');
}
});

app.get('/', function (req, res) {
    if(req.session.user ){
        user.username = req.session.user;
        res.render('loggedIn', {
                user: req.session.user,
                admin:admin
            });

    }
    else if(lock == true){
       msg = "Your account has been locked";
        res.render('home', {
          msg:msg
        });
    }
    else{
      msg = "Incorrect username/password combination";
        res.render('home', {
          msg:msg
        });

    }
    
});

app.get('/signUp', function (req, res){
  res.render('signUp');
});

app.post('/signUp', nelisaSpaza.addUser);

app.post('/login', nelisaSpaza.checkUser);

app.get('/logout', function (req, res){
	var msg = "You have logged out";
	delete req.session.user;
	res.render('home',{
                msg : msg
    });
});

app.use(function(req, res, next){


  if(req.session.user){

      //proceed to the next middleware component

      //for this users role can I access this...
      next();
  }
  else{
      res.redirect("/");
  }
  
});

//renders add page and fetches data from db for dropdown
app.get('/addCategory', nelisaSpaza.showAddCat);
app.get('/addProduct', nelisaSpaza.showAddProd);
app.get('/addSupplier',nelisaSpaza.showAddSupplier);
app.get('/addSales', nelisaSpaza.showAddSale);
app.get('/addPurchases', nelisaSpaza.showAddPurchase);


//posts data to server and calls function to add data to database
app.post('/addCat', nelisaSpaza.addCat);
app.post('/addProd', nelisaSpaza.addProd);
app.post('/addSupp', nelisaSpaza.addSupp);
app.post('/addSale', nelisaSpaza.addSale);
app.post('/addPurchases', nelisaSpaza.addPurchase);

//update routes
app.get('/category/getCat/:cat_id', nelisaSpaza.getCat);
app.post('/category/updateCat/:cat_id', nelisaSpaza.updateCat);
app.get('/suppliers/getSupp/:supplier_id', nelisaSpaza.getSupp);
app.post('/suppliers/updateSupp/:supplier_id', nelisaSpaza.updateSupp);
app.get('/products/getProd/:prod_id', nelisaSpaza.getProd);
app.post('/products/updateProd/:prod_id', nelisaSpaza.updateProd);
app.get('/sales/getSale/:sale_id', nelisaSpaza.getSale);
app.post('/sales/updateSale/:sale_id', nelisaSpaza.updateSale);
app.get('/stock/getPurchase/:purchase_id', nelisaSpaza.getPurchase);
app.post('/stock/updatePurchase/:purchase_id', nelisaSpaza.updatePurchase);


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

  var host = server.address().address;
  var port = server.address().port;

  console.log('Nelisa app listening at http://%s:%s', host, port);

})

