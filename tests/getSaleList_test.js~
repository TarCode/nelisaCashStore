//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        18/03/2015
//File:		        getSaleList_test.js

var saleList = require('../getSaleList.js');

var list = {
    'Milk': 3,
    'Imasi': 1,
    'Bread': 2
}

var arr = [ { itemName: 'Milk', noSold: 3 },
    { itemName: 'Imasi', noSold: 1 },
    { itemName: 'Bread', noSold: 2 },];

test('getSaleList.getSaleList()', function() {
    deepEqual(saleList.getSaleList(arr), list);
    
})
