//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        12/03/2015
//File:		        stockRemaining_test.js

var stockRem = require('../functions/stockRemaining');

var stockList = {
    'Milk 1l': 142,
    'Imasi': 125,
    'Bread': 130
}

var saleList = {  'Milk 1l': 10,
    Imasi: 25,
    Bread: 12 };

var stockLeft = { 'Milk 1l': '92.96%', Imasi: '80.00%', Bread: '90.77%' };

test('stockRem.stockRemaining()', function() {
    deepEqual(stockRem.stockRemaining(stockList,saleList), stockLeft);

})
