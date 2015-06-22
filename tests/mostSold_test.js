//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        09/03/2015
//File:		        mostSold_test.js

var mSold = require('../functions/mostSold.js');

var list = {
    'Rose (plastic)': 14,
    'Bread': 50,
    'Milk': 20
}

var most = { name: 'Bread', amt: 50 }

test('mostSold()', function() {
    deepEqual(mSold.mostSold(list), most);
    
})
