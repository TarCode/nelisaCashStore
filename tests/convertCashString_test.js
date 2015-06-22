//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        12/03/2015
//File:		        convertCashString_test.js

var convertCash = require('../functions/convertCashString');

var list = { 'Milk 1l': 10.00,
    Imasi: 25.00,
    Bread: 12.55 };

var arr =  { 'Milk 1l': 'R10,00',
    Imasi: 'R25,00',
    Bread: 'R12,55' };

test('convertCash.convertCashString()', function() {
    deepEqual(convertCash.convertCashString(arr), list);
    
})
