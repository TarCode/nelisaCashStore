module.exports = function(){
    var bcrypt = require('bcrypt');
    var count = 0;
    var user = {};

    admin = false;
    lock = false;
    exist = false;

    //log user in or redirect
    this.login = function (req, res){
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
    };

    //render error msg if info entered incorrectly
    this.loggedIn = function (req, res) {
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

    };

    //signup function
    this.signUp = function (req, res){
      res.render('signUp');
    };

    //logout function
    this.logout = function (req, res){
        var msg = "You have logged out";
        delete req.session.user;
        res.render('home',{
                    msg : msg
        });
    };

    //proceed to the next middleware component
    this.middleCheck = function(req, res, next){
      if(req.session.user){
          next();
      }
      else{
          res.redirect("/");
      }

    };

    this.adminCheck = function(req, res, next){
      if(req.session.user.role === "admin"){
          next();
      }
      else{
          res.redirect("/");
      }

    };

    //add user function
    this.addUser = function (req, res, next) {
      req.services(function(err, services){
        var userDataService = services.userDataService;
            userDataService.getUsername(function(err, exists) {
                if (err) return next(err);

                var input = JSON.parse(JSON.stringify(req.body));

                var data = {
                    username : input.user,
                    password: input.pass,
                    role: "readOnly"
                };

                var password2 = input.pass2;

                if(data.username.trim() === "" || data.password.trim() === ""){
                    res.render( 'signUp', {
                        msg : "Fields cannot be blank"
                    });
                    return;
                }
                else if( data.password != password2){
                    res.render( 'signUp', {
                        msg : "Passwords do not match"
                    });
                    return;
                }
                else{
                    for (var x = 0; x < exists.length; x++){
                            if(data.username === exists[x].username){
                                 exist = true;
                            }
                            else{
                                exist = false;
                            }
                    }
                    if(exist === false){
                        bcrypt.genSalt(10, function(err, salt) {
                            bcrypt.hash(input.pass, salt, function(err, hash) {
                                // Store hash in your password DB.
                                data.password = hash;
                                userDataService.insertUser(data, function(err, results) {
                                    if (err)
                                        console.log("Error inserting : %s ",err );

                                    res.render('home', {msg:"Successfully signed up"});
                                });
                            });
                        });
                    }
                    else{
                        res.render( 'signUp', {
                            msg: "Username already exists"
                        });
                        exist = false;
                    }
                }

            });
          });
    }

    //check if user exists in database
    this.checkUser = function (req, res, next) {
      req.services(function(err, services){
        var userDataService = services.userDataService;
                var input = JSON.parse(JSON.stringify(req.body));
                var data = {
                    username : input.user,
                    password: input.pass,
                    role: input.userRole
                };
                userDataService.checkUser([data.username], function(err, results) {
                    if (err) return next(err);
                 if(data.username.trim() === "" || data.password.trim() === ""){
                        msg = "Fields cannot be blank";
                         res.render('home', {
                                  msg:msg
                                });
                 }
                 else if (results.length === 0){
                   msg = "Username does not exist";
                    res.render('home', {
                             msg:msg
                           });
                 }
                //hash password to check against hashed password in database

                else if(results.length ==1){
                var user = results[0];


                    bcrypt.compare(data.password, user.password, function(err, pass){
                        if(pass == true && user.locked == false){
                            count = 0;

                            req.session.user = {username: data.username,
                                                 role: user.role};
                            if(req.session.user.role === "admin" || user.role === "admin"){
                                admin = true;
                            }
                            else{
                                admin = false;
                            };

                            res.render('loggedIn', {
                                user: req.session.user,
                                admin:admin
                            });
                        }
                        else{
                            count++;
                            msg = "Incorrect username/password combination";
                            if(count == 3){

                                msg = "Your account has been locked because of too many incorrest login attempts";
                                user.locked = true;
                                lock = true;
                                var locked = {
                                    locked:user.locked
                                }
                                userDataService.updateUser([locked, data.username], function(err, results) {
                                    if (err)
                                        console.log("Error updating : %s ",err );
                                });
                            }
                            res.render('home', {
                              msg:msg
                            });
                        }
                    });
                }
            });

    });
  }

    //shows list of users
    this.showUsers = function (req, res, next) {
      req.services(function(err, services){
        var userDataService = services.userDataService;
            userDataService.showUsers(function(err, results) {
                if (err) return next(err);
                res.render( 'users', {
                    users : results,
                    user: req.session.user,
                    admin:admin
                });
            });
    });
  };

    //update user roles  from admin page
    this.updateUserRole = function (req, res, next) {
      req.services(function(err, services){
        var userDataService = services.userDataService;
        var role = req.params.role;
        var username = req.params.username;

        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            role : input.role
        };
        userDataService.updateUser([data, username], function(err, results) {
            if (err) return next(err);

            res.redirect('/users');
        });
    });
  };

    this.deleteUser = function (req, res, next) {
      req.services(function(err, services){
        var userDataService = services.userDataService;
        var username = req.params.username;
            var input = JSON.parse(JSON.stringify(req.body));
            userDataService.deleteUser([username], function(err, results) {
                if (err) return next(err);
                res.redirect('/users');
            });
    });
  };
}
