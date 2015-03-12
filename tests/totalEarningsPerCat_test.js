//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        12/03/2015
//File:		        totalEarningsPerCat_test.js

var totEarn = require('../totalEarningsPerCat');

var CatList = { shortLife: 
   			        [ { product: 'Milk 1l', qty: 142 },
     			      { product: 'Imasi', qty: 125 },
     			      { product: 'Bread', qty: 130 } ]
}

var salePriceList = {
    'Milk 1l': 1420.00,
    Imasi: 3125.00,
    Bread: 1560.00 };

var sPriceTot = {shortLife: 6105};

test('totEarn.totalEarningsPerCat()', function() {
    deepEqual(totEarn.totalEarningsPerCat(CatList,salePriceList), sPriceTot);

})
