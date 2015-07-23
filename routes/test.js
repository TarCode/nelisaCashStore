var catMethods = require('./categoryMethods');
var assert = require("assert");

admin = "";
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
catRes = catMethods.showCategory(request, {
  render : function(templateName, params) {
    return(params);
  }
});


  describe('categoryMethods', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, catRes);
    });
  });
