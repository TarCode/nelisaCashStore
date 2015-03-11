//Author:	        Taariq Isaacs
//Date: 	        09/03/2015
//File:		        mostSold_test.js

var mSold = require('../mostSold.js');

var list = {
    'Rose (plastic)': 14,
    'Bread': 50,
    'Milk': 20
}

var most = {
    name: 'Bread',
    noSold: 50
}

test('mostSold()', function() {
    deepEqual(mSold.mostSold(list), most);
    
})
