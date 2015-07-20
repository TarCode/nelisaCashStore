var catMethods = require('./categoryMethods');
admin = "";
try{

  var request = {
    getConnection : function(func) {
      // body...
      func(null, {
        query : function(query, params, cb) {
          cb();
        }
      });
    },
    session : {}
  };

var response = {
  render : function(templateName, params){

  }
}

  catMethods.showCategory(request, {
    render : function(templateName, params) {
      console.log(templateName)
      console.log(params);
    }
  });
}
catch(err){
  console.log(err);
}
