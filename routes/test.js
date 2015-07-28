var catMethods = require('./categoryMethods');
var assert = require("assert");
var should = require("should");

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


describe('categoryMethods', function() {
  describe('#show_category_screen', function() {
    it('should be a function', function() {
      catMethods.showCategory.should.be.a["function"];
    });
    it('should return something cool', function() {
      var mockReq = null;
      var mockRes = {
        render: function(viewName) {
          viewName.should.exist;
        }
      };
      catMethods.showCategory(mockReq, mockRes);
    });
  });
});
