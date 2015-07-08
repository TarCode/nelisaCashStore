var bcrypt = require('bcrypt');
var count = 0;
var user = {};

admin = false;
lock = false;
exist = false;

//log user in or redirect
exports.login = function (req, res){
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
}

//render error msg if info entered incorrectly
exports.loggedIn = function (req, res) {
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

}

//signup function
exports.signUp = function (req, res){
  res.render('signUp');
}

//logout function
exports.logout = function (req, res){
    var msg = "You have logged out";
    delete req.session.user;
    res.render('home',{
                msg : msg
    });
}

//proceed to the next middleware component
exports.middleCheck = function(req, res, next){
  if(req.session.user){
      next();
  }
  else{
      res.redirect("/");
  }

}

//add user function
exports.addUser = function (req, res, next) {
    req.getConnection(function(err, connection){
        connection.query('SELECT username FROM users', [], function(err, exists) {
            if (err){
                return next(err);
            }
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
                            connection.query('insert into users set ?', data, function(err, results) {
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
};

//check if user exists in database
exports.checkUser = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);

        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            username : input.user,
            password: input.pass,
            role: input.userRole
        };
         if(data.username.trim() === "" || data.password.trim() === ""){
                msg = "Fields cannot be blank";
                 res.render('home', {
                          msg:msg
                        });
         }
        //hash password to check against hashed password in database
        connection.query('SELECT password, role, locked from users WHERE username = ?', [data.username], function(err, results) {
            if (err) return next(err);
            if(results.length ==1){
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
                            connection.query('update users set ? where username = ?',[locked, data.username], function(err, results) {
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
exports.showUsers = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err)
            return next(err);

        connection.query('SELECT username,role FROM users', [], function(err, results) {
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
exports.updateUserRole = function (req, res, next) {

    var role = req.params.role;
    var username = req.params.username;

    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            role : input.role
        };
        connection.query('update users set ? where username = ?',[data, username], function(err, results) {
            if (err)
                console.log("Error updating : %s ",err );

            res.redirect('/users');
        });
    });
};

exports.deleteUser = function (req, res, next) {

    var username = req.params.username;

    req.getConnection(function(err, connection){
        if (err){
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        connection.query('DELETE FROM users where username = ?',[username], function(err, results) {
            if (err)
                console.log("Error updating : %s ",err );

            res.redirect('/users');
        });
    });
};
