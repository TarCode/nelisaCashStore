//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        12/03/2015
//File:		        totalEarningsPerProduct_test.js

var totEarn = require('../functions/totalEarningsPerProduct');

var quantityList = {
    'Milk 1l': 142,
    'Imasi': 125,
    'Bread': 130
}

var salePriceList = {  'Milk 1l': 10,
    Imasi: 25,
    Bread: 12 };

var sPriceTot = {'Milk 1l': 1420, Imasi: 3125, Bread: 1560};

test('totEarn.totalEarningsPerProduct()', function() {
    deepEqual(totEarn.totalEarningsPerProduct(quantityList,salePriceList), sPriceTot);

})
