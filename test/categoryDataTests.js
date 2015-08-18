var CategoryDataService = require('../dataServices/categoryDataServicePromise');
var assert = require("assert");
var Connection = require('../routes/testConnectionData');
var Promise = require("bluebird");

var connection =  new Connection();

connection.connect();

var categoryDataService= new CategoryDataService(connection);

/*
        Promise.join(categoryDataService.getAllCategories(),
             categoryDataService.popularCategory(),
             function(results1, results2){
               console.log(results1);
               console.log(results2);

             }).error(function(err){
               console.log(err);
             });
*/

describe('Category Data Service', function(){

    it('should find all categories', function (done) {
      categoryDataService
        .getAllCategories()
        .done(function(categories){
            assert.equal(8, categories.length);
            done();
        });
    });

    it('Top element must be the most popular category', function(done) {
      categoryDataService
        .popularCategory()
        .done(function(categories){
          var mostPopularCategory = categories[0];
          assert.equal(mostPopularCategory.cat_name, 'shortLife');
          assert.equal(mostPopularCategory.total_sold, 397);
          done();
        });

    });
});


             /*
describe('categoryMethods: Display', function() {

  it('getAllCategories: Should return a list of categories', function(done) {
    categoryDataService.getAllCategories(function(err, results){
      assert.equal(8, results.length);
      done();
    });
  });
  it('Top element must be the most popular category', function(done) {
    categoryDataService.popularCategory(function(err, orderedPopularCategories) {
      var mostPopularCategory = orderedPopularCategories[0];
      assert.equal(mostPopularCategory.cat_name, 'shortLife')
      assert.equal(mostPopularCategory.total_sold, 397)
      done();
    });
  });
});

describe('categoryMethods: Alter', function() {

  var data = {
      cat_name : "fakeCat"
  };

  before(function(done) {
    categoryDataService.getAllCategories(function(err, results){
      assert.equal(8, results.length);
      done();
    });
  });

  it('insertCategory: Should insert a category', function(done) {

    categoryDataService.insertCategory(data, function(err, results){
      categoryDataService.getAllCategories(function(err, results){
        assert.equal(9, results.length);
        done();
      });

    });
    after(function(done){
      connection.query("delete from category where cat_name = ?", data.cat_name, function(err){
        done(err);
      });
    })
  });
});
*/
