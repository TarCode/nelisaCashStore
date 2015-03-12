//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        12/03/2015
//File:		        totalEarningsPerProduct_test.js

var totEarn = require('../totalEarningsPerProduct');

var quantityList = {
    'Milk 1l': 142,
    'Imasi': 125,
    'Bread': 130
}

var salePriceList = {
    'Milk 1l': 10.00,
    'Imasi': 25.00,
    'Bread': 11.50
}

var sPriceTot = [ { prodName: 'Milk 1l', totalEarnings: 1420 },
        { prodName: 'Imasi', totalEarnings: 3125 },
        { prodName: 'Bread', totalEarnings: 1495 }];

test('totEarn.totalEarningsPerProduct()', function() {
    deepEqual(totEarn.totalEarningsPerProduct(quantityList,salePriceList), sPriceTot);

})
